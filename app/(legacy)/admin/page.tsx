"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Image as ImageIcon, FileText, Briefcase, Users, TrendingUp, Activity } from "lucide-react";

// Dashboard stats with error handling
const useDashboardStats = () => {
  let images = 0;
  let texts = 0;
  let services = 0;
  let users = 0;
  
  try {
    const imagesData = useQuery(api.images.getAll);
    images = imagesData?.length ?? 0;
  } catch (error) {
    console.error("Error fetching images count:", error);
  }
  
  try {
    const textsData = useQuery(api.texts.getAll);
    texts = textsData?.length ?? 0;
  } catch (error) {
    console.error("Error fetching texts count:", error);
  }
  
  try {
    const servicesData = useQuery(api.services.getAll);
    services = servicesData?.length ?? 0;
  } catch (error) {
    console.error("Error fetching services count:", error);
  }
  
  try {
    const usersData = useQuery(api.users.getAll);
    users = usersData?.length ?? 0;
  } catch (error) {
    console.error("Error fetching users count:", error);
  }
  
  return {
    images,
    texts,
    services,
    users,
  };
};

export default function DashboardPage() {
  const stats = useDashboardStats();

  const statCards = [
    {
      title: "Képek",
      value: stats.images,
      icon: ImageIcon,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Szövegek",
      value: stats.texts,
      icon: FileText,
      color: "from-[#F2A93B] to-[#2DD4BF]",
    },
    {
      title: "Szolgáltatások",
      value: stats.services,
      icon: Briefcase,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Felhasználók",
      value: stats.users,
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-[#F3EFE6] mb-2">Üdvözöljük az Admin Panelben!</h2>
        <p className="text-[#A69F91]">Itt kezelheti a weboldal tartalmát és beállításait.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-[#17151C] border-[rgba(255,255,255,0.1)]">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-[#A69F91]">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#F3EFE6]">{stat.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-[#17151C] border-[rgba(255,255,255,0.1)]">
            <CardHeader>
              <CardTitle className="text-[#F3EFE6] flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#2DD4BF]" />
                Tartalom kezelése
              </CardTitle>
              <CardDescription className="text-[#A69F91]">
                Gyors hozzáférés a szerkeszthető tartalmakhoz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { label: "Képek", href: "/admin/images", icon: ImageIcon },
                  { label: "Szövegek", href: "/admin/texts", icon: FileText },
                  { label: "Szolgáltatások", href: "/admin/services", icon: Briefcase },
                  { label: "Felhasználók", href: "/admin/users", icon: Users },
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                  >
                    <item.icon className="w-4 h-4 text-[#A69F91]" />
                    <p className="text-sm text-[#F3EFE6]">{item.label}</p>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-[#17151C] border-[rgba(255,255,255,0.1)]">
            <CardHeader>
              <CardTitle className="text-[#F3EFE6] flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#F2A93B]" />
                Áttekintés
              </CardTitle>
              <CardDescription className="text-[#A69F91]">
                Jelenlegi tartalom összesítve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#A69F91]">Aktív felhasználók</span>
                  <span className="text-sm font-semibold text-[#F3EFE6]">{stats.users}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#A69F91]">Tartalom elemek</span>
                  <span className="text-sm font-semibold text-[#F3EFE6]">
                    {stats.images + stats.texts + stats.services}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
