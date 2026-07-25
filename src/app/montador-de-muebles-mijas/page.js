import { getCity } from "@/lib/cities";
import CityPage from "@/components/CityPage";

const city = getCity("mijas");

export const metadata = {
  title: `Montador de muebles en Mijas | Yoa Instalaciones`,
  description: `Montador de muebles e instalaciones en Mijas: montaje de muebles, lámparas, ventiladores de techo, tendederos y grifos. Pide presupuesto por WhatsApp.`,
  alternates: { canonical: "/montador-de-muebles-mijas" },
};

export default function Page() {
  return <CityPage city={city} />;
}
