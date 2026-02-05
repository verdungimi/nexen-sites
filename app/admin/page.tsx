"use client";

import { useState, useEffect } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Upload, Image as ImageIcon, Link, X, Eye, Trash2, LogOut, Settings, BarChart3 } from "lucide-react";
import Image from "next/image";

const ADMIN_USERNAME = "nexenadmin";
const ADMIN_PASSWORD = "Imi20090511";

interface ImageItem {
  _id: string;
  url: string;
  title: string;
  createdAt: number;
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"upload" | "manage" | "stats">("upload");
  
  // Upload form state
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadMethod, setUploadMethod] = useState<"url" | "file">("file");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string; details?: string }>({
    type: null,
    message: "",
    details: undefined,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const addImage = useMutation(api.images.addImage);
  const images = useQuery(api.images.getImages) as ImageItem[] | undefined;

  useEffect(() => {
    const authStatus = sessionStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_authenticated", "true");
    } else {
      setLoginError("Hibás felhasználónév vagy jelszó!");
      setUsername("");
      setPassword("");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        setStatus({
          type: "error",
          message: "Csak képfájlok engedélyezettek (JPEG, PNG, WEBP, GIF)",
        });
        return;
      }
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setStatus({
          type: "error",
          message: "A fájl mérete maximum 10MB lehet",
        });
        return;
      }
      setSelectedFile(file);
      setStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    setUploadProgress(0);

    try {
      let imageUrl = url;

      // If uploading file
      if (uploadMethod === "file" && selectedFile) {
        setUploadProgress(25);
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("title", title);

        const uploadResponse = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        });

        setUploadProgress(50);

        if (!uploadResponse.ok) {
          let errorData;
          try {
            errorData = await uploadResponse.json();
          } catch (e) {
            errorData = { error: `HTTP ${uploadResponse.status}: ${uploadResponse.statusText}` };
          }
          const errorMessage = errorData.error || `Fájl feltöltési hiba (${uploadResponse.status})`;
          const errorDetails = errorData.details || errorData.error || undefined;
          console.error("Upload error:", errorData);
          throw new Error(errorMessage + (errorDetails && errorDetails !== errorMessage ? `: ${errorDetails}` : ""));
        }

        const uploadData = await uploadResponse.json();
        imageUrl = uploadData.url;
        setUploadProgress(75);
      } else if (uploadMethod === "url" && !url) {
        throw new Error("Kérjük, adj meg egy URL-t vagy válassz ki egy fájlt");
      }

      if (!imageUrl) {
        throw new Error("Kérjük, adj meg egy URL-t vagy válassz ki egy fájlt");
      }

      await addImage({ url: imageUrl, title });
      setUploadProgress(100);

      // Reset form
      setTitle("");
      setUrl("");
      setSelectedFile(null);
      setStatus({ type: "success", message: "Kép sikeresen hozzáadva!" });
      
      // Reset progress after 2 seconds
      setTimeout(() => {
        setUploadProgress(0);
      }, 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Hiba történt a kép hozzáadása során. Kérjük, próbáld újra.";
      setStatus({
        type: "error",
        message: errorMessage,
        details: error instanceof Error && error.stack ? error.stack.split('\n')[0] : undefined,
      });
      setUploadProgress(0);
      console.error("Error adding image:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
            <h1 className="text-3xl font-bold mb-6 text-[#EAF0FF] text-center">Admin Bejelentkezés</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-[#A8B3C7] mb-2">
                  Felhasználónév
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Felhasználónév"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#A8B3C7] mb-2">
                  Jelszó
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Jelszó"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
                />
              </div>
              {loginError && (
                <div className="p-4 rounded-lg bg-red-900/30 border border-red-700 text-red-400">
                  {loginError}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Bejelentkezés
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="bg-[#0F1620] border-b border-[rgba(255,255,255,0.1)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-[#EAF0FF]">Admin Panel</h1>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false);
                sessionStorage.removeItem("admin_authenticated");
              }}
              className="flex items-center gap-2 text-sm text-[#A8B3C7] hover:text-[#50AEDF] transition-colors px-4 py-2 rounded-lg hover:bg-[#0a0a0a]"
            >
              <LogOut className="w-4 h-4" />
              Kijelentkezés
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[rgba(255,255,255,0.1)]">
          <button
            onClick={() => setActiveTab("upload")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === "upload"
                ? "text-[#50AEDF] border-[#50AEDF]"
                : "text-[#A8B3C7] border-transparent hover:text-[#EAF0FF]"
            }`}
          >
            <div className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Kép Feltöltése
            </div>
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === "manage"
                ? "text-[#50AEDF] border-[#50AEDF]"
                : "text-[#A8B3C7] border-transparent hover:text-[#EAF0FF]"
            }`}
          >
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Képek Kezelése ({images?.length || 0})
            </div>
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === "stats"
                ? "text-[#50AEDF] border-[#50AEDF]"
                : "text-[#A8B3C7] border-transparent hover:text-[#EAF0FF]"
            }`}
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Statisztikák
            </div>
          </button>
        </div>

        {/* Upload Tab */}
        {activeTab === "upload" && (
          <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#EAF0FF]">Új Kép Hozzáadása</h2>
            
            {/* Upload Method Toggle */}
            <div className="flex gap-4 mb-6">
              <button
                type="button"
                onClick={() => {
                  setUploadMethod("file");
                  setUrl("");
                }}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                  uploadMethod === "file"
                    ? "bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] text-white"
                    : "bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-[#A8B3C7] hover:border-[#50AEDF]"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" />
                  Fájl Feltöltése
                </div>
              </button>
              <button
                type="button"
                onClick={() => {
                  setUploadMethod("url");
                  setSelectedFile(null);
                }}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                  uploadMethod === "url"
                    ? "bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] text-white"
                    : "bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-[#A8B3C7] hover:border-[#50AEDF]"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Link className="w-5 h-5" />
                  URL Megadása
                </div>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              {uploadMethod === "file" && (
                <div>
                  <label className="block text-sm font-medium text-[#A8B3C7] mb-2">
                    Kép Fájl
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                      required={uploadMethod === "file"}
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[rgba(255,255,255,0.1)] rounded-lg cursor-pointer hover:border-[#50AEDF] transition-colors bg-[#0a0a0a]"
                    >
                      {selectedFile ? (
                        <div className="flex flex-col items-center gap-2">
                          <ImageIcon className="w-12 h-12 text-[#50AEDF]" />
                          <span className="text-sm text-[#EAF0FF] font-medium">{selectedFile.name}</span>
                          <span className="text-xs text-[#A8B3C7]">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedFile(null);
                            }}
                            className="mt-2 text-xs text-red-400 hover:text-red-300"
                          >
                            Fájl eltávolítása
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="w-12 h-12 text-[#A8B3C7]" />
                          <span className="text-sm text-[#EAF0FF] font-medium">Kattints a feltöltéshez</span>
                          <span className="text-xs text-[#A8B3C7]">vagy húzd ide a fájlt</span>
                          <span className="text-xs text-[#A8B3C7]">JPEG, PNG, WEBP, GIF (max 10MB)</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              )}

              {/* URL Input */}
              {uploadMethod === "url" && (
                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-[#A8B3C7] mb-2">
                    Kép URL
                  </label>
                  <input
                    id="url"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required={uploadMethod === "url"}
                    className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
                  />
                </div>
              )}

              {/* Title Input */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-[#A8B3C7] mb-2">
                  Cím <span className="text-red-400">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Kép címe"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
                />
              </div>

              {/* Progress Bar */}
              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="w-full bg-[#0a0a0a] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] h-2 transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              )}

              {/* Status Message */}
              {status.type && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-900/30 border border-green-700 text-green-400"
                      : "bg-red-900/30 border border-red-700 text-red-400"
                  }`}
                >
                  <div className="font-semibold">{status.message}</div>
                  {status.details && status.type === "error" && (
                    <div className="mt-2 text-sm opacity-75">{status.details}</div>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || (uploadMethod === "file" && !selectedFile) || (uploadMethod === "url" && !url)}
                className="w-full bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white font-semibold px-6 py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Feltöltés...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Kép Hozzáadása
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Manage Tab */}
        {activeTab === "manage" && (
          <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#EAF0FF]">Képek Kezelése</h2>
            
            {images === undefined ? (
              <div className="text-center py-12 text-[#A8B3C7]">Betöltés...</div>
            ) : images.length === 0 ? (
              <div className="text-center py-12 text-[#A8B3C7]">Még nincsenek képek.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img) => (
                  <div
                    key={img._id}
                    className="group relative bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden hover:border-[#50AEDF]/50 transition-all"
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={img.url}
                        alt={img.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                        <button
                          onClick={() => window.open(img.url, "_blank")}
                          className="px-3 py-2 bg-[#50AEDF] text-white rounded-lg hover:bg-[#4098cc] transition-colors flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Megtekintés
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-[#EAF0FF] font-semibold mb-1 truncate">{img.title}</h3>
                      <p className="text-xs text-[#A8B3C7] truncate">{img.url}</p>
                      <p className="text-xs text-[#A8B3C7] mt-1">
                        {new Date(img.createdAt).toLocaleDateString("hu-HU")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === "stats" && (
          <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#EAF0FF]">Statisztikák</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-lg p-6">
                <div className="text-3xl font-bold text-[#50AEDF] mb-2">{images?.length || 0}</div>
                <div className="text-[#A8B3C7]">Összes Kép</div>
              </div>
              <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-lg p-6">
                <div className="text-3xl font-bold text-[#7C5CFF] mb-2">
                  {images?.filter((img) => {
                    const daysSinceUpload = (Date.now() - img.createdAt) / (1000 * 60 * 60 * 24);
                    return daysSinceUpload <= 7;
                  }).length || 0}
                </div>
                <div className="text-[#A8B3C7]">Utolsó 7 Napban</div>
              </div>
              <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] rounded-lg p-6">
                <div className="text-3xl font-bold text-[#50AEDF] mb-2">
                  {images?.filter((img) => img.url.startsWith("/uploads")).length || 0}
                </div>
                <div className="text-[#A8B3C7]">Feltöltött Fájlok</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
