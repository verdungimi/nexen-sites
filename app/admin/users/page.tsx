"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, ShieldOff } from "lucide-react";
import { motion } from "framer-motion";

interface UserItem {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  createdAt: number;
  avatar?: string;
}

// Real Convex queries - will return undefined if error occurs
const useUsers = () => {
  const result = useQuery(api.users.getAll);
  return result ?? [];
};

export default function UsersPage() {
  const toggleAdmin = useMutation(api.users.toggleAdmin);
  const deleteUser = useMutation(api.users.remove);
  const users = useUsers();

  const handleToggleAdmin = async (user: UserItem) => {
    const newRole = user.role === "admin" ? "user" : "admin";
    if (confirm(`Biztosan ${newRole === "admin" ? "adminná" : "felhasználóvá"} szeretnéd tenni ${user.name}-t?`)) {
      await toggleAdmin({ id: user._id as any, role: newRole });
    }
  };

  const handleDelete = async (user: UserItem) => {
    if (confirm(`Biztosan törölni szeretnéd ${user.name} felhasználót?`)) {
      await deleteUser({ id: user._id as any });
    }
  };

  const columns = [
    {
      key: "user" as const,
      label: "Felhasználó",
      render: (_: any, row: UserItem) => (
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={row.avatar} alt={row.name} />
            <AvatarFallback className="bg-[#50AEDF] text-white">
              {row.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-[#EAF0FF]">{row.name}</p>
            <p className="text-sm text-[#A8B3C7]">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: "role" as const,
      label: "Szerepkör",
      render: (role: string) => (
        <Badge variant={role === "admin" ? "default" : "secondary"}>
          {role === "admin" ? "Admin" : "Felhasználó"}
        </Badge>
      ),
    },
    {
      key: "createdAt" as const,
      label: "Regisztrálva",
      render: (timestamp: number) =>
        new Date(timestamp).toLocaleDateString("hu-HU"),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#EAF0FF] mb-2">Felhasználók Kezelése</h2>
        <p className="text-[#A8B3C7]">Tekintse meg és kezelje a regisztrált felhasználókat</p>
      </div>

      <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
        <CardHeader>
          <CardTitle className="text-[#EAF0FF]">Felhasználók Listája</CardTitle>
          <CardDescription className="text-[#A8B3C7]">
            {users.length} felhasználó található
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={users}
            columns={columns}
            onEdit={(user) => handleToggleAdmin(user)}
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-[#EAF0FF] text-lg">Összes Felhasználó</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#50AEDF]">{users.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-[#EAF0FF] text-lg">Adminok</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#7C5CFF]">
              {users.filter(u => u.role === "admin").length}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-[#EAF0FF] text-lg">Felhasználók</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#EAF0FF]">
              {users.filter(u => u.role === "user").length}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
