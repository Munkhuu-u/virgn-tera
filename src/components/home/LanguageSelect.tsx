import React from "react";
import { t, Lang } from "../../lib/i18n";
import { useI18n } from "../../context/I18nProvider";

export const LanguageSelect: React.FC = () => {
  const { lang, setLang } = useI18n();

  const langs = Object.keys(t) as Lang[];

  return (
    <select
      value={lang} // current language
      onChange={(e) => setLang(e.target.value as Lang)} // update language
      className="p-2 border border-gray-300 rounded"
    >
      {langs.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
