import Image from "next/image";
import Link from "next/link";
import TeklifForm from "./TeklifForm";
import JsonLd from "./JsonLd";

export default function UrunSayfaSablon({
  title,
  description,
  image,
  imageAlt,
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
            <div className="mt-4 space-y-4">
              {sss.map((item, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-[#111827] p-4">
                  <h3 className="font-semibold text-white">{item.soru}</h3>
                  <p className="mt-2 text-[#D1D5DB]">{item.cevap}</p>
                </div>
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
    </>
  );
}
