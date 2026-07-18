import type { LanguageCode, Unit } from "@/types/learning";

export const units: Unit[] = [
  // Spanish
  {
    id: "es-u1",
    languageCode: "es",
    order: 1,
    title: "Getting Started",
    description: "Learn the basics of Spanish greetings, names, and numbers.",
  },
  {
    id: "es-u2",
    languageCode: "es",
    order: 2,
    title: "Everyday Basics",
    description: "Talk about colors, objects, and days of the week.",
  },
  {
    id: "es-u3",
    languageCode: "es",
    order: 3,
    title: "At the Café",
    description: "Order food, make small talk, and get around town.",
  },

  // French
  {
    id: "fr-u1",
    languageCode: "fr",
    order: 1,
    title: "Getting Started",
    description: "Learn the basics of French greetings and introductions.",
  },

  // Japanese
  {
    id: "ja-u1",
    languageCode: "ja",
    order: 1,
    title: "Getting Started",
    description: "Learn the basics of Japanese greetings and introductions.",
  },
];

export const getUnitsByLanguage = (languageCode: LanguageCode) =>
  units
    .filter((unit) => unit.languageCode === languageCode)
    .sort((a, b) => a.order - b.order);

export const getUnitById = (unitId: string) =>
  units.find((unit) => unit.id === unitId);
