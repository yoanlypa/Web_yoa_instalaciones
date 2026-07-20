# Yoa Instalaciones — Web portfolio

Web de presentación para mostrar trabajos de manitas (reparaciones básicas,
instalaciones y carpintería a medida), con botón de contacto directo a
WhatsApp y un código QR listo para imprimir en tarjeta de presentación.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Editar el contenido

Casi todo el contenido del sitio (nombre del negocio, teléfono/WhatsApp,
redes sociales, servicios y fotos de la galería) está centralizado en:

```
src/lib/site-config.js
```

- **`whatsappNumber`**: número en formato internacional sin espacios ni `+`
  (ej. `34600000000`). Se usa para generar el enlace `wa.me`.
- **`instagramUrl` / `facebookUrl`**: aún tienen placeholders, hay que
  sustituirlos por los enlaces reales.
- **`services`**: lista de servicios mostrados en la sección "Servicios".
- **`gallery`**: fotos/vídeos de trabajos realizados. Las imágenes viven en
  `public/images/trabajos/` y el vídeo en `public/videos/`.

El texto de la sección "Sobre mí" (`src/components/About.js`) es un
placeholder editable — personalízalo con tu experiencia real.

### Formulario de contacto

El formulario (`src/components/ContactForm.js`) no usa ningún backend: al
enviarlo, arma un mensaje con los datos (nombre, teléfono, servicio, fecha,
detalles) y abre WhatsApp con el mensaje ya escrito, listo para enviar.

### Código QR para la tarjeta

La ruta `/qr` genera un código QR que apunta automáticamente al dominio
donde esté desplegada la web (usa `window.location.origin`, así que no hay
que regenerarlo a mano). Para obtener el PNG:

1. Despliega la web (o pruébala en local).
2. Visita `/qr`.
3. Pulsa "Descargar PNG" e imprímelo en la tarjeta.

## Desplegar en Vercel con dominio propio

1. Entra en [vercel.com/new](https://vercel.com/new) e importa este
   repositorio (`web_yoa_instalaciones`).
2. Vercel detecta Next.js automáticamente, no hace falta configurar nada
   más para desplegar.
3. Una vez desplegado, ve a **Project Settings → Domains** y añade tu
   dominio propio, siguiendo las instrucciones para apuntar los DNS.
4. (Opcional) En **Project Settings → Environment Variables** añade
   `NEXT_PUBLIC_SITE_URL=https://tudominio.com` para que las vistas previas
   al compartir el enlace (redes sociales) usen el dominio correcto. Mira
   `.env.example`.
5. Vuelve a visitar `/qr` en el dominio final para descargar el QR
   definitivo.

## Nota sobre el vídeo de la galería

`public/videos/instalacion-detalle.mov` pesa ~12 MB (no se pudo comprimir
en este entorno por falta de herramientas de vídeo). Se carga de forma
diferida (`preload="none"`) para no afectar el tiempo de carga inicial,
pero conviene comprimirlo a MP4/H.264 más ligero antes de mostrarlo a
muchos usuarios — con [HandBrake](https://handbrake.fr/) o `ffmpeg` es
sencillo.
