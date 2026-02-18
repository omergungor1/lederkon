import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Totem & Poster LED Ekran",
  description:
    "Totem ve poster bilgi ekranı LED çözümleri. AVM, hastane, otel ve kurumsal mekânlarda yönlendirme ve reklam. Totem LED ekran fiyatları.",
  keywords: "totem led ekran, poster led ekran, bilgi ekranı, yönlendirme totemi, led ekran montaj firması",
};

const galleryImages = [
  "/images/solutions/totem-led-screen-2.webp",
  "/images/gallery/store-1.jpg",
];

const teknikOzellikler = [
  "İnce tasarım, tek veya çift yüz",
  "Pixel pitch: P1.5 – P3",
  "Dokunmatik veya sadece görüntü seçenekleri",
  "Taşınabilir veya sabit ayak",
  "İçerik yönetim yazılımı",
];

const kullanimAlanlari = [
  "AVM ve alışveriş merkezi yönlendirme",
  "Hastane ve sağlık kurumu bilgi ekranı",
  "Otel lobi ve bilgilendirme",
  "Fuar ve sergi alanları",
  "Kurumsal ofis ve showroom",
  "Restoran ve mağaza",
];

const sss = [
  {
    soru: "Totem LED ekran fiyatları ne kadar?",
    cevap:
      "Boyut, tek/çift yüz ve dokunmatik özelliğe göre değişir. Standart totem modelleri için ücretsiz fiyat teklifi veriyoruz.",
  },
  {
    soru: "Taşınabilir totem var mı?",
    cevap:
      "Evet. Tekerlekli veya sabit ayaklı totem seçenekleri mevcuttur. Etkinlik ve fuar için kiralama da yapıyoruz.",
  },
  {
    soru: "İçerik nasıl güncellenir?",
    cevap:
      "Merkezi yazılım veya USB ile içerik yüklenebilir. İsteğe bağlı uzaktan erişim ile tüm totemler tek noktadan yönetilir.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">Totem LED ekran</strong>, AVM, hastane, otel ve kurumsal mekânlarda yönlendirme, bilgilendirme ve reklam amacıyla kullanılan dikey veya yatay LED ekranlı totem sistemleridir. Tek veya çift yüz, sabit veya taşınabilir seçeneklerle totem LED ekran projeleri sunuyoruz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Totem LED Ekran Kullanım Alanları</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Alışveriş merkezlerinde mağaza yönlendirme ve kampanya duyuruları, hastanelerde randevu ve bölüm bilgisi, otellerde lobi bilgilendirmesi ve fuar alanlarında etkinlik tanıtımı için totem LED ekran kullanılır. LED ekran fiyatları totem boyutu ve özelliklerine göre değişir.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Tek ve Çift Yüz Totem</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Tek yüz totemler duvar veya köşe konumunda, çift yüz totemler ise koridor ve meydan ortasında kullanılır. İç mekân için indoor LED modüller tercih edilir; pixel pitch P1.5–P3 arası okunabilirlik sağlar.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Montaj ve Bakım</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Totem montajı genelde 1 gün içinde tamamlanır. Elektrik ve ağ bağlantısı proje kapsamında yapılır. LED ekran montaj firması olarak garanti ve isteğe bağlı bakım sözleşmesi sunuyoruz.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Totem LED Ekran",
  description: "Yönlendirme ve bilgilendirme için totem LED ekran çözümleri.",
  url: `${SITE_URL}/urunler/totem-led-ekran`,
};

export default function TotemLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="Totem LED Ekran"
      description="AVM, hastane ve kurumsal mekânlar için totem ve bilgi ekranı LED çözümleri. Teklif alın."
      image="/images/product-list/totem-led-screen.jpg"
      imageAlt="Totem LED ekran"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}
