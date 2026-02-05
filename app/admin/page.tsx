"use client";

import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const ADMIN_USERNAME = "nexenadmin";
const ADMIN_PASSWORD = "Imi20090511";

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addImage = useMutation(api.images.addImage);

  useEffect(() => {
    // Check if user is already authenticated (session storage)
    const authStatus = sessionStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_authenticated", "true");
    } else {
      setLoginError("Hibás felhasználónév vagy jelszó!");
      setUsername("");
      setPassword("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      await addImage({ url, title });
      setTitle("");
      setUrl("");
      setStatus({ type: "success", message: "Kép sikeresen hozzáadva!" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Hiba történt a kép hozzáadása során. Kérjük, próbáld újra.",
      });
      console.error("Error adding image:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-[#0F1620] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
            <h1 className="text-3xl font-bold mb-6 text-[#EAF0FF] text-center">Admin Bejelentkezés</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-[#A8B3C7] mb-2">
                  Felhasználónév
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Felhasználónév"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#A8B3C7] mb-2">
                  Jelszó
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Jelszó"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
                />
              </div>
              {loginError && (
                <div className="p-4 rounded-lg bg-red-900/30 border border-red-700 text-red-400">
                  {loginError}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Bejelentkezés
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#EAF0FF]">Admin Panel - Kép Hozzáadása</h1>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              sessionStorage.removeItem("admin_authenticated");
            }}
            className="text-sm text-[#A8B3C7] hover:text-[#50AEDF] transition-colors"
          >
            Kijelentkezés
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-[#A8B3C7] mb-2">
              Kép URL
            </label>
            <input
              id="url"
              type="text"
              placeholder="https://example.com/image.jpg"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="w-full bg-[#0F1620] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-[#A8B3C7] mb-2">
              Cím
            </label>
            <input
              id="title"
              type="text"
              placeholder="Kép címe"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-[#0F1620] border border-[rgba(255,255,255,0.1)] text-white p-3 rounded-lg focus:outline-none focus:border-[#50AEDF] transition-colors"
            />
          </div>
          {status.type && (
            <div
              className={`p-4 rounded-lg ${
                status.type === "success"
                  ? "bg-green-900/30 border border-green-700 text-green-400"
                  : "bg-red-900/30 border border-red-700 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white font-semibold px-6 py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Hozzáadás..." : "Kép Hozzáadása"}
          </button>
        </form>
      </div>
    </div>
  );
}
