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
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface TextItem {
  _id: string;
  key: string;
  section: string;
  title: string;
  content: string;
  updatedAt: number;
}

// Real Convex queries
const useTexts = () => {
  const texts = useQuery(api.texts.getAll) ?? [];
  return texts;
};

export default function TextsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingText, setEditingText] = useState<TextItem | null>(null);
  const [key, setKey] = useState("");
  const [section, setSection] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addText = useMutation(api.texts.add);
  const updateText = useMutation(api.texts.update);
  const deleteText = useMutation(api.texts.remove);
  const texts = useTexts();

  const handleAdd = () => {
    setEditingText(null);
    setKey("");
    setSection("");
    setTitle("");
    setContent("");
    setIsModalOpen(true);
  };

  const handleEdit = (text: TextItem) => {
    setEditingText(text);
    setKey(text.key);
    setSection(text.section);
    setTitle(text.title);
    setContent(text.content);
    setIsModalOpen(true);
  };

  const handleDelete = async (text: TextItem) => {
    if (confirm(`Biztosan törölni szeretnéd a "${text.title}" szöveget?`)) {
      await deleteText({ id: text._id as any });
    }
  };

  const handleSave = async () => {
    if (!key.trim() || !title.trim() || !content.trim()) return;

    if (editingText) {
      await updateText({ id: editingText._id as any, key, section, title, content });
    } else {
      await addText({ key, section, title, content });
    }

    setIsModalOpen(false);
    setEditingText(null);
  };

  const columns = [
    {
      key: "section" as const,
      label: "Szekció",
    },
    {
      key: "key" as const,
      label: "Kulcs",
    },
    {
      key: "title" as const,
      label: "Cím",
    },
    {
      key: "content" as const,
      label: "Tartalom",
      render: (content: string) => (
        <span className="truncate max-w-md">{content}</span>
      ),
    },
    {
      key: "updatedAt" as const,
      label: "Frissítve",
      render: (timestamp: number) =>
        new Date(timestamp).toLocaleDateString("hu-HU"),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#EAF0FF] mb-2">Szövegek Kezelése</h2>
          <p className="text-[#A8B3C7]">Szerkessze a weboldal szöveges tartalmait</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleAdd}
            className="bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Új Szöveg
          </Button>
        </motion.div>
      </div>

      <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
        <CardHeader>
          <CardTitle className="text-[#EAF0FF]">Szövegek Listája</CardTitle>
          <CardDescription className="text-[#A8B3C7]">
            {texts.length} szöveg található
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={texts}
            columns={columns}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>

      <EditModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={editingText ? "Szöveg Szerkesztése" : "Új Szöveg Hozzáadása"}
        description="Szerkessze a weboldal szöveges tartalmait"
        onSave={handleSave}
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="section" className="text-[#A8B3C7]">
              Szekció *
            </Label>
            <Input
              id="section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              placeholder="pl. Hero, Rólunk, Szolgáltatások"
              className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
            />
          </div>
          <div>
            <Label htmlFor="key" className="text-[#A8B3C7]">
              Kulcs (egyedi azonosító) *
            </Label>
            <Input
              id="key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="pl. hero-title, about-content"
              className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
            />
          </div>
          <div>
            <Label htmlFor="title" className="text-[#A8B3C7]">
              Cím *
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Szöveg címe"
              className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
            />
          </div>
          <div>
            <Label htmlFor="content" className="text-[#A8B3C7]">
              Tartalom *
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Szöveg tartalma"
              rows={6}
              className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
            />
          </div>
        </div>
      </EditModal>
    </div>
  );
}
