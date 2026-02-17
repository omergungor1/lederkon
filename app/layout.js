import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://lederkon.com"),
  title: {
    default: "Lederkon | Profesyonel LED Ekran Tedarik, Montaj ve Proje Çözümleri",
    template: "%s | Lederkon",
  },
  description:
    "LED ekran fiyatları, montaj ve proje çözümleri. Düğün salonu, cami, AVM, indoor ve outdoor LED ekran sistemleri. Türkiye'nin güvenilir LED ekran montaj firması.",
  keywords: [
    "led ekran fiyatları",
    "düğün salonu led ekran",
    "cami led ekran",
    "avm led ekran",
    "indoor led ekran",
    "outdoor led ekran",
    "led ekran montaj firması",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://lederkon.com",
    siteName: "Lederkon",
    title: "Lederkon | Profesyonel LED Ekran Tedarik, Montaj ve Proje Çözümleri",
    description: "LED ekran fiyatları, montaj ve proje çözümleri. Düğün salonu, cami, AVM LED ekran.",
    images: [{ url: "/lederkon-logo-2.png", width: 120, height: 40, alt: "Lederkon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lederkon | LED Ekran Montaj ve Proje",
    description: "LED ekran fiyatları ve profesyonel montaj. Düğün salonu, cami, AVM LED ekran.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} font-sans antialiased bg-[#0B0F1A] text-[#D1D5DB]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
