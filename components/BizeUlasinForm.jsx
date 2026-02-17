"use client";

import { useState } from "react";
import Button from "./Button";

const inputClass =
  "w-full rounded-lg border border-white/20 bg-[#0B0F1A] px-4 py-2 text-white placeholder-[#6B7280] focus:border-[#00E5FF] focus:outline-none focus:ring-1 focus:ring-[#00E5FF]";

export default function BizeUlasinForm({ id = "bize-ulasin-form" }) {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    telefon: "",
    mesaj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Gönderiliyor...");
    setTimeout(() => {
      setStatus("Mesajınız alındı. En kısa sürede size dönüş yapacağız.");
      setFormData({ ad: "", email: "", telefon: "", mesaj: "" });
    }, 800);
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/10 bg-[#111827] p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bize-ad" className="mb-1 block text-sm font-medium text-[#D1D5DB]">
            Ad Soyad *
          </label>
          <input
            type="text"
            id="bize-ad"
            name="ad"
            required
            value={formData.ad}
            onChange={handleChange}
            className={inputClass}
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label htmlFor="bize-email" className="mb-1 block text-sm font-medium text-[#D1D5DB]">
            E-posta *
          </label>
          <input
            type="email"
            id="bize-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="ornek@email.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="bize-telefon" className="mb-1 block text-sm font-medium text-[#D1D5DB]">
            Telefon *
          </label>
          <input
            type="tel"
            id="bize-telefon"
            name="telefon"
            required
            value={formData.telefon}
            onChange={handleChange}
            className={inputClass}
            placeholder="05XX XXX XX XX"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="bize-mesaj" className="mb-1 block text-sm font-medium text-[#D1D5DB]">
            Mesajınız *
          </label>
          <textarea
            id="bize-mesaj"
            name="mesaj"
            rows={4}
            required
            value={formData.mesaj}
            onChange={handleChange}
            className={inputClass}
            placeholder="Sorunuzu veya mesajınızı yazın..."
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary">
          Gönder
        </Button>
        {status && (
          <span className="text-sm text-[#B9FF00]">{status}</span>
        )}
      </div>
    </form>
  );
}
