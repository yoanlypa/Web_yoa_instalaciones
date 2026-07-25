"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { whatsappLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const initialForm = {
  nombre: "",
  telefono: "",
  servicio: "",
  fecha: "",
  detalles: "",
};

function buildMessage(form, t, businessName) {
  const lines = [t.form.messageIntro(businessName), `${t.form.messageNombre}: ${form.nombre}`];
  if (form.telefono) lines.push(`${t.form.messageTelefono}: ${form.telefono}`);
  if (form.servicio) lines.push(`${t.form.messageServicio}: ${form.servicio}`);
  if (form.fecha) lines.push(`${t.form.messageFecha}: ${form.fecha}`);
  lines.push(`${t.form.messageDetalles}: ${form.detalles}`);
  return lines.join("\n");
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.nombre.trim() || !form.detalles.trim()) {
      setError(t.form.error);
      return;
    }

    setError("");
    const url = whatsappLink(buildMessage(form, t, siteConfig.businessName));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-stone-700">
          {t.form.nombre}
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
          placeholder={t.form.nombrePlaceholder}
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="telefono" className="mb-1 block text-sm font-medium text-stone-700">
          {t.form.telefono}
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          value={form.telefono}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
          placeholder={t.form.telefonoPlaceholder}
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="servicio" className="mb-1 block text-sm font-medium text-stone-700">
          {t.form.servicio}
        </label>
        <input
          id="servicio"
          name="servicio"
          type="text"
          value={form.servicio}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
          placeholder={t.form.servicioPlaceholder}
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="fecha" className="mb-1 block text-sm font-medium text-stone-700">
          {t.form.fecha}
        </label>
        <input
          id="fecha"
          name="fecha"
          type="date"
          value={form.fecha}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="detalles" className="mb-1 block text-sm font-medium text-stone-700">
          {t.form.detalles}
        </label>
        <textarea
          id="detalles"
          name="detalles"
          rows={4}
          value={form.detalles}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
          placeholder={t.form.detallesPlaceholder}
        />
      </div>

      {error && <p className="sm:col-span-2 text-sm text-red-600">{error}</p>}

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {t.form.submit}
        </button>
      </div>
    </form>
  );
}
