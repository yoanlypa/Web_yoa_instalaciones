import { getCity } from "@/lib/cities";
import CityPage from "@/components/CityPage";

const city = getCity("fuengirola");

export const metadata = {
  title: `Montador de muebles en Fuengirola | Yoa Instalaciones`,
  description: `Montador de muebles e instalaciones en Fuengirola: montaje de muebles, lámparas, ventiladores de techo, tendederos y grifos. Pide presupuesto por WhatsApp.`,
  alternates: { canonical: "/montador-de-muebles-fuengirola" },
};

export default function Page() {
  return <CityPage city={city} />;
}
