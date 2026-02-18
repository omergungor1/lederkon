import { notFound } from "next/navigation";
import CozumSayfaSablon from "@/components/CozumSayfaSablon";
import { getCozumBySlug, getAllCozumSlugs } from "@/lib/cozumler";
import { SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  return getAllCozumSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cozum = getCozumBySlug(slug);
  if (!cozum) return { title: "Çözüm Bulunamadı" };
  return {
    title: `${cozum.title} | LED Ekran Çözümleri`,
    description: cozum.metaDescription,
    keywords: cozum.keywords,
    openGraph: {
      title: `${cozum.title} | Lederkon`,
      description: cozum.metaDescription,
      url: `${SITE_URL}/cozumler/${cozum.slug}`,
    },
  };
}

export default async function CozumDetayPage({ params }) {
  const { slug } = await params;
  const cozum = getCozumBySlug(slug);
  if (!cozum) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cozum.title,
    description: cozum.metaDescription,
    url: `${SITE_URL}/cozumler/${cozum.slug}`,
    provider: {
      "@type": "Organization",
      name: "Lederkon",
    },
  };

  return (
    <CozumSayfaSablon
      title={cozum.title}
      description={cozum.description}
      image={cozum.image}
      imageAlt={cozum.title}
      body={cozum.body}
      metaDescription={cozum.metaDescription}
      jsonLd={jsonLd}
    />
  );
}
