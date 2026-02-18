import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "AVM LED Ekran",
  description:
    "AVM ve alışveriş merkezleri için LED ekran çözümleri. İç ve dış cephe, reklam ve bilgilendirme ekranları. LED ekran fiyatları ve proje.",
  keywords: "avm led ekran, alışveriş merkezi led ekran, avm reklam ekranı, led ekran montaj firması",
};

const galleryImages = [
  "/images/gallery/mall-1.png",
  "/images/gallery/mall-2.jpg",
  "/images/gallery/mall-3.jpg",
];

const teknikOzellikler = [
  "İç mekân: P2–P4, dış cephe: P4–P6",
  "Parlaklık: iç 800–1200, dış 5000+ cd/m²",
  "Modüler yapı, genişleyebilir",
  "Merkezi içerik yönetim sistemi",
  "Zamanlı reklam ve bilgi akışı",
];

const kullanimAlanlari = [
  "AVM iç koridor ve meydan ekranları",
  "AVM dış cephe reklam ekranları",
  "Mağaza önü ve vitrin",
  "Asansör ve yürüyen merdiven alanları",
  "Otopark ve giriş bilgilendirme",
];

const sss = [
  {
    soru: "AVM LED ekran projesi ne kadar sürer?",
    cevap:
      "Proje büyüklüğüne göre 2 hafta ile 2 ay arasında değişir. Keşif ve proje planı sonrası net süre verilir.",
  },
  {
    soru: "İçerik yönetimi nasıl yapılır?",
    cevap:
      "Merkezi yazılım ile tüm ekranlara uzaktan içerik atanabilir. Zamanlama ve bölge bazlı reklam yayını desteklenir.",
  },
  {
    soru: "AVM LED ekran fiyatları neleri kapsar?",
    cevap:
      "Panel, kontrol sistemi, montaj ve devreye alma genelde dahildir. İçerik yönetim yazılımı ve bakım ayrıca teklif edilir.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">AVM LED ekran</strong> çözümleri, alışveriş merkezlerinde reklam, bilgilendirme ve yönlendirme amacıyla kullanılan indoor ve outdoor LED ekran sistemlerini kapsar. AVM iç meydan, koridor, dış cephe ve mağaza önü projelerinde LED ekran montaj firması olarak hizmet veriyoruz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">AVM İç Mekân LED Ekranları</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      AVM içinde kullanılan LED ekranlar genelde indoor tipindedir. Pixel pitch P2–P4 arası seçilir; izleyici yakın olduğu için yüksek çözünürlük önemlidir. Reklam döngüleri, etkinlik duyuruları ve mağaza bilgileri tek merkezden yönetilir. LED ekran fiyatları ekran sayısı ve metrekaresine göre hesaplanır.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">AVM Dış Cephe ve Billboard</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      AVM dış cephesinde kullanılan ekranlar outdoor sınıfında olmalıdır: yüksek parlaklık, IP65 koruma. Hem reklam geliri hem marka görünürlüğü sağlar. Büyük ölçekli AVM LED ekran projelerinde statik hesaplama ve rüzgar yükü analizi yapıyoruz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">İçerik Yönetim ve Bakım</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Tüm ekranlar tek yazılım üzerinden yönetilebilir. Zamanlı yayın, bölge bazlı içerik ve acil duyuru özellikleri sunuyoruz. Montaj sonrası garanti ve bakım sözleşmesi ile kesintisiz yayın desteği sağlanır.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AVM LED Ekran",
  description: "Alışveriş merkezleri için indoor ve outdoor LED ekran çözümleri.",
  url: `${SITE_URL}/urunler/avm-led-ekran`,
};

export default function AvmLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="AVM LED Ekran"
      description="AVM ve alışveriş merkezleri için reklam ve bilgilendirme LED ekranları. Proje ve fiyat teklifi için iletişime geçin."
      image="/images/gallery/mall-1.png"
      imageAlt="AVM LED ekran"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}
