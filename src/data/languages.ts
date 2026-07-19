import type { Language, LanguageCode } from "@/types/learning";

export const languages: Language[] = [
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    learners: "28.4M learners",
    popular: true,
    greeting: "Hola",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    learners: "19.4M learners",
    popular: true,
    greeting: "Bonjour",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    learners: "12.7M learners",
    popular: true,
    greeting: "こんにちは",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "🇰🇷",
    learners: "9.3M learners",
    popular: true,
    greeting: "안녕하세요",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    learners: "8.1M learners",
    popular: true,
    greeting: "Hallo",
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
    learners: "7.4M learners",
    popular: true,
    greeting: "你好",
  },
];

export const getLanguageByCode = (code: LanguageCode) =>
  languages.find((language) => language.code === code);
