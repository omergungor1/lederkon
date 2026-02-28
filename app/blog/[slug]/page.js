import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blog";
import { getBlogIcerik } from "@/lib/blogIcerik";
import IletisimTalepCTA from "@/components/IletisimTalepCTA";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const yazi = getBlogBySlug(slug);
  const icerik = getBlogIcerik(slug);
  if (!yazi || !icerik) return { title: "Yazı Bulunamadı" };
  return {
    title: icerik.title,
    description: icerik.description,
  };
}

export default async function BlogYaziPage({ params }) {
  const { slug } = await params;
  const yazi = getBlogBySlug(slug);
  const icerik = getBlogIcerik(slug);

  if (!yazi || !icerik) notFound();

  return (
    <>
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-[#D1D5DB]">
          <Link href="/" className="hover:text-[#B9FF00]">Ana sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#B9FF00]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{icerik.title}</span>
        </nav>
        <h1 className="text-4xl font-bold text-white">{icerik.title}</h1>
        <p className="mt-4 text-lg text-[#D1D5DB]">{icerik.description}</p>
        <time className="mt-2 block text-sm text-[#B9FF00]">{yazi.date}</time>
        <div className="relative mt-8 aspect-video overflow-hidden rounded-xl bg-[#111827]">
          <Image
            src={encodeURI(yazi.image)}
            alt={icerik.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
        <div className="prose prose-invert mt-10 max-w-none">{icerik.body}</div>
      </article>
      <IletisimTalepCTA />
    </>
  );
}
