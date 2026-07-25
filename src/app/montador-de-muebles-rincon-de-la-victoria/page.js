import { getCity } from "@/lib/cities";
import CityPage from "@/components/CityPage";

const city = getCity("rincon-de-la-victoria");

export const metadata = {
  title: `Montador de muebles en Rincón de la Victoria | Yoa Instalaciones`,
  description: `Montador de muebles e instalaciones en Rincón de la Victoria: montaje de muebles, lámparas, ventiladores de techo, tendederos y grifos. Pide presupuesto por WhatsApp.`,
  alternates: { canonical: "/montador-de-muebles-rincon-de-la-victoria" },
};

export default function Page() {
  return <CityPage city={city} />;
}
