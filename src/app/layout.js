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
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: siteConfig.businessName }],
  },
  verification: {
    google: "tlOOF4r2b8BDTnlyuWzQ1VCm0mD0g4qPEoj8ek4Xmwk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.businessName,
  description: siteConfig.description,
  telephone: `+${siteConfig.whatsappNumber}`,
  url: "https://yoainstalaciones.com",
  logo: "https://yoainstalaciones.com/logo.png",
  image: "https://yoainstalaciones.com/og.jpg",
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
