"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/Sidebar";
import AdminHeader from "@/components/admin/Header";
import AdminErrorBoundary from "./error-boundary";
import ConvexErrorHandler from "@/components/admin/ConvexErrorHandler";
import { motion } from "framer-motion";

const ADMIN_USERNAME = "nexenadmin";
const ADMIN_PASSWORD = "Imi20090511";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const authStatus = sessionStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_authenticated", "true");
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsAuthenticated(false);
    router.push("/admin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#50AEDF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-lg p-8">
            <h1 className="text-2xl font-bold text-[#EAF0FF] mb-6">Admin Bejelentkezés</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#A8B3C7] mb-2">
                  Felhasználónév
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A8B3C7] mb-2">
                  Jelszó
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Bejelentkezés
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  // Close sidebar on mobile by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AdminErrorBoundary>
      <ConvexErrorHandler>
        <div className="min-h-screen bg-[#0a0a0a] flex">
          <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col lg:ml-64 transition-all duration-300">
            <AdminHeader onLogout={handleLogout} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
            <main className="flex-1 p-3 lg:p-6">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </main>
          </div>
        </div>
      </ConvexErrorHandler>
    </AdminErrorBoundary>
  );
}
