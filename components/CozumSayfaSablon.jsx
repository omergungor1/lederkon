import Image from "next/image";
import Link from "next/link";
import TeklifForm from "./TeklifForm";
import IletisimTalepCTA from "./IletisimTalepCTA";
import JsonLd from "./JsonLd";

export default function CozumSayfaSablon({
  title,
  description,
  image,
  imageAlt,
  body,
  metaDescription,
  jsonLd,
}) {
  return (
    <>
      {jsonLd && <JsonLd data={jsonLd} />}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-[#D1D5DB]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#B9FF00]">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/cozumler" className="hover:text-[#B9FF00]">Çözümler</Link>
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

        {body && body.length > 0 && (
          <div className="mt-10 space-y-8">
            {body.map((block, i) => (
              <section key={i}>
                {block.h2 && (
                  <h2 className="text-xl font-bold text-white sm:text-2xl">{block.h2}</h2>
                )}
                {block.p && (
                  <p className="mt-2 leading-relaxed text-[#D1D5DB]">{block.p}</p>
                )}
              </section>
            ))}
          </div>
        )}

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white">Teklif Alın</h2>
          <p className="mt-2 text-[#D1D5DB]">LED ekran fiyatları ve proje teklifi için formu doldurun.</p>
          <div className="mt-6">
            <TeklifForm id="cozum-teklif" compact />
          </div>
        </section>
      </div>

      <IletisimTalepCTA />
    </>
  );
}
