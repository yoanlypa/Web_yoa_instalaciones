"use client";

import { createContext, useContext, useSyncExternalStore, useCallback } from "react";
import { translations } from "@/lib/translations";

const STORAGE_KEY = "yoa-lang";
const listeners = new Set();
let currentLang = "es";
let initialized = false;

function readInitialLang() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en") return stored;
  if (navigator.language?.toLowerCase().startsWith("en")) return "en";
  return "es";
}

function getSnapshot() {
  if (typeof window !== "undefined" && !initialized) {
    initialized = true;
    currentLang = readInitialLang();
  }
  return currentLang;
}

function getServerSnapshot() {
  return "es";
}

function subscribe(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setStoreLang(next) {
  currentLang = next;
  initialized = true;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setLang = useCallback((next) => setStoreLang(next), []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
