import { SITE_URL } from "@/lib/constants";
import { URUNLER } from "@/lib/constants";
import { getAllBlogSlugs } from "@/lib/blog";

export default function sitemap() {
  const base = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/kurumsal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/urunler`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/galeri`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/iletisim`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const urunler = URUNLER.map((u) => ({
    url: `${SITE_URL}/urunler/${u.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blog = getAllBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...base, ...urunler, ...blog];
}
