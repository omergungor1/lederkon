import Image from "next/image";
import Link from "next/link";
import { URUNLER } from "@/lib/constants";

export const metadata = {
  title: "Ürünler",
  description:
    "Indoor LED ekran, outdoor LED ekran, düğün salonu, cami, AVM ve totem LED ekran çözümleri. LED ekran fiyatları ve teknik özellikler.",
  keywords: "indoor led ekran, outdoor led ekran, düğün salonu led ekran, cami led ekran, avm led ekran",
};

export default function UrunlerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">Ürünler</h1>
      <p className="mt-4 max-w-2xl text-lg text-[#D1D5DB]">
        Kapalı ve açık alan için LED ekran çözümlerimiz. Her projeye uygun ürün seçenekleri.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {URUNLER.map((urun) => (
          <Link
            key={urun.slug}
            href={`/urunler/${urun.slug}`}
            className="group overflow-hidden rounded-xl border border-white/10 bg-[#111827] transition hover:border-[#00E5FF]/40"
          >
            <div className="relative h-56">
              <Image
                src={urun.image || "/images/products/LED video wall modular panel.webp"}
                alt={urun.title}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white group-hover:text-[#00E5FF]">{urun.title}</h2>
              <p className="mt-2 text-[#D1D5DB]">{urun.short}</p>
              <span className="mt-3 inline-block text-sm font-medium text-[#00E5FF]">Detaylı bilgi →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
