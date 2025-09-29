import React, { useState, useContext, createContext, useMemo } from "react";
import { Lang, Key, translations } from "@/lib/i18n";

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: Key) => string;
};

//generally I18nProvider's value's type
const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [lang, setLang] = useState<Lang>("en");

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      t: (key) => translations[lang][key],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}></I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
};
