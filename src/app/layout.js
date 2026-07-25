import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { cities } from "@/lib/cities";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yoainstalaciones.com"),
  title: `${siteConfig.businessName} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.businessName,
    description: siteConfig.description,
    images: ["/images/trabajos/mueble-tv-chimenea.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.businessName,
  description: siteConfig.description,
  telephone: `+${siteConfig.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Málaga",
    addressCountry: "ES",
  },
  areaServed: cities.map((city) => ({
    "@type": "City",
    name: city.name,
  })),
  sameAs: [siteConfig.taskiaUrl],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
