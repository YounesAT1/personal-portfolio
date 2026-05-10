"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { LANG_DATA } from "@/data";

type Language = "en" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: (typeof LANG_DATA)[Language];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Language {
  return (localStorage.getItem("language") as Language) ?? "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function setLanguage(lang: Language) {
    localStorage.setItem("language", lang);
    window.dispatchEvent(new StorageEvent("storage"));
  }

  const data = LANG_DATA[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
