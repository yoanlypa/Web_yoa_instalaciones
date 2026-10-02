import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebServicesPage from "@/components/WebServicesPage";

export const metadata = {
  title: "Webs para negocios en Málaga | Yoa Instalaciones",
  description:
    "Mejoramos la web de autónomos y pequeños negocios en Málaga: webs rápidas, pensadas para el móvil y fáciles de encontrar en Google. Pide información por WhatsApp.",
  alternates: { canonical: "/webs-para-negocios" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <WebServicesPage />
      </main>
      <Footer />
    </>
  );
}
