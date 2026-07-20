import { siteConfig } from "@/lib/site-config";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="bg-stone-900 py-20 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Pide tu presupuesto</h2>
          <p className="mt-3 max-w-md text-stone-300">
            Rellena el formulario con lo que necesitas y se abrirá WhatsApp con
            el mensaje listo para enviarme. Te responderé con un presupuesto
            en cuanto pueda.
          </p>
          <p className="mt-6 text-sm text-stone-400">
            También puedes escribirme directamente al{" "}
            <span className="font-semibold text-white">{siteConfig.phoneDisplay}</span>.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
