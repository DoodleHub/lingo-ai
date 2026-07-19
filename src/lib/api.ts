import Constants from "expo-constants";
import { Platform } from "react-native";

// Expo Router API routes (`+api.ts`) are served by the same Metro dev server.
// Relative fetches work on web, but native needs the dev server's own origin -
// resolved from `hostUri`, or `EXPO_PUBLIC_API_BASE_URL` once deployed.
export function getApiBaseUrl(): string {
  if (process.env.EXPO_PUBLIC_API_BASE_URL) {
    return process.env.EXPO_PUBLIC_API_BASE_URL;
  }

  if (Platform.OS === "web") {
    return "";
  }

  const hostUri = Constants.expoConfig?.hostUri;
  if (!hostUri) {
    throw new Error(
      "Unable to resolve the API base URL. Set EXPO_PUBLIC_API_BASE_URL for production builds.",
    );
  }

  return `http://${hostUri}`;
}
