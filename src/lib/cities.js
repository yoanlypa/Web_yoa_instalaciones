export const cities = [
  {
    slug: "malaga",
    name: "Málaga",
    intro:
      "Monto muebles e instalo lámparas, ventiladores de techo, tendederos y grifos en Málaga capital y sus barrios: Centro, Teatinos, Ciudad Jardín, Cruz de Humilladero, Carretera de Cádiz y Bailén-Miraflores.",
    zonas: ["Centro", "Teatinos", "Ciudad Jardín", "Cruz de Humilladero", "Carretera de Cádiz", "Bailén-Miraflores"],
  },
  {
    slug: "torremolinos",
    name: "Torremolinos",
    intro:
      "Trabajos de montaje de muebles e instalaciones en Torremolinos, tanto en el centro como en La Carihuela, El Bajondillo y Playamar. Puntual y con material propio para dejarlo todo listo el mismo día.",
    zonas: ["Centro", "La Carihuela", "El Bajondillo", "Playamar"],
  },
  {
    slug: "benalmadena",
    name: "Benalmádena",
    intro:
      "Montador de muebles e instalador en Benalmádena Pueblo, Benalmádena Costa y Arroyo de la Miel. Muebles, lámparas, ventiladores de techo, tendederos y grifos, con presupuesto claro antes de empezar.",
    zonas: ["Benalmádena Pueblo", "Benalmádena Costa", "Arroyo de la Miel"],
  },
  {
    slug: "alhaurin-de-la-torre",
    name: "Alhaurín de la Torre",
    intro:
      "Montaje de muebles e instalaciones a domicilio en Alhaurín de la Torre: desde el mueble de IKEA hasta la instalación de un ventilador de techo o un tendedero, sin líos y con las herramientas necesarias.",
    zonas: ["Alhaurín de la Torre"],
  },
  {
    slug: "rincon-de-la-victoria",
    name: "Rincón de la Victoria",
    intro:
      "Servicio de montador de muebles e instalaciones en Rincón de la Victoria, La Cala del Moral y Torre de Benagalbón. Trabajo cuidadoso y limpio, dejando todo recogido al terminar.",
    zonas: ["Rincón de la Victoria", "La Cala del Moral", "Torre de Benagalbón"],
  },
  {
    slug: "fuengirola",
    name: "Fuengirola",
    intro:
      "Monto muebles de cualquier marca e instalo lámparas, ventiladores de techo, tendederos y grifos en Fuengirola: centro, Los Boliches, El Ejido y Torreblanca. Presupuesto por WhatsApp antes de venir.",
    zonas: ["Centro", "Los Boliches", "El Ejido", "Torreblanca"],
  },
  {
    slug: "mijas",
    name: "Mijas",
    intro:
      "Trabajos de montaje e instalación en Mijas Pueblo, Mijas Costa y La Cala de Mijas. Desde un mueble nuevo hasta cambiar un grifo o montar un soporte de TV, con buen trato y puntualidad.",
    zonas: ["Mijas Pueblo", "Mijas Costa", "La Cala de Mijas"],
  },
];

export function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}
