import Header from "@/components/Header";
import CityIntro from "@/components/CityIntro";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function CityPage({ city }) {
  return (
    <>
      <Header />
      <main>
        <CityIntro city={city} />
        <Gallery />
        <Services />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
