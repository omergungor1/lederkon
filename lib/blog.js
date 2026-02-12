export const blogYazilari = [
  {
    slug: "led-ekran-fiyatlari-2026",
    title: "LED Ekran Fiyatları 2026",
    excerpt: "2026 yılında LED ekran fiyatları nasıl şekilleniyor? Pixel pitch, metrekare ve kullanım alanına göre güncel fiyat rehberi.",
    date: "2026-02-01",
    image: "/images/products/LED video wall modular panel.webp",
  },
  {
    slug: "indoor-ve-outdoor-led-farki",
    title: "Indoor ve Outdoor LED Farkı",
    excerpt: "Kapalı alan (indoor) ve açık hava (outdoor) LED ekranlar arasındaki teknik ve maliyet farkları.",
    date: "2026-01-28",
    image: "/images/products/Outdoor LED cabinet back side.jpg",
  },
  {
    slug: "pixel-pitch-nedir",
    title: "Pixel Pitch Nedir?",
    excerpt: "LED ekranlarda pixel pitch (nokta aralığı) ne anlama gelir, nasıl seçilir ve LED ekran fiyatlarını nasıl etkiler?",
    date: "2026-01-25",
    image: "/images/products/Indoor LED panel close up.jpg",
  },
  {
    slug: "dugun-salonu-led-ekran-secimi",
    title: "Düğün Salonu LED Ekran Seçimi",
    excerpt: "Düğün salonu için LED ekran seçerken dikkat edilmesi gerekenler: boyut, pixel pitch ve kiralama vs sabit montaj.",
    date: "2026-01-20",
    image: "/images/gallery/wedding-1.webp",
  },
  {
    slug: "cami-led-ekran-sistemleri",
    title: "Cami LED Ekran Sistemleri",
    excerpt: "Cami ve ibadethaneler için LED ekran: vaaz, hutbe ve bilgilendirme ekranı teknik özellikleri ve montaj.",
    date: "2026-01-15",
    image: "/images/gallery/cami-1.jpg",
  },
  {
    slug: "avm-icin-led-ekran-cozumleri",
    title: "AVM İçin LED Ekran Çözümleri",
    excerpt: "Alışveriş merkezlerinde iç ve dış mekân LED ekran uygulamaları, reklam ve bilgilendirme sistemleri.",
    date: "2026-01-10",
    image: "/images/gallery/mall-1.png",
  },
];

export function getBlogBySlug(slug) {
  return blogYazilari.find((y) => y.slug === slug);
}

export function getAllBlogSlugs() {
  return blogYazilari.map((y) => y.slug);
}
