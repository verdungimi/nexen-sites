"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/admin/DataTable";
import EditModal from "@/components/admin/EditModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Upload, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageItem {
  _id: string;
  url: string;
  title: string;
  createdAt: number;
}

// Real Convex queries with error handling
const useImages = () => {
  let images: ImageItem[] = [];
  try {
    const result = useQuery(api.images.getAll);
    images = result ?? [];
  } catch (error) {
    console.error("Error fetching images:", error);
    images = [];
  }
  return images;
};

export default function ImagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<ImageItem | null>(null);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addImage = useMutation(api.images.add);
  const updateImage = useMutation(api.images.update);
  const deleteImage = useMutation(api.images.remove);
  const images = useImages();

  // Check if Convex is configured
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  const handleAdd = () => {
    setEditingImage(null);
    setTitle("");
    setUrl("");
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  const handleEdit = (image: ImageItem) => {
    setEditingImage(image);
    setTitle(image.title);
    setUrl(image.url);
    setIsModalOpen(true);
  };

  const handleDelete = async (image: ImageItem) => {
    if (confirm(`Biztosan törölni szeretnéd a "${image.title}" képet?`)) {
      await deleteImage({ id: image._id as any });
    }
  };

  const handleSave = async () => {
    if (!title.trim()) return;

    try {
      if (editingImage) {
        await updateImage({ id: editingImage._id as any, title, url });
      } else {
        await addImage({ title, url });
      }

      setIsModalOpen(false);
      setEditingImage(null);
      setTitle("");
      setUrl("");
      setError(null);
    } catch (err) {
      console.error("Error saving image:", err);
      setError(err instanceof Error ? err.message : "Hiba történt a mentés során");
    }
  };

  const columns = [
    {
      key: "preview" as const,
      label: "Előnézet",
      render: (_: any, row: ImageItem) => (
        <div className="w-16 h-16 relative rounded-lg overflow-hidden">
          <Image
            src={row.url}
            alt={row.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      ),
    },
    {
      key: "title" as const,
      label: "Cím",
    },
    {
      key: "url" as const,
      label: "URL",
      render: (url: string) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#50AEDF] hover:underline truncate max-w-xs"
        >
          {url}
        </a>
      ),
    },
    {
      key: "createdAt" as const,
      label: "Létrehozva",
      render: (timestamp: number) =>
        new Date(timestamp).toLocaleDateString("hu-HU"),
    },
  ];

  // Show error if Convex is not configured
  if (!convexUrl) {
    return (
      <div className="space-y-6">
        <div className="bg-red-900/30 border border-red-700 text-red-400 p-4 rounded-lg">
          <p className="font-semibold">Convex nincs konfigurálva</p>
          <p className="text-sm mt-2">
            Kérjük, állítsa be a NEXT_PUBLIC_CONVEX_URL environment változót a Vercel Dashboard-ban.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-900/30 border border-red-700 text-red-400 p-4 rounded-lg">
          {error}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#EAF0FF] mb-2">Képek Kezelése</h2>
          <p className="text-[#A8B3C7]">Töltse fel és kezelje a weboldal képeit</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleAdd}
            className="bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Új Kép
          </Button>
        </motion.div>
      </div>

      <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
        <CardHeader>
          <CardTitle className="text-[#EAF0FF]">Képek Listája</CardTitle>
          <CardDescription className="text-[#A8B3C7]">
            {images.length} kép található
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={images}
            columns={columns}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>

      <EditModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={editingImage ? "Kép Szerkesztése" : "Új Kép Hozzáadása"}
        description="Töltse fel egy új képet vagy adjon meg egy URL-t"
        onSave={handleSave}
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-[#A8B3C7]">
              Cím *
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Kép címe"
              className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
            />
          </div>
          <div>
            <Label htmlFor="url" className="text-[#A8B3C7]">
              URL vagy Fájl
            </Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white"
              />
              <Button
                type="button"
                variant="outline"
                className="border-[rgba(255,255,255,0.1)] text-[#A8B3C7]"
              >
                <Upload className="w-4 h-4 mr-2" />
                Feltöltés
              </Button>
            </div>
          </div>
          {selectedFile && (
            <div className="p-4 bg-[rgba(255,255,255,0.05)] rounded-lg">
              <p className="text-sm text-[#A8B3C7]">Kiválasztott fájl: {selectedFile.name}</p>
            </div>
          )}
        </div>
      </EditModal>
    </div>
  );
}
