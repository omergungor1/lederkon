"use client";

import { useState } from "react";
import Image from "next/image";
import { projeler } from "@/lib/projeler";
import { PROJE_KATEGORILERI } from "@/lib/constants";

export default function ProjelerGrid() {
  const [kategori, setKategori] = useState("tum");
  const list =
    kategori === "tum"
      ? projeler
      : projeler.filter((p) => p.category === kategori);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {PROJE_KATEGORILERI.map((kat) => (
          <button
            key={kat.id}
            type="button"
            onClick={() => setKategori(kat.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              kategori === kat.id
                ? "bg-[#00E5FF] text-[#0B0F1A]"
                : "bg-[#111827] text-[#D1D5DB] hover:bg-white/10"
            }`}
          >
            {kat.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((proje) => (
          <article
            key={proje.id}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#111827] transition hover:border-[#00E5FF]/30"
          >
            <div className="relative h-52">
              <Image
                src={proje.image}
                alt={proje.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white">{proje.title}</h2>
              <p className="mt-2 text-sm text-[#D1D5DB]">{proje.description}</p>
            </div>
          </article>
        ))}
      </div>
      {list.length === 0 && (
        <p className="py-12 text-center text-[#D1D5DB]">Bu kategoride proje bulunamadı.</p>
      )}
    </>
  );
}
