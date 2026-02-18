"use client";

import { useState } from "react";
import Button from "./Button";
import { URUNLER } from "@/lib/constants";

/** TR cep: 05XX XXX XX XX (11 rakam), yazarken boşluklarla formatlar */
function formatTelefon(value) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("5") && digits.length <= 10) digits = "0" + digits;
  else if (digits.length > 0 && digits[0] !== "0") digits = "0" + digits;
  digits = digits.slice(0, 11);
  const parts = [];
  if (digits.length > 0) parts.push(digits.slice(0, 4));
  if (digits.length > 4) parts.push(digits.slice(4, 7));
  if (digits.length > 7) parts.push(digits.slice(7, 9));
  if (digits.length > 9) parts.push(digits.slice(9, 11));
  return parts.join(" ");
}

export default function TeklifForm({ id = "teklif-form", compact = false }) {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    telefon: "",
    mesaj: "",
    urun: "",
  });

  const [statusType, setStatusType] = useState(""); // "success" | "error" | ""

  const telefonRakamSayisi = formData.telefon.replace(/\D/g, "").length;
  const telefonTamDegil = telefonRakamSayisi > 0 && telefonRakamSayisi !== 11;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telefon") {
      setFormData((prev) => ({ ...prev, telefon: formatTelefon(value) }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (telefonRakamSayisi !== 11) {
      setStatus("Telefon numarası tam olmalıdır (11 rakam: 05XX XXX XX XX). Az veya fazla rakam olmamalıdır.");
      setStatusType("error");
      return;
    }
    setStatus("Gönderiliyor...");
    setStatusType("");
    try {
      const res = await fetch("/api/teklif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(data.error || "Gönderim başarısız. Lütfen tekrar deneyin.");
        setStatusType("error");
        return;
      }
      setStatus("Başarıyla gönderildi. En kısa sürede sizinle iletişime geçilecektir.");
      setStatusType("success");
      setFormData({ ad: "", email: "", telefon: "", mesaj: "", urun: "" });
    } catch {
      setStatus("Bağlantı hatası. Lütfen tekrar deneyin.");
      setStatusType("error");
    }
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
            Telefon * <span className="text-xs font-normal text-[#6B7280]">(11 rakam, 05XX XXX XX XX)</span>
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            required
            value={formData.telefon}
            onChange={handleChange}
            className={`w-full rounded-lg border border-white/20 bg-[#0B0F1A] px-4 py-2 text-white placeholder-[#6B7280] focus:outline-none focus:ring-1 ${
              telefonTamDegil ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : "focus:border-[#00E5FF] focus:ring-[#00E5FF]"
            }`}
            placeholder="05XX XXX XX XX"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={14}
            title="Tam 11 rakam: 05XX XXX XX XX"
            aria-invalid={telefonTamDegil}
            aria-describedby={telefonTamDegil ? "teklif-telefon-hata" : undefined}
          />
          {telefonTamDegil && (
            <p id="teklif-telefon-hata" className="mt-1 text-sm text-red-400" role="alert">
              Telefon numarası tam olmalıdır (11 rakam). Şu an {telefonRakamSayisi} rakam girdiniz.
            </p>
          )}
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
          <span
            className={`text-sm ${
              statusType === "error" ? "text-red-400" : "text-[#B9FF00]"
            }`}
          >
            {status}
          </span>
        )}
      </div>
    </form>
  );
}
