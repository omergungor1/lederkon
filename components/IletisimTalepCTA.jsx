"use client";

import { useState } from "react";

export default function IletisimTalepCTA() {
  const [acik, setAcik] = useState(false);
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
      setStatus("Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.");
      setFormData({ ad: "", email: "", telefon: "", mesaj: "" });
    }, 800);
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
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="cta-telefon"
                    name="telefon"
                    required
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="05XX XXX XX XX"
                  />
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
                    <span className="text-sm font-medium text-white/95">{status}</span>
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
