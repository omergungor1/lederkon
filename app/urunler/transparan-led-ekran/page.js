import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Şeffaf LED Ekran",
  description:
    "Vitrin, cam ve showroom için şeffaf LED ekran çözümleri. Cam arkası reklam, mağaza vitrini ve showroom uygulamaları. Şeffaf LED ekran fiyatları.",
  keywords: "şeffaf led ekran, transparan led ekran, cam led ekran, vitrin led ekran, showroom led, led ekran montaj",
};

const galleryImages = [
  "/images/gallery/wedding-1.webp",
  "/images/gallery/mall-1.png",
  "/images/gallery/cami-1.jpg",
  "/images/gallery/store-1.jpg",
  "/images/gallery/billboard-1.webp",
];

const teknikOzellikler = [
  "Yüksek ışık geçirgenliği (transparan modül)",
  "Cam ve vitrin uygulamasına uygun montaj",
  "Pixel pitch: P3.9 – P7.8 (şeffaf modül)",
  "İnce modül kalınlığı, hafif yapı",
  "İç mekân parlaklığı (indoor)",
  "İçerik yönetim yazılımı",
];

const kullanimAlanlari = [
  "Mağaza vitrini ve cam reklam",
  "Showroom ve galeri uygulamaları",
  "Banka şubesi ve ofis camı",
  "AVM cam cephe ve koridor",
  "Otomat ve kiosk cam paneli",
  "Fuaye ve lobi cam bölmeler",
];

const sss = [
  {
    soru: "Şeffaf LED ekran fiyatları neye göre değişir?",
    cevap:
      "Metrekare, pixel pitch ve montaj tipi (cam önü, cam arası vb.) fiyatı etkiler. Vitrin ve showroom projeleri için ücretsiz keşif ve teklif veriyoruz.",
  },
  {
    soru: "Camın arkasından görüntü izlenebilir mi?",
    cevap:
      "Evet. Şeffaf LED ekran, cam ve vitrin uygulamalarında ışık geçirgenliği sayesinde hem ekran içeriği hem dış manzara birlikte kullanılabilir.",
  },
  {
    soru: "Mevcut camlara montaj yapılır mı?",
    cevap:
      "Mevcut vitrin ve showroom camlarına uygun çerçeve ve montaj sistemleri ile entegrasyon yapıyoruz. Keşif ile en uygun çözüm belirlenir.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">Şeffaf LED ekran</strong> (transparan LED ekran), vitrin, cam ve showroom uygulamalarında kullanılan, ışık geçirgenliği yüksek LED ekran sistemleridir. Cam arkası reklam, mağaza vitrini ve kurumsal showroom projelerinde görüntü verirken arka planı kapatmaz; hem içerik hem mekân görünürlüğü korunur. LED ekran montaj firması olarak şeffaf LED ekran projelerinde keşif, projelendirme ve montaj hizmeti sunuyoruz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Şeffaf LED Ekran Kullanım Alanları</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Mağaza vitrininde ürün sergisi ile birlikte hareketli reklam, showroomda cam bölme üzerinde bilgilendirme, banka ve ofis camlarında dijital içerik gösterimi için şeffaf LED ekran tercih edilir. AVM koridor camları, otomat önü ekranlar ve fuaye cam bölmelerinde de uygulanır. LED ekran fiyatları metrekare ve pixel pitch’e göre değişir.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Teknik Yapı ve Montaj</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Şeffaf LED modüller, geleneksel ekranlara göre daha ince ve ışık geçirgen yapıdadır. Cam önü, cam arası veya asma montaj seçenekleri vardır. İç mekân kullanımı için uygun parlaklıkta modeller kullanılır. Pixel pitch P3.9–P7.8 arası seçeneklerle hem yakın hem uzak mesafeden okunabilir içerik sunulur.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Projelendirme ve Teklif</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Vitrin ölçüsü, cam konumu ve kullanım amacına göre en uygun şeffaf LED ekran çözümünü öneriyoruz. Keşif sonrası detaylı fiyat ve montaj süresi verilir. LED ekran montaj firması olarak kurulum sonrası garanti ve teknik destek sağlıyoruz.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Şeffaf LED Ekran",
  description: "Vitrin, cam ve showroom için şeffaf (transparan) LED ekran çözümleri.",
  url: `${SITE_URL}/urunler/transparan-led-ekran`,
};

export default function TransparanLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="Şeffaf LED Ekran"
      description="Vitrin, cam ve showroom uygulamaları için şeffaf LED ekran. Cam arkası reklam ve dijital vitrin çözümleri. Teklif alın."
      image="/images/product-list/Transparent-LED-Screen.jpg"
      imageAlt="Şeffaf LED ekran"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}
