export const translations = {
  es: {
    nav: {
      trabajos: "Trabajos",
      servicios: "Servicios",
      resenas: "Reseñas",
      sobreMi: "Sobre mí",
      contacto: "Contacto",
    },
    hero: {
      badge: "Trabajos de manitas",
      title: "Reparaciones e instalaciones hechas con cuidado",
      subtitle:
        "Reparaciones básicas, instalaciones y carpintería a medida. Cuéntame qué necesitas y te preparo un presupuesto sin compromiso.",
      ctaPrimary: "Pedir presupuesto",
      ctaSecondary: "Ver trabajos",
      whatsappMessage: (name) => `Hola ${name}, quiero pedir un presupuesto.`,
      whatsappMessageInfo: (name) => `Hola ${name}, quiero pedir información.`,
    },
    gallery: {
      title: "Trabajos realizados",
      subtitle: "Una muestra de instalaciones y piezas a medida hechas con cuidado y atención al detalle.",
    },
    services: {
      title: "Servicios",
      subtitle: "Del pequeño arreglo a la instalación a medida. Esto es lo que puedo hacer por ti.",
    },
    reviews: {
      title: "Reseñas de clientes",
      subtitle: "Opiniones reales de trabajos realizados a través de Taskia.",
      cta: "Ver más reseñas en Taskia",
    },
    about: {
      title: "Sobre mí",
      paragraph1: (name) =>
        `Soy la persona detrás de ${name}. Me dedico a hacer reparaciones e instalaciones cuidando cada detalle, desde el primer contacto hasta el acabado final. Cada trabajo se hace a medida de lo que necesita el cliente, con materiales de calidad y buena comunicación en todo momento.`,
      paragraph2:
        "Si tienes un proyecto en mente, por pequeño o grande que sea, hablamos por WhatsApp y te preparo un presupuesto claro y sin sorpresas.",
      stat1Label: "Trabajos a medida",
      stat2Label: "Respuesta por WhatsApp",
    },
    contact: {
      title: "Pide tu presupuesto",
      subtitle:
        "Rellena el formulario con lo que necesitas y se abrirá WhatsApp con el mensaje listo para enviarme. Te responderé con un presupuesto en cuanto pueda.",
      phoneNotePrefix: "También puedes escribirme directamente al",
    },
    form: {
      nombre: "Nombre *",
      nombrePlaceholder: "Tu nombre",
      telefono: "Teléfono",
      telefonoPlaceholder: "600 000 000",
      servicio: "Tipo de servicio",
      servicioPlaceholder: "Ej. Montaje de mueble",
      fecha: "Fecha deseada",
      detalles: "Detalles *",
      detallesPlaceholder: "Cuéntame qué necesitas...",
      error: "Por favor, indica al menos tu nombre y los detalles del servicio.",
      submit: "Enviar por WhatsApp",
      messageIntro: (name) => `Hola ${name}, quiero pedir un presupuesto.`,
      messageNombre: "Nombre",
      messageTelefono: "Teléfono",
      messageServicio: "Servicio",
      messageFecha: "Fecha deseada",
      messageDetalles: "Detalles",
    },
    footer: {
      zonas: "Zonas donde trabajo",
      rights: (year, name) => `© ${year} ${name}. Todos los derechos reservados.`,
    },
    cityIntro: {
      badge: (city) => `Montador de muebles en ${city}`,
      title: (city) => `Montador de muebles e instalaciones en ${city}`,
      ctaPrimary: (city) => `Pedir presupuesto en ${city}`,
      ctaSecondary: "Ver trabajos realizados",
      whatsappMessage: (name, city) => `Hola ${name}, necesito un montador de muebles en ${city}.`,
      tambienTrabajoEn: "También trabajo en",
    },
    qr: {
      title: (name) => `Código QR — ${name}`,
      subtitle: "Este QR lleva directamente a esta web. Descárgalo e imprímelo en tu tarjeta de presentación.",
      download: "Descargar PNG",
    },
  },
  en: {
    nav: {
      trabajos: "Work",
      servicios: "Services",
      resenas: "Reviews",
      sobreMi: "About",
      contacto: "Contact",
    },
    hero: {
      badge: "Handyman work",
      title: "Repairs and installations done with care",
      subtitle:
        "Basic repairs, installations and custom carpentry. Tell me what you need and I'll prepare a no-obligation quote.",
      ctaPrimary: "Get a quote",
      ctaSecondary: "See my work",
      whatsappMessage: (name) => `Hi ${name}, I'd like to request a quote.`,
      whatsappMessageInfo: (name) => `Hi ${name}, I'd like some information.`,
    },
    gallery: {
      title: "Completed work",
      subtitle: "A sample of installations and custom pieces made with care and attention to detail.",
    },
    services: {
      title: "Services",
      subtitle: "From a small fix to a custom installation. Here's what I can do for you.",
    },
    reviews: {
      title: "Customer reviews",
      subtitle: "Real reviews from jobs completed through Taskia.",
      cta: "See more reviews on Taskia",
    },
    about: {
      title: "About me",
      paragraph1: (name) =>
        `I'm the person behind ${name}. I take care of repairs and installations paying attention to every detail, from the first contact to the final finish. Every job is tailored to what the customer needs, using quality materials and clear communication throughout.`,
      paragraph2:
        "If you have a project in mind, big or small, message me on WhatsApp and I'll prepare a clear quote with no surprises.",
      stat1Label: "Custom-made work",
      stat2Label: "WhatsApp response",
    },
    contact: {
      title: "Get your quote",
      subtitle:
        "Fill in the form with what you need and WhatsApp will open with the message ready to send me. I'll get back to you with a quote as soon as I can.",
      phoneNotePrefix: "You can also message me directly at",
    },
    form: {
      nombre: "Name *",
      nombrePlaceholder: "Your name",
      telefono: "Phone",
      telefonoPlaceholder: "600 000 000",
      servicio: "Type of service",
      servicioPlaceholder: "E.g. Furniture assembly",
      fecha: "Preferred date",
      detalles: "Details *",
      detallesPlaceholder: "Tell me what you need...",
      error: "Please provide at least your name and the service details.",
      submit: "Send via WhatsApp",
      messageIntro: (name) => `Hi ${name}, I'd like to request a quote.`,
      messageNombre: "Name",
      messageTelefono: "Phone",
      messageServicio: "Service",
      messageFecha: "Preferred date",
      messageDetalles: "Details",
    },
    footer: {
      zonas: "Areas I work in",
      rights: (year, name) => `© ${year} ${name}. All rights reserved.`,
    },
    cityIntro: {
      badge: (city) => `Furniture assembler in ${city}`,
      title: (city) => `Furniture assembly and installations in ${city}`,
      ctaPrimary: (city) => `Get a quote in ${city}`,
      ctaSecondary: "See my work",
      whatsappMessage: (name, city) => `Hi ${name}, I need a furniture assembler in ${city}.`,
      tambienTrabajoEn: "I also work in",
    },
    qr: {
      title: (name) => `QR Code — ${name}`,
      subtitle: "This QR links directly to this website. Download it and print it on your business card.",
      download: "Download PNG",
    },
  },
};
