import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CityLinks from "@/components/CityLinks";
import ServicesMarquee from "@/components/ServicesMarquee";
import Gallery from "@/components/Gallery";
import { getGallery } from "@/lib/gallery-files";
import Services from "@/components/Services";
import DigitalServices from "@/components/DigitalServices";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Misma estructura que la home, con el texto del banner adaptado a la ciudad
export default function CityPage({ city }) {
  return (
    <>
      <Header />
      <main>
        <Hero city={city} />
        <ServicesMarquee />
        <CityLinks city={city} />
        <Gallery items={getGallery()} />
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
