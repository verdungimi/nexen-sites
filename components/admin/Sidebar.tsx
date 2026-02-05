"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Image as ImageIcon,
  FileText,
  Briefcase,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: ImageIcon, label: "Képek", href: "/admin/images" },
  { icon: FileText, label: "Szövegek", href: "/admin/texts" },
  { icon: Briefcase, label: "Szolgáltatások", href: "/admin/services" },
  { icon: Users, label: "Felhasználók", href: "/admin/users" },
  { icon: Settings, label: "Beállítások", href: "/admin/settings" },
];

export default function AdminSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 256 : 64 }}
      className="fixed left-0 top-0 h-screen bg-[#0F1620] border-r border-[rgba(255,255,255,0.1)] z-50 flex flex-col"
    >
      <div className="p-4 border-b border-[rgba(255,255,255,0.1)] flex items-center justify-between">
        {isOpen && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-[#EAF0FF]"
          >
            Admin Panel
          </motion.h2>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-colors"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5 text-[#A8B3C7]" />
          ) : (
            <ChevronRight className="w-5 h-5 text-[#A8B3C7]" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all group",
                  isActive
                    ? "bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] text-white"
                    : "text-[#A8B3C7] hover:bg-[rgba(255,255,255,0.05)] hover:text-[#EAF0FF]"
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </motion.aside>
  );
}
