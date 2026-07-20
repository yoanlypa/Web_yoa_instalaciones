import { siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-10 text-stone-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-base font-semibold text-white">{siteConfig.businessName}</p>
          <p className="text-sm">{siteConfig.phoneDisplay}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={whatsappLink(`Hola ${siteConfig.businessName}, quiero pedir información.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-full border border-stone-700 p-2.5 transition-colors hover:border-amber-500 hover:text-amber-400"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-stone-700 p-2.5 transition-colors hover:border-amber-500 hover:text-amber-400"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="rounded-full border border-stone-700 p-2.5 transition-colors hover:border-amber-500 hover:text-amber-400"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-stone-500">
          © {new Date().getFullYear()} {siteConfig.businessName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
