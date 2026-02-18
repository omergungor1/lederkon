"use client";

import { useState } from "react";
import Button from "./Button";

const inputClass =
  "w-full rounded-lg border border-white/20 bg-[#0B0F1A] px-4 py-2 text-white placeholder-[#6B7280] focus:border-[#00E5FF] focus:outline-none focus:ring-1 focus:ring-[#00E5FF]";

/** TR cep: 05XX XXX XX XX (11 rakam), yazarken boşluklarla formatlar */
function formatTelefon(value) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("5") && digits.length <= 10) digits = "0" + digits;
  else if (digits.length > 0 && digits[0] !== "0") digits = "0" + digits;
  digits = digits.slice(0, 11);
  const parts = [];
  if (digits.length > 0) parts.push(digits.slice(0, 4)); // 05XX
  if (digits.length > 4) parts.push(digits.slice(4, 7)); // XXX
  if (digits.length > 7) parts.push(digits.slice(7, 9)); // XX
  if (digits.length > 9) parts.push(digits.slice(9, 11)); // XX
  return parts.join(" ");
}

export default function BizeUlasinForm({ id = "bize-ulasin-form" }) {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" | "error" | ""
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    telefon: "",
    mesaj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telefon") {
      setFormData((prev) => ({ ...prev, telefon: formatTelefon(value) }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const telefonRakamSayisi = formData.telefon.replace(/\D/g, "").length;
  const telefonTamDegil = telefonRakamSayisi > 0 && telefonRakamSayisi !== 11;

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
      const res = await fetch("/api/bize-ulasin", {
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
      setStatus("Mesajınız alındı. En kısa sürede size dönüş yapacağız.");
      setStatusType("success");
      setFormData({ ad: "", email: "", telefon: "", mesaj: "" });
    } catch {
      setStatus("Bağlantı hatası. Lütfen tekrar deneyin.");
      setStatusType("error");
    }
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
            Telefon * <span className="text-xs font-normal text-[#6B7280]">(11 rakam, 05XX XXX XX XX)</span>
          </label>
          <input
            type="tel"
            id="bize-telefon"
            name="telefon"
            required
            value={formData.telefon}
            onChange={handleChange}
            className={`${inputClass} ${telefonTamDegil ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""}`}
            placeholder="05XX XXX XX XX"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={14}
            title="Tam 11 rakam: 05XX XXX XX XX"
            aria-invalid={telefonTamDegil}
            aria-describedby={telefonTamDegil ? "bize-telefon-hata" : undefined}
          />
          {telefonTamDegil && (
            <p id="bize-telefon-hata" className="mt-1 text-sm text-red-400" role="alert">
              Telefon numarası tam olmalıdır (11 rakam). Şu an {telefonRakamSayisi} rakam girdiniz.
            </p>
          )}
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
          <span
            className={`text-sm ${
              statusType === "error"
                ? "text-red-400"
                : statusType === "success"
                  ? "text-[#B9FF00]"
                  : "text-[#D1D5DB]"
            }`}
          >
            {status}
          </span>
        )}
      </div>
    </form>
  );
}
