import { getCity } from "@/lib/cities";
import CityPage from "@/components/CityPage";

const city = getCity("torremolinos");

export const metadata = {
  title: `Montador de muebles en Torremolinos | Yoa Instalaciones`,
  description: `Montador de muebles e instalaciones en Torremolinos: montaje de muebles, lámparas, ventiladores de techo, tendederos y grifos. Pide presupuesto por WhatsApp.`,
  alternates: { canonical: "/montador-de-muebles-torremolinos" },
};

export default function Page() {
  return <CityPage city={city} />;
}
