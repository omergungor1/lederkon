"use client";

import { useState } from "react";

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

export default function IletisimTalepCTA() {
  const [acik, setAcik] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" | "error" | ""
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    telefon: "",
    mesaj: "",
  });

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
      const res = await fetch("/api/danismanlik-taleb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const raw = await res.text();
      let data = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = {};
      }
      if (!res.ok) {
        setStatus(data.error || "Gönderim başarısız. Lütfen tekrar deneyin.");
        setStatusType("error");
        return;
      }
      setStatus("Başarıyla gönderildi. En kısa sürede sizinle iletişime geçilecektir.");
      setStatusType("success");
      setFormData({ ad: "", email: "", telefon: "", mesaj: "" });
    } catch (err) {
      setStatus(err && err.message ? err.message : "Bağlantı hatası. Lütfen tekrar deneyin.");
      setStatusType("error");
    }
  };

  return (
    <section className="border-t border-white/10 bg-[#B91C1C] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Projeniz hakkında konuşalım
          </h2>
          <button
            type="button"
            onClick={() => setAcik(!acik)}
            className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B91C1C]"
            aria-expanded={acik}
            aria-controls="danismanlik-form"
          >
            {acik ? "Formu Kapat" : "Ücretsiz Danışmanlık Talep Edin"}
          </button>
        </div>

        <div
          id="danismanlik-form"
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            acik ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
          aria-hidden={!acik}
        >
          <div className="overflow-hidden">
            <div className="mx-auto mt-12 max-w-xl rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="cta-ad" className="mb-1 block text-sm font-medium text-white">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="cta-ad"
                    name="ad"
                    required
                    value={formData.ad}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="cta-email" className="mb-1 block text-sm font-medium text-white">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="cta-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="cta-telefon" className="mb-1 block text-sm font-medium text-white">
                    Telefon * <span className="font-normal text-white/70">(11 rakam, 05XX XXX XX XX)</span>
                  </label>
                  <input
                    type="tel"
                    id="cta-telefon"
                    name="telefon"
                    required
                    value={formData.telefon}
                    onChange={handleChange}
                    className={`w-full rounded-lg border bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:outline-none focus:ring-1 ${
                      telefonTamDegil ? "border-red-400 focus:border-red-400 focus:ring-red-400" : "border-white/30 focus:border-white focus:ring-white"
                    }`}
                    placeholder="05XX XXX XX XX"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={14}
                    title="Tam 11 rakam: 05XX XXX XX XX"
                    aria-invalid={telefonTamDegil}
                    aria-describedby={telefonTamDegil ? "cta-telefon-hata" : undefined}
                  />
                  {telefonTamDegil && (
                    <p id="cta-telefon-hata" className="mt-1 text-sm text-red-200" role="alert">
                      Telefon numarası tam olmalıdır (11 rakam). Şu an {telefonRakamSayisi} rakam girdiniz.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="cta-mesaj" className="mb-1 block text-sm font-medium text-white">
                    Proje / Danışmanlık Konusu
                  </label>
                  <textarea
                    id="cta-mesaj"
                    name="mesaj"
                    rows={4}
                    value={formData.mesaj}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="Projeniz veya danışmanlık talebiniz hakkında kısa bilgi..."
                  />
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-6 py-3 font-semibold text-[#B91C1C] transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B91C1C]"
                  >
                    Talebi Gönder
                  </button>
                  {status && (
                    <span
                      className={`text-sm font-medium ${
                        statusType === "error" ? "text-red-200" : "text-white/95"
                      }`}
                    >
                      {status}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
