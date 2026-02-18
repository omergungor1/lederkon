import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import IletisimTalepCTA from "@/components/IletisimTalepCTA";
import { blogYazilari } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description:
    "LED ekran fiyatları, indoor-outdoor farkı, pixel pitch ve proje rehberleri. Lederkon blog.",
  keywords: "led ekran blog, led ekran fiyatları, pixel pitch, düğün salonu led ekran",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        description="LED ekran fiyatları, teknik bilgiler ve proje ipuçları. SEO uyumlu makaleler."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogYazilari.map((yazi) => (
            <Link
              key={yazi.slug}
              href={`/blog/${yazi.slug}`}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#111827] transition hover:border-[#00E5FF]/30"
            >
              <div className="relative h-48">
                <Image
                  src={yazi.image}
                  alt={yazi.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <time className="text-sm text-[#B9FF00]">{yazi.date}</time>
                <h2 className="mt-2 text-xl font-semibold text-white group-hover:text-[#00E5FF]">
                  {yazi.title}
                </h2>
                <p className="mt-2 text-sm text-[#D1D5DB]">{yazi.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <IletisimTalepCTA />
    </>
  );
}
