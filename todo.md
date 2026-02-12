Next.js (App Router) + TailwindCSS kullanarak kurumsal, modern ve yüksek performanslı bir web sitesi geliştir.

Site adı: **Lederkon**
Sektör: LED Ekran Montaj ve Proje Firması
Dil: **Tamamen Türkçe**
Hedef: SEO uyumlu, mobil-first, çok hızlı yüklenen, Vercel CDN üzerinde deploy edilecek production-ready site.


public/images/products
public/images/gallery isimli iki klasör ekledim. İçlerinde örnek görseller var. İstediklerini kullanabilirsin.

---

# 🎯 GENEL TEKNİK GEREKSİNİMLER

* Next.js 14+ (App Router)
* TypeScript kullan
* TailwindCSS kullan
* Responsive tasarım (Mobile-first)
* Lighthouse performans skoru yüksek olmalı (90+ hedef)
* Tüm görseller next/image ile optimize edilmeli
* Metadata API kullanılmalı (title, description, keywords her sayfada ayrı)
* Semantic HTML5 yapısı kullanılmalı
* JSON-LD Schema markup eklenmeli (LocalBusiness + Product)
* Sitemap.xml oluştur
* robots.txt oluştur
* Open Graph ve Twitter meta tag ekle
* Lazy loading kullan
* Gereksiz JS kullanma
* Component bazlı temiz mimari

---

# 🎨 TASARIM

Stil:

* Modern
* Kurumsal
* Güven veren
* Koyu arka plan + LED parlaklık efekti

Renk Paleti:

* Ana renk: #0B0F1A (koyu lacivert)
* Vurgu: #00E5FF (cyan LED tonu)
* Beyaz metin
* Hafif glow efektleri

---

# 🏠 SAYFA YAPISI

## 1️⃣ Ana Sayfa

Bölümler:

* Hero alanı

  * Başlık: "Profesyonel LED Ekran Çözümleri"
  * Alt başlık
  * 2 CTA: “Teklif Al” ve “Projeleri İncele”
* Hizmet verilen alanlar (6 kutu)
* Ürün kategorileri
* Neden Lederkon?
* Süreç nasıl işliyor?
* Projelerden örnekler
* CTA teklif formu
* Footer

---

## 2️⃣ Kurumsal

* Hakkımızda
* Misyon & Vizyon

---

## 3️⃣ Ürünler

Alt sayfalar:

* Indoor LED Ekran
* Outdoor LED Ekran
* Düğün Salonu LED Ekran
* AVM LED Ekran
* Cami LED Ekran
* Totem LED Ekran

Her ürün sayfasında:

* SEO uyumlu uzun açıklama (minimum 800 kelime)
* Teknik özellikler
* Kullanım alanları
* SSS bölümü
* Teklif formu

---

## 4️⃣ Projeler

Grid sistem
Kategori filtresi
Her proje kartında:

* Başlık
* Açıklama
* Görsel

---

## 5️⃣ Blog (SEO için kritik)

En az 6 örnek makale oluştur:

* LED ekran fiyatları 2026
* Indoor ve Outdoor LED farkı
* Pixel pitch nedir?
* Düğün salonu LED ekran seçimi
* Cami LED ekran sistemleri
* AVM için LED ekran çözümleri

Her blog yazısı SEO uyumlu, H1-H2-H3 yapılı olmalı.

---

## 6️⃣ İletişim

* İletişim formu
* Google Maps embed
* Telefon
* WhatsApp butonu (floating)

---

# 🔎 SEO STRATEJİSİ

Ana anahtar kelimeler doğal şekilde içerikte geçmeli:

* led ekran fiyatları
* düğün salonu led ekran
* cami led ekran
* avm led ekran
* indoor led ekran
* outdoor led ekran
* led ekran montaj firması

Tüm sayfalarda:

* H1 yalnızca 1 adet
* Alt başlıklar H2-H3
* Meta description 150-160 karakter
* URL yapısı SEO uyumlu (küçük harf ve tireli)

---

# ⚡ PERFORMANS

* next/font kullan
* Görseller webp formatında
* Static generation (SSG) kullan
* Gereksiz kütüphane yükleme
* Animasyon minimal
* CDN cache optimize

---

# 📱 UX

* Mobil menü optimize
* Sticky header
* WhatsApp sabit buton
* Teklif popup (exit intent olmadan sade)
* Form validasyonlu

---

# 🧠 EKSTRA

* Component yapısı modüler olsun
* Reusable UI bileşenler oluştur
* Temiz klasör yapısı kur
* Production build hatasız çalışmalı
* Deploy edilmeye hazır olsun

---

Kodları eksiksiz üret.
Tüm sayfaların içeriğini Türkçe ve özgün yaz.
Hazır template kullanma, özel tasarım yap.


# 🎨 ANA RENK PALETİ (Önerilen)

## 1️⃣ Primary – Ana Arka Plan

**#0B0F1A**
Koyu lacivert-siyaha yakın ton
✔ Teknoloji hissi
✔ LED ışıklarını öne çıkarır
✔ Premium görünüm

---

## 2️⃣ Secondary – Kart / Section Arka Plan

**#111827**
Biraz daha açık koyu gri-mavi
✔ Katmanlı tasarım sağlar
✔ Kontrast oluşturur

---

## 3️⃣ Accent – LED Vurgu Rengi (Ana Etki)

**#00E5FF** (Cyan LED tonu)
✔ Butonlar
✔ Hover efektleri
✔ Glow efektleri
✔ Linkler

Bu renk LED hissini verir.

---

## 4️⃣ İkinci Accent – Güçlü Vurgu

**#7C3AED** (Elektrik moru)
✔ Gradient geçişlerde
✔ Hover state
✔ CTA arka planı

Cyan + Mor birlikte “dijital ekran” havası verir.

---

## 5️⃣ Metin – Açık Alan

**#FFFFFF** (Başlıklar)

## 6️⃣ Paragraf Metni

**#D1D5DB**
Yumuşak gri-beyaz, göz yormaz.

---

# 🎯 Buton Örneği

Primary Button:
Arka plan: **#00E5FF**
Yazı: #0B0F1A
Hover: biraz koyulaştırılmış cyan

Secondary Button:
Border: #00E5FF
Yazı: #00E5FF
Hover: arka plan cyan