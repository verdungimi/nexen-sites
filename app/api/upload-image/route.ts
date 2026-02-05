import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "Nincs fájl megadva" },
        { status: 400 }
      );
    }

    if (!title || title.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "A cím kötelező" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: "Csak képfájlok engedélyezettek (JPEG, PNG, WEBP, GIF)" },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, error: "A fájl mérete maximum 10MB lehet" },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const sanitizedTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const fileExtension = file.name.split(".").pop();
    const filename = `images/${timestamp}-${sanitizedTitle}.${fileExtension}`;

    // Upload to Vercel Blob Storage
    // Vercel Blob accepts File, Blob, ArrayBuffer, Buffer, or ReadableStream
    // Check if token is available
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    
    if (!token) {
      console.error("BLOB_READ_WRITE_TOKEN is not set in environment variables");
      throw new Error("BLOB_READ_WRITE_TOKEN environment variable is not set. Please redeploy your Vercel project after adding the token.");
    }
    
    const blob = await put(filename, file, {
      access: "public",
      contentType: file.type,
      token: token, // Always pass token if we reach here
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      filename: filename,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    // Check if it's a token error
    const isTokenError = errorMessage.includes("No token found") || 
                        errorMessage.includes("BLOB_READ_WRITE_TOKEN") ||
                        errorMessage.includes("environment variable is not set");
    
    return NextResponse.json(
      {
        success: false,
        error: "Hiba történt a fájl feltöltése során",
        details: isTokenError 
          ? `${errorMessage}. A token be van állítva, de újra kell deployolni a projektet a Vercel Dashboard-ban: Deployments → Redeploy (vagy Settings → Redeploy)`
          : errorMessage,
        stack: process.env.NODE_ENV === "development" ? errorStack : undefined,
      },
      { status: 500 }
    );
  }
}
