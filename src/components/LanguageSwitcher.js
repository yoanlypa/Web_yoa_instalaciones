"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-stone-200 p-1">
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-label="Español"
        aria-pressed={lang === "es"}
        className={`flex h-7 w-7 items-center justify-center rounded-full text-base transition-opacity ${
          lang === "es" ? "opacity-100 ring-2 ring-amber-500" : "opacity-40 hover:opacity-70"
        }`}
      >
        🇪🇸
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label="English"
        aria-pressed={lang === "en"}
        className={`flex h-7 w-7 items-center justify-center rounded-full text-base transition-opacity ${
          lang === "en" ? "opacity-100 ring-2 ring-amber-500" : "opacity-40 hover:opacity-70"
        }`}
      >
        🇬🇧
      </button>
    </div>
  );
}
