// src/i18n.ts
export const en = {
  Hello: "Hello",
  exclusiveJourneys: "EXCLUSIVE JOURNEYS TO MONGOLIA",
  welcomeTo: "WELCOME TO",
  virginTerra: "VIRGIN TERRA",
  bookNow: "BOOK NOW",
} as const;

export type Key = keyof typeof en;

// export type Lang = keyof typeof translations;
export type Lang = "en" | "mn" | "cn" | "es" | "ru";

export const translations = {
  en: {
    Hello: "Hello",
    exclusiveJourneys: "EXCLUSIVE JOURNEYS TO MONGOLIA",
    welcomeTo: "WELCOME TO",
    virginTerra: "VIRGIN TERRA",
    bookNow: "BOOK NOW",
  },
  mn: {
    Hello: "Сайн уу",
    exclusiveJourneys: "МОНГОЛД ЗОРИУЛСАН ОНЦГОЙ АЯЛАЛ",
    welcomeTo: "ТАВТАЙ МОРИЛНО УУ",
    virginTerra: "ЦЭВЭР ГАЗАР",
    bookNow: "ОДОО ЗАХИАЛАХ",
  },
  cn: {
    Hello: "你好",
    exclusiveJourneys: "蒙古独家之旅",
    welcomeTo: "欢迎来到",
    virginTerra: "处女之地",
    bookNow: "立即预订",
  },
  es: {
    Hello: "Hola",
    exclusiveJourneys: "VIAJES EXCLUSIVOS A MONGOLIA",
    welcomeTo: "BIENVENIDO A",
    virginTerra: "TIERRA VIRGEN",
    bookNow: "RESERVAR AHORA",
  },
  ru: {
    Hello: "Привет",
    exclusiveJourneys: "ЭКСКЛЮЗИВНЫЕ ПУТЕШЕСТВИЯ В МОНГОЛИЮ",
    welcomeTo: "ДОБРО ПОЖАЛОВАТЬ В",
    virginTerra: "НЕОСВОЕННАЯ ЗЕМЛЯ",
    bookNow: "ЗАБРОНИРОВАТЬ",
  },
} satisfies Record<Lang, Record<Key, string>>;

export const t = (lang: Lang, key: Key) => translations[lang][key];
