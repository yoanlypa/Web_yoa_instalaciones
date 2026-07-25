export const cities = [
  {
    slug: "malaga",
    name: "Málaga",
    intro: {
      es: "Monto muebles e instalo lámparas, ventiladores de techo, tendederos y grifos en Málaga capital y sus barrios: Centro, Teatinos, Ciudad Jardín, Cruz de Humilladero, Carretera de Cádiz y Bailén-Miraflores.",
      en: "I assemble furniture and install lamps, ceiling fans, clotheslines and taps in Málaga city and its neighbourhoods: Centro, Teatinos, Ciudad Jardín, Cruz de Humilladero, Carretera de Cádiz and Bailén-Miraflores.",
    },
    zonas: ["Centro", "Teatinos", "Ciudad Jardín", "Cruz de Humilladero", "Carretera de Cádiz", "Bailén-Miraflores"],
  },
  {
    slug: "torremolinos",
    name: "Torremolinos",
    intro: {
      es: "Trabajos de montaje de muebles e instalaciones en Torremolinos, tanto en el centro como en La Carihuela, El Bajondillo y Playamar. Puntual y con material propio para dejarlo todo listo el mismo día.",
      en: "Furniture assembly and installation work in Torremolinos, in the town centre as well as La Carihuela, El Bajondillo and Playamar. On time and with my own tools to get everything done the same day.",
    },
    zonas: ["Centro", "La Carihuela", "El Bajondillo", "Playamar"],
  },
  {
    slug: "benalmadena",
    name: "Benalmádena",
    intro: {
      es: "Montador de muebles e instalador en Benalmádena Pueblo, Benalmádena Costa y Arroyo de la Miel. Muebles, lámparas, ventiladores de techo, tendederos y grifos, con presupuesto claro antes de empezar.",
      en: "Furniture assembler and installer in Benalmádena Pueblo, Benalmádena Costa and Arroyo de la Miel. Furniture, lamps, ceiling fans, clotheslines and taps, with a clear quote before I start.",
    },
    zonas: ["Benalmádena Pueblo", "Benalmádena Costa", "Arroyo de la Miel"],
  },
  {
    slug: "alhaurin-de-la-torre",
    name: "Alhaurín de la Torre",
    intro: {
      es: "Montaje de muebles e instalaciones a domicilio en Alhaurín de la Torre: desde el mueble de IKEA hasta la instalación de un ventilador de techo o un tendedero, sin líos y con las herramientas necesarias.",
      en: "Furniture assembly and home installations in Alhaurín de la Torre: from an IKEA piece of furniture to fitting a ceiling fan or a clothesline, hassle-free and with the right tools.",
    },
    zonas: ["Alhaurín de la Torre"],
  },
  {
    slug: "rincon-de-la-victoria",
    name: "Rincón de la Victoria",
    intro: {
      es: "Servicio de montador de muebles e instalaciones en Rincón de la Victoria, La Cala del Moral y Torre de Benagalbón. Trabajo cuidadoso y limpio, dejando todo recogido al terminar.",
      en: "Furniture assembly and installation service in Rincón de la Victoria, La Cala del Moral and Torre de Benagalbón. Careful, tidy work, leaving everything clean when I'm done.",
    },
    zonas: ["Rincón de la Victoria", "La Cala del Moral", "Torre de Benagalbón"],
  },
  {
    slug: "fuengirola",
    name: "Fuengirola",
    intro: {
      es: "Monto muebles de cualquier marca e instalo lámparas, ventiladores de techo, tendederos y grifos en Fuengirola: centro, Los Boliches, El Ejido y Torreblanca. Presupuesto por WhatsApp antes de venir.",
      en: "I assemble furniture of any brand and install lamps, ceiling fans, clotheslines and taps in Fuengirola: town centre, Los Boliches, El Ejido and Torreblanca. Quote by WhatsApp before I come over.",
    },
    zonas: ["Centro", "Los Boliches", "El Ejido", "Torreblanca"],
  },
  {
    slug: "mijas",
    name: "Mijas",
    intro: {
      es: "Trabajos de montaje e instalación en Mijas Pueblo, Mijas Costa y La Cala de Mijas. Desde un mueble nuevo hasta cambiar un grifo o montar un soporte de TV, con buen trato y puntualidad.",
      en: "Assembly and installation work in Mijas Pueblo, Mijas Costa and La Cala de Mijas. From a new piece of furniture to changing a tap or mounting a TV bracket, with a friendly attitude and punctuality.",
    },
    zonas: ["Mijas Pueblo", "Mijas Costa", "La Cala de Mijas"],
  },
];

export function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}
