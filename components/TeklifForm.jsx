"use client";

import { useState } from "react";
import Button from "./Button";
import { URUNLER } from "@/lib/constants";

export default function TeklifForm({ id = "teklif-form", compact = false }) {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    telefon: "",
    mesaj: "",
    urun: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Gönderiliyor...");
    setTimeout(() => {
      setStatus("Talebiniz alındı. En kısa sürede dönüş yapacağız.");
      setFormData({ ad: "", email: "", telefon: "", mesaj: "", urun: "" });
    }, 800);
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`rounded-xl border border-white/10 bg-[#111827] p-6 ${compact ? "max-w-md" : ""}`}
    >
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="ad" className="mb-1 block text-sm font-medium text-[#D1D5DB]">
            Ad Soyad *
          </label>
          <input
            type="text"
            id="ad"
            name="ad"
            required
            value={formData.ad}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/20 bg-[#0B0F1A] px-4 py-2 text-white placeholder-[#6B7280] focus:border-[#00E5FF] focus:outline-none focus:ring-1 focus:ring-[#00E5FF]"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#D1D5DB]">
            E-posta *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/20 bg-[#0B0F1A] px-4 py-2 text-white placeholder-[#6B7280] focus:border-[#00E5FF] focus:outline-none focus:ring-1 focus:ring-[#00E5FF]"
            placeholder="ornek@email.com"
          />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="telefon" className="mb-1 block text-sm font-medium text-[#D1D5DB]">
            Telefon *
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            required
            value={formData.telefon}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/20 bg-[#0B0F1A] px-4 py-2 text-white placeholder-[#6B7280] focus:border-[#00E5FF] focus:outline-none focus:ring-1 focus:ring-[#00E5FF]"
            placeholder="05XX XXX XX XX"
          />
        </div>
        {!compact && (
          <div className="sm:col-span-2">
            <label htmlFor="urun" className="mb-1 block text-sm font-medium text-[#D1D5DB]">
              Ürün / Proje Tipi
            </label>
            <select
              id="urun"
              name="urun"
              value={formData.urun}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/20 bg-[#0B0F1A] px-4 py-2 text-white focus:border-[#00E5FF] focus:outline-none focus:ring-1 focus:ring-[#00E5FF]"
            >
              <option value="">Seçiniz</option>
              {URUNLER.map((u) => (
                <option key={u.slug} value={u.slug}>
                  {u.title}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="mesaj" className="mb-1 block text-sm font-medium text-[#D1D5DB]">
            Mesajınız
          </label>
          <textarea
            id="mesaj"
            name="mesaj"
            rows={compact ? 3 : 4}
            value={formData.mesaj}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/20 bg-[#0B0F1A] px-4 py-2 text-white placeholder-[#6B7280] focus:border-[#00E5FF] focus:outline-none focus:ring-1 focus:ring-[#00E5FF]"
            placeholder="Projeniz hakkında kısa bilgi..."
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary">
          Teklif Al
        </Button>
        {status && (
          <span className="text-sm text-[#B9FF00]">{status}</span>
        )}
      </div>
    </form>
  );
}
