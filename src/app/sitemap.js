import { cities } from "@/lib/cities";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://yoainstalaciones.com";
  const now = new Date();

  const staticRoutes = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/qr`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const cityRoutes = cities.map((city) => ({
    url: `${base}/montador-de-muebles-${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...cityRoutes];
}
