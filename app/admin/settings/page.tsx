"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Save, Palette, Mail, Globe, Image as ImageIcon } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "Nexen Sites",
    logoUrl: "https://example.com/logo.png",
    primaryColor: "#50AEDF",
    secondaryColor: "#7C5CFF",
    contactEmail: "info@nexensites.hu",
    contactPhone: "+36 1 234 5678",
    facebookUrl: "https://facebook.com/nexensites",
    instagramUrl: "https://instagram.com/nexensites",
    twitterUrl: "https://twitter.com/nexensites",
  });

  const updateSettings = useMutation(api.settings.update);
  const currentSettings = useQuery(api.settings.getAll);

  // Load settings when available
  useEffect(() => {
    if (currentSettings) {
      setSettings({
        siteName: currentSettings.siteName || "",
        logoUrl: currentSettings.logoUrl || "",
        primaryColor: currentSettings.primaryColor || "#50AEDF",
        secondaryColor: currentSettings.secondaryColor || "#7C5CFF",
        contactEmail: currentSettings.contactEmail || "",
        contactPhone: currentSettings.contactPhone || "",
        facebookUrl: currentSettings.facebookUrl || "",
        instagramUrl: currentSettings.instagramUrl || "",
        twitterUrl: currentSettings.twitterUrl || "",
      });
    }
  }, [currentSettings]);

  const handleSave = async () => {
    await updateSettings(settings);
    alert("Beállítások mentve!");
  };

  const handleChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-[#EAF0FF] mb-2">Beállítások</h2>
        <p className="text-sm lg:text-base text-[#A8B3C7]">Konfigurálja a weboldal globális beállításait</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-[#EAF0FF] flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#50AEDF]" />
              Általános Beállítások
            </CardTitle>
            <CardDescription className="text-[#A8B3C7]">
              Weboldal alapvető információi
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="siteName" className="text-[#A8B3C7]">
                Weboldal Neve
              </Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => handleChange("siteName", e.target.value)}
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
              />
            </div>
            <div>
              <Label htmlFor="logoUrl" className="text-[#A8B3C7]">
                Logó URL
              </Label>
              <Input
                id="logoUrl"
                value={settings.logoUrl}
                onChange={(e) => handleChange("logoUrl", e.target.value)}
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-[#EAF0FF] flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#7C5CFF]" />
              Színek
            </CardTitle>
            <CardDescription className="text-[#A8B3C7]">
              Weboldal színvilága
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="primaryColor" className="text-[#A8B3C7]">
                  Elsődleges Szín
                </Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="primaryColor"
                    type="color"
                    value={settings.primaryColor}
                    onChange={(e) => handleChange("primaryColor", e.target.value)}
                    className="w-20 h-10 p-1 bg-[#0a0a0a] border-[rgba(255,255,255,0.1)]"
                  />
                  <Input
                    value={settings.primaryColor}
                    onChange={(e) => handleChange("primaryColor", e.target.value)}
                    className="flex-1 bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="secondaryColor" className="text-[#A8B3C7]">
                  Másodlagos Szín
                </Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="secondaryColor"
                    type="color"
                    value={settings.secondaryColor}
                    onChange={(e) => handleChange("secondaryColor", e.target.value)}
                    className="w-20 h-10 p-1 bg-[#0a0a0a] border-[rgba(255,255,255,0.1)]"
                  />
                  <Input
                    value={settings.secondaryColor}
                    onChange={(e) => handleChange("secondaryColor", e.target.value)}
                    className="flex-1 bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-[#EAF0FF] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#50AEDF]" />
              Kapcsolat
            </CardTitle>
            <CardDescription className="text-[#A8B3C7]">
              Kapcsolattartási információk
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="contactEmail" className="text-[#A8B3C7]">
                Email Cím
              </Label>
              <Input
                id="contactEmail"
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleChange("contactEmail", e.target.value)}
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
              />
            </div>
            <div>
              <Label htmlFor="contactPhone" className="text-[#A8B3C7]">
                Telefonszám
              </Label>
              <Input
                id="contactPhone"
                value={settings.contactPhone}
                onChange={(e) => handleChange("contactPhone", e.target.value)}
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="bg-[#0F1620] border-[rgba(255,255,255,0.1)]">
          <CardHeader>
            <CardTitle className="text-[#EAF0FF] flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#7C5CFF]" />
              Közösségi Média
            </CardTitle>
            <CardDescription className="text-[#A8B3C7]">
              Social media linkek
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="facebookUrl" className="text-[#A8B3C7]">
                Facebook URL
              </Label>
              <Input
                id="facebookUrl"
                value={settings.facebookUrl}
                onChange={(e) => handleChange("facebookUrl", e.target.value)}
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
              />
            </div>
            <div>
              <Label htmlFor="instagramUrl" className="text-[#A8B3C7]">
                Instagram URL
              </Label>
              <Input
                id="instagramUrl"
                value={settings.instagramUrl}
                onChange={(e) => handleChange("instagramUrl", e.target.value)}
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
              />
            </div>
            <div>
              <Label htmlFor="twitterUrl" className="text-[#A8B3C7]">
                Twitter URL
              </Label>
              <Input
                id="twitterUrl"
                value={settings.twitterUrl}
                onChange={(e) => handleChange("twitterUrl", e.target.value)}
                className="bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] text-white mt-2"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Beállítások Mentése
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
