"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface EditModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  onSave?: () => void;
  onCancel?: () => void;
  saveLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
}

export default function EditModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  onSave,
  onCancel,
  saveLabel = "Mentés",
  cancelLabel = "Mégse",
  isLoading = false,
}: EditModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0F1620] border-[rgba(255,255,255,0.1)] text-white max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <DialogHeader>
            <DialogTitle className="text-[#EAF0FF]">{title}</DialogTitle>
            {description && (
              <DialogDescription className="text-[#A8B3C7]">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="py-4">{children}</div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                onOpenChange(false);
                onCancel?.();
              }}
              className="border-[rgba(255,255,255,0.1)] text-[#A8B3C7] hover:bg-[rgba(255,255,255,0.05)]"
            >
              {cancelLabel}
            </Button>
            <Button
              onClick={onSave}
              disabled={isLoading}
              className="bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                saveLabel
              )}
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
