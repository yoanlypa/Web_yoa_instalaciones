import { getCity } from "@/lib/cities";
import CityPage from "@/components/CityPage";

const city = getCity("benalmadena");

export const metadata = {
  title: `Montador de muebles en Benalmádena | Yoa Instalaciones`,
  description: `Montador de muebles e instalaciones en Benalmádena: montaje de muebles, lámparas, ventiladores de techo, tendederos y grifos. Pide presupuesto por WhatsApp.`,
  alternates: { canonical: "/montador-de-muebles-benalmadena" },
};

export default function Page() {
  return <CityPage city={city} />;
}
