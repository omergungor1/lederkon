import ProjelerGrid from "@/components/ProjelerGrid";

export const metadata = {
  title: "Projeler",
  description:
    "Tamamladığımız LED ekran projeleri. Düğün salonu, cami, AVM ve mağaza LED ekran referanslarımız.",
  keywords: "led ekran projeleri, düğün salonu led ekran, cami led ekran, avm led ekran",
};

export default function ProjelerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white">Projeler</h1>
      <p className="mt-4 max-w-2xl text-lg text-[#D1D5DB]">
        LED ekran montaj firması olarak gerçekleştirdiğimiz düğün salonu LED ekran, cami LED ekran ve AVM LED ekran projelerinden örnekler.
      </p>
      <div className="mt-12">
        <ProjelerGrid />
      </div>
    </div>
  );
}
