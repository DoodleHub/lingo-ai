// Design tokens sourced from prompt_material/01-design-system.png
// Keep in sync with the `@theme` block in src/global.css.

export const brandColors = {
  lingoPurple: "#6C4EF5",
  lingoDeepPurple: "#5B3BF6",
  lingoBlue: "#4D8BFF",
  lingoGreen: "#21C16B",
} as const;

export const semanticColors = {
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",
} as const;

export const neutralColors = {
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export const colors = {
  ...brandColors,
  ...semanticColors,
  ...neutralColors,
} as const;

export type ColorToken = keyof typeof colors;
