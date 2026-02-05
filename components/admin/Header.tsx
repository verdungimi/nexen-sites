"use client";

import { LogOut, Menu } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  onLogout: () => void;
  onMenuClick: () => void;
}

export default function AdminHeader({ onLogout, onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-[#0F1620] border-b border-[rgba(255,255,255,0.1)] flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-colors lg:hidden"
        >
          <Menu className="w-5 h-5 text-[#A8B3C7]" />
        </button>
        <h1 className="text-xl font-semibold text-[#EAF0FF]">Admin Dashboard</h1>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLogout}
        className="flex items-center gap-2 px-4 py-2 text-sm text-[#A8B3C7] hover:text-[#50AEDF] transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
      >
        <LogOut className="w-4 h-4" />
        <span className="hidden sm:inline">Kijelentkezés</span>
      </motion.button>
    </header>
  );
}
