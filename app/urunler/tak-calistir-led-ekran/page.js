import UrunSayfaSablon from "@/components/UrunSayfaSablon";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata = {
  title: "Tak Çalıştır LED Ekran | LED Poster ve Tekerlekli Dijital Tabela",
  description:
    "Tak çalıştır LED ekran: yüksek çözünürlüklü LED poster ve 64x94 cm tekerlekli dijital tabela. İç ve dış mekân, kurulum gerektirmez. Bursa ve Türkiye geneli Lederkon.",
  keywords:
    "tak çalıştır led ekran, led poster, tekerlekli led ekran, dijital tabela, plug and play led, bursa led tabela, led ekran fiyatları",
};

const galleryImages = [
  "/images/products/tak-calistir-led-poster.jpeg",
  "/images/products/tak-calistir-tekerlekli.jpeg",
];

const teknikOzellikler = [
  "Tak çalıştır (plug and play): ek kurulum gerektirmez",
  "LED Poster: ince tasarım, yüksek çözünürlük, canlı renkler",
  "Tekerlekli model: 64x94 cm, 360° döner tekerlekli mobil stand",
  "İç ve dış mekân kullanımına uygun",
  "Güçlü kontrast ve net görüntü kalitesi",
  "USB veya kablolu içerik oynatma desteği",
];

const kullanimAlanlari = [
  "Mağaza vitrin ve mağaza içi reklam",
  "AVM ve alışveriş merkezi tanıtım alanları",
  "Fuar, etkinlik ve lansman standları",
  "Restoran, kafe ve showroom",
  "Otel lobi ve resepsiyon",
  "Kurumsal ofis ve bekleme alanları",
];

const sss = [
  {
    soru: "Tak çalıştır LED ekran nedir?",
    cevap:
      "Tak çalıştır (plug and play) LED ekran, prizden çalıştırıp hemen kullanabileceğiniz hazır dijital tabela sistemidir. Montaj veya teknik kurulum gerektirmez; içerik yükleyip yayına alırsınız.",
  },
  {
    soru: "LED Poster ile tekerlekli model arasındaki fark nedir?",
    cevap:
      "LED Poster sabit ayaklı, ince ve şık dikey tasarıma sahiptir; vitrin ve mağaza girişi için idealdir. Tekerlekli model 64x94 cm ekranla mobil kullanım sunar; fuar, etkinlik ve farklı noktalara taşınabilir reklam için tercih edilir.",
  },
  {
    soru: "Bursa tak çalıştır LED tabela fiyatları ne kadar?",
    cevap:
      "Model (LED poster veya tekerlekli), ekran boyutu ve adet sayısına göre fiyat değişir. Bursa ve Türkiye geneli için ücretsiz fiyat teklifi almak için iletişime geçebilirsiniz.",
  },
];

const content = (
  <>
    <p className="text-[#D1D5DB] leading-relaxed">
      <strong className="text-white">Tak çalıştır LED ekran</strong>, kurulum gerektirmeden kullanıma hazır plug and play dijital tabela çözümleridir. Lederkon olarak LED Poster ve tekerlekli LED ekran modelleriyle mağaza, AVM, fuar ve kurumsal mekânlarda reklam ve bilgilendirme ihtiyacını karşılıyoruz. Bursa merkezli firmamız Türkiye genelinde tak çalıştır LED ekran tedarik ve destek hizmeti sunar.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">LED Poster: İnce Tasarım, Güçlü Görüntü</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      LED Poster modelimiz yüksek çözünürlüklü, canlı renkler ve güçlü kontrast sunan modern dijital ince tasarıma sahiptir. İç ve dış işyerinizde dikkat çeker; mağaza vitrini, showroom ve mağaza girişinde kampanya ve ürün tanıtımı için idealdir. Sabit ayaklı yapısıyla güvenli duruş sağlar; tak çalıştır özelliği sayesinde prizden çalıştırıp hemen kullanmaya başlayabilirsiniz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Tekerlekli LED Ekran: Mobil Reklam Çözümü</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Tekerlekli LED ekran modeli reklamlarınızı her yerde öne çıkarmanızı sağlar. 64x94 cm ekran boyutu, iç ve dış mekân kullanımına uygun yapı ve 360° döner tekerlekli mobil stand ile fuar, etkinlik, mağaza içi ve açılış organizasyonlarında esnek kullanım sunar. İstediğiniz noktaya taşıyıp içeriğinizi anında yayınlayabilirsiniz.
    </p>
    <h2 className="mt-8 text-xl font-bold text-white">Bursa ve Türkiye Geneli Hizmet</h2>
    <p className="mt-2 text-[#D1D5DB] leading-relaxed">
      Lederkon Bursa merkezli olarak tak çalıştır LED tabela, LED poster ve tekerlekli LED ekran satışı ile teknik destek veriyoruz. Bursa tak çalıştır LED tabela ihtiyacınız için keşif, fiyat teklifi ve teslimat süreçlerinde yanınızdayız. Türkiye genelinde kargo ve kurulum desteği için iletişime geçebilirsiniz.
    </p>
  </>
);

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tak Çalıştır LED Ekran",
  description: "Plug and play LED poster ve tekerlekli dijital tabela. İç ve dış mekân kullanımı.",
  url: `${SITE_URL}/urunler/tak-calistir-led-ekran`,
};

export default function TakCalistirLedEkranPage() {
  return (
    <UrunSayfaSablon
      title="Tak Çalıştır LED Ekran"
      description="LED Poster ve 64x94 cm tekerlekli dijital tabela. Tak çalıştır, kurulum gerektirmez. İç ve dış mekân reklam çözümleri."
      image="/images/products/tak-calistir.jpeg"
      imageAlt="Tak çalıştır LED ekran - LED poster ve tekerlekli dijital tabela"
      galleryImages={galleryImages}
      content={content}
      teknikOzellikler={teknikOzellikler}
      kullanimAlanlari={kullanimAlanlari}
      sss={sss}
      jsonLdProduct={jsonLdProduct}
    />
  );
}
