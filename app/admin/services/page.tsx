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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  _id: string;
  title: string;
  description: string;
  price: string;
  iconUrl: string;
  featured: boolean;
  createdAt: number;
}

// Real Convex queries - will return undefined if error occurs
const useServices = () => {
  const result = useQuery(api.services.getAll);
  return result ?? [];
};

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [featured, setFeatured] = useState(false);

  const addService = useMutation(api.services.add);
  const updateService = useMutation(api.services.update);
  const deleteService = useMutation(api.services.remove);
  const services = useServices();

  const handleAdd = () => {
    setEditingService(null);
    setTitle("");
    setDescription("");
    setPrice("");
    setIconUrl("");
    setFeatured(false);
    setIsModalOpen(true);
  };

  const handleEdit = (service: ServiceItem) => {
    setEditingService(service);
    setTitle(service.title);
    setDescription(service.description);
    setPrice(service.price);
    setIconUrl(service.iconUrl);
    setFeatured(service.featured);
    setIsModalOpen(true);
  };

  const handleDelete = async (service: ServiceItem) => {
    if (confirm(`Biztosan törölni szeretnéd a "${service.title}" szolgáltatást?`)) {
      await deleteService({ id: service._id as any });
    }
  };

  const handleSave = async () => {
    if (!title.trim() || !description.trim() || !price.trim()) return;

    if (editingService) {
      await updateService({ 
        id: editingService._id as any, 
        title, 
        description, 
        price, 
        iconUrl: iconUrl || undefined, 
        featured 
      });
    } else {
      await addService({ title, description, price, iconUrl: iconUrl || undefined, featured });
    }

    setIsModalOpen(false);
    setEditingService(null);
  };

  const columns = [
    {
      key: "title" as const,
      label: "Cím",
    },
    {
      key: "description" as const,
      label: "Leírás",
      render: (description: string) => (
        <span className="truncate max-w-md">{description}</span>
      ),
    },
    {
      key: "price" as const,
      label: "Ár",
    },
    {
      key: "featured" as const,
      label: "Kiemelt",
      render: (featured: boolean) => (
        <Badge variant={featured ? "default" : "secondary"}>
          {featured ? "Igen" : "Nem"}
        </Badge>
      ),
    },
    {
      key: "createdAt" as const,
      label: "Létrehozva",
      render: (timestamp: number) =>
        new Date(timestamp).toLocaleDateString("hu-HU"),
    },
  ];

  // Check if Convex is configured
  const convexUrl = typeof window !== "undefined" ? process.env.NEXT_PUBLIC_CONVEX_URL : null;

  if (!convexUrl) {
    return (
      <div className="space-y-6">
        <div className="bg-yellow-900/30 border border-yellow-700 text-yellow-400 p-4 rounded-lg">
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
      {convexError && (
        <div className="bg-red-900/30 border border-red-700 text-red-400 p-4 rounded-lg">
          <p className="font-semibold">Convex hiba</p>
          <p className="text-sm mt-2">{convexError}</p>
          <p className="text-xs mt-2 text-red-300">
            Ellenőrizze, hogy a Convex backend deployolva van-e: npx convex deploy --prod
          </p>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#EAF0FF] mb-2">Szolgáltatások Kezelése</h2>
          <p className="text-[#A8B3C7]">Adja hozzá és kezelje a weboldal szolgáltatásait</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleAdd}
            className="bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Új Szolgáltatás
          </Button>
        </motion.div>
      </div>

      <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
        <CardHeader>
          <CardTitle className="text-[#EAF0FF]">Szolgáltatások Listája</CardTitle>
          <CardDescription className="text-[#A8B3C7]">
            {services.length} szolgáltatás található
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={services}
            columns={columns}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>

      <EditModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={editingService ? "Szolgáltatás Szerkesztése" : "Új Szolgáltatás Hozzáadása"}
        description="Adja hozzá vagy szerkessze a szolgáltatás részleteit"
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
              placeholder="Szolgáltatás címe"
              className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
            />
          </div>
          <div>
            <Label htmlFor="description" className="text-[#A8B3C7]">
              Leírás *
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Szolgáltatás részletes leírása"
              rows={4}
              className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price" className="text-[#A8B3C7]">
                Ár *
              </Label>
              <Input
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="pl. 500,000 Ft"
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
              />
            </div>
            <div>
              <Label htmlFor="iconUrl" className="text-[#A8B3C7]">
                Ikon URL
              </Label>
              <Input
                id="iconUrl"
                value={iconUrl}
                onChange={(e) => setIconUrl(e.target.value)}
                placeholder="https://example.com/icon.png"
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-4 h-4 rounded border-[rgba(255,255,255,0.1)] bg-[#0a0a0a]"
            />
            <Label htmlFor="featured" className="text-[#A8B3C7] cursor-pointer">
              Kiemelt szolgáltatás
            </Label>
          </div>
        </div>
      </EditModal>
    </div>
  );
}
