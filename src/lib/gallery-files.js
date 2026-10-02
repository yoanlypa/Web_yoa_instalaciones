import fs from "node:fs";
import path from "node:path";
import { gallery } from "@/lib/site-config";

const IMAGE = /\.(jpe?g|png|webp|avif)$/i;
const VIDEO = /\.(mp4|webm|mov)$/i;

// Lee automáticamente todas las fotos/vídeos de public/images/trabajos.
// - Las que están descritas en site-config.js usan ese texto (es/en).
// - Las demás usan el nombre del archivo como pie de foto:
//   "cocina-blanca-mijas.jpg" -> "Cocina blanca mijas"
export function getGallery() {
  const dir = path.join(process.cwd(), "public", "images", "trabajos");
  let files = [];
  try {
    files = fs.readdirSync(dir).filter((f) => IMAGE.test(f) || VIDEO.test(f));
  } catch {
    files = [];
  }

  const described = gallery.filter((g) => files.includes(path.basename(g.src)));
  const describedSrc = new Set(described.map((g) => g.src));

  const extra = files
    .sort((a, b) => a.localeCompare(b, "es"))
    .map((f) => `/images/trabajos/${f}`)
    .filter((src) => !describedSrc.has(src))
    .map((src) => {
      const base = path.basename(src).replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
      const caption = base.charAt(0).toUpperCase() + base.slice(1);
      return {
        type: VIDEO.test(src) ? "video" : "image",
        src,
        alt: { es: caption, en: caption },
        caption: { es: caption, en: caption },
      };
    });

  return [...described, ...extra];
}
