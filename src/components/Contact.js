"use client";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/language-context";
import ContactForm from "@/components/ContactForm";
import Reveal3D from "@/components/fx/Reveal3D";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="bg-stone-950 py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-3 max-w-md text-stone-300">{t.contact.subtitle}</p>
          <p className="mt-6 text-sm text-stone-400">
            {t.contact.phoneNotePrefix}{" "}
            <span className="font-semibold text-white">{siteConfig.phoneDisplay}</span>.
          </p>
        </div>

        <Reveal3D tilt={14} className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/40 sm:p-8">
          <ContactForm />
        </Reveal3D>
      </div>
    </section>
  );
}
