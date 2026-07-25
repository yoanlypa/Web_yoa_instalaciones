import { getCity } from "@/lib/cities";
import CityPage from "@/components/CityPage";

const city = getCity("alhaurin-de-la-torre");

export const metadata = {
  title: `Montador de muebles en Alhaurín de la Torre | Yoa Instalaciones`,
  description: `Montador de muebles e instalaciones en Alhaurín de la Torre: montaje de muebles, lámparas, ventiladores de techo, tendederos y grifos. Pide presupuesto por WhatsApp.`,
  alternates: { canonical: "/montador-de-muebles-alhaurin-de-la-torre" },
};

export default function Page() {
  return <CityPage city={city} />;
}
