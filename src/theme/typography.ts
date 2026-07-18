import { fontFamily } from "./fonts";

// Type scale sourced from prompt_material/01-design-system.png
// Keep in sync with the `text-*` utilities in src/global.css.
// `lineHeight` here is resolved to px (fontSize * multiplier from the design
// doc) since React Native's `lineHeight` style prop expects an absolute
// value, unlike the unitless multiplier NativeWind accepts in CSS.

export const typeScale = {
  h1: { fontFamily: fontFamily.bold, fontSize: 32, lineHeight: 38.4 },
  h2: { fontFamily: fontFamily.semiBold, fontSize: 24, lineHeight: 31.2 },
  h3: { fontFamily: fontFamily.semiBold, fontSize: 20, lineHeight: 26 },
  h4: { fontFamily: fontFamily.medium, fontSize: 16, lineHeight: 22.4 },
  bodyLarge: { fontFamily: fontFamily.regular, fontSize: 16, lineHeight: 25.6 },
  bodyMedium: { fontFamily: fontFamily.regular, fontSize: 14, lineHeight: 22.4 },
  bodySmall: { fontFamily: fontFamily.regular, fontSize: 13, lineHeight: 20.8 },
  caption: { fontFamily: fontFamily.regular, fontSize: 11, lineHeight: 15.4 },
} as const;

export type TypeScaleToken = keyof typeof typeScale;
