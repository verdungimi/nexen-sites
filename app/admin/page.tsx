"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Image as ImageIcon, FileText, Briefcase, Users, TrendingUp, Activity } from "lucide-react";

// Placeholder data - replace with real Convex queries
const useDashboardStats = () => {
  // const images = useQuery(api.images.getCount) ?? 0;
  // const texts = useQuery(api.texts.getCount) ?? 0;
  // const services = useQuery(api.services.getCount) ?? 0;
  // const users = useQuery(api.users.getCount) ?? 0;
  
  // Using dummy data for now
  return {
    images: 24,
    texts: 12,
    services: 8,
    users: 156,
    recentActivity: 12,
    growth: 8.2,
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
      change: "+12%",
    },
    {
      title: "Szövegek",
      value: stats.texts,
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      change: "+5%",
    },
    {
      title: "Szolgáltatások",
      value: stats.services,
      icon: Briefcase,
      color: "from-green-500 to-emerald-500",
      change: "+3%",
    },
    {
      title: "Felhasználók",
      value: stats.users,
      icon: Users,
      color: "from-orange-500 to-red-500",
      change: "+8%",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#EAF0FF] mb-2">Üdvözöljük az Admin Panelben!</h2>
        <p className="text-[#A8B3C7]">Itt kezelheti a weboldal tartalmát és beállításait.</p>
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
              <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-[#A8B3C7]">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#EAF0FF]">{stat.value}</div>
                  <p className="text-xs text-green-400 mt-1">{stat.change} az előző hónaphoz képest</p>
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
          <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
            <CardHeader>
              <CardTitle className="text-[#EAF0FF] flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#50AEDF]" />
                Legutóbbi tevékenységek
              </CardTitle>
              <CardDescription className="text-[#A8B3C7]">
                Az elmúlt 24 óra eseményei
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "Új kép hozzáadva", time: "2 órával ezelőtt", type: "image" },
                  { action: "Szöveg frissítve", time: "5 órával ezelőtt", type: "text" },
                  { action: "Szolgáltatás módosítva", time: "1 napja", type: "service" },
                  { action: "Új felhasználó regisztrált", time: "2 napja", type: "user" },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                  >
                    <div>
                      <p className="text-sm text-[#EAF0FF]">{activity.action}</p>
                      <p className="text-xs text-[#A8B3C7]">{activity.time}</p>
                    </div>
                  </motion.div>
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
          <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
            <CardHeader>
              <CardTitle className="text-[#EAF0FF] flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#7C5CFF]" />
                Statisztikák
              </CardTitle>
              <CardDescription className="text-[#A8B3C7]">
                Teljesítmény áttekintés
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#A8B3C7]">Növekedés</span>
                  <span className="text-sm font-semibold text-green-400">+{stats.growth}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#A8B3C7]">Aktív felhasználók</span>
                  <span className="text-sm font-semibold text-[#EAF0FF]">{stats.users}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#A8B3C7]">Tartalom elemek</span>
                  <span className="text-sm font-semibold text-[#EAF0FF]">
                    {stats.images + stats.texts + stats.services}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#A8B3C7]">Legutóbbi frissítés</span>
                  <span className="text-sm font-semibold text-[#EAF0FF]">Ma</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
