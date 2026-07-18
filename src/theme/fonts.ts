// Poppins font files, loaded at runtime via `useFonts` in the root layout.
// Keep the family names in sync with the `--font-*` variables in src/global.css.

export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontAssets = {
  [fontFamily.regular]: require("../../assets/fonts/Poppins-Regular.ttf"),
  [fontFamily.medium]: require("../../assets/fonts/Poppins-Medium.ttf"),
  [fontFamily.semiBold]: require("../../assets/fonts/Poppins-SemiBold.ttf"),
  [fontFamily.bold]: require("../../assets/fonts/Poppins-Bold.ttf"),
};
