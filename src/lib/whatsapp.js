import { siteConfig } from "@/lib/site-config";

export function whatsappLink(message) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
