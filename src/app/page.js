import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesMarquee from "@/components/ServicesMarquee";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import DigitalServices from "@/components/DigitalServices";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Montador de muebles en Málaga | Yoa Instalaciones",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesMarquee />
        <Gallery />
        <Services />
        <Reviews />
        <DigitalServices />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
