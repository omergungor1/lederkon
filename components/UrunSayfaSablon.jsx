import Image from "next/image";
import Link from "next/link";
import TeklifForm from "./TeklifForm";
import IletisimTalepCTA from "@/components/IletisimTalepCTA";
import JsonLd from "./JsonLd";

export default function UrunSayfaSablon({
  title,
  description,
  image,
  imageAlt,
  galleryImages,
  content,
  teknikOzellikler,
  kullanimAlanlari,
  sss,
  metaDescription,
  jsonLdProduct,
}) {
  return (
    <>
      {jsonLdProduct && <JsonLd data={jsonLdProduct} />}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-[#D1D5DB]">
          <Link href="/" className="hover:text-[#B9FF00]">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/urunler" className="hover:text-[#B9FF00]">Ürünler</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{title}</span>
        </nav>
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="mt-4 text-lg text-[#D1D5DB]">{description}</p>
        {image && (
          <div className="relative mt-8 aspect-video overflow-hidden rounded-xl bg-[#111827]">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        )}

        {galleryImages && galleryImages.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-white">Görsel Galeri</h2>
            <p className="mt-2 text-[#D1D5DB]">
              Ürüne ait örnek uygulama ve kurulum görselleri.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {galleryImages.map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#111827] transition hover:border-[#00E5FF]/30 hover:shadow-[0_0_20px_rgba(185,255,0,0.10)]"
                >
                  <Image
                    src={src}
                    alt={`${title} galeri ${i + 1}`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
        <div className="prose prose-invert mt-10 max-w-none">
          {content}
        </div>
        {teknikOzellikler && teknikOzellikler.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Teknik Özellikler</h2>
            <ul className="mt-4 space-y-2 text-[#D1D5DB]">
              {teknikOzellikler.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}
        {kullanimAlanlari && kullanimAlanlari.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Kullanım Alanları</h2>
            <ul className="mt-4 space-y-2 text-[#D1D5DB]">
              {kullanimAlanlari.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}
        {sss && sss.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white">Sıkça Sorulan Sorular</h2>
            <div className="mt-4 space-y-3">
              {sss.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-white/10 bg-[#111827] p-4 transition hover:border-[#00E5FF]/30 hover:shadow-[0_0_24px_rgba(185,255,0,0.08)]"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="text-base font-semibold text-white pr-2">
                      {item.soru}
                    </span>
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#B9FF00]">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#D1D5DB]">
                    {item.cevap}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Teklif Alın</h2>
          <p className="mt-2 text-[#D1D5DB]">LED ekran fiyatları ve proje teklifi için formu doldurun.</p>
          <div className="mt-6">
            <TeklifForm id="urun-teklif" compact />
          </div>
        </section>
      </div>

      <IletisimTalepCTA />
    </>
  );
}
