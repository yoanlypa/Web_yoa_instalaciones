import { getCity } from "@/lib/cities";
import CityPage from "@/components/CityPage";

const city = getCity("malaga");

export const metadata = {
  title: `Montador de muebles en Málaga | Yoa Instalaciones`,
  description: `Montador de muebles e instalaciones en Málaga capital: montaje de muebles, lámparas, ventiladores de techo, tendederos y grifos. Pide presupuesto por WhatsApp.`,
  alternates: { canonical: "/montador-de-muebles-malaga" },
};

export default function Page() {
  return <CityPage city={city} />;
}
