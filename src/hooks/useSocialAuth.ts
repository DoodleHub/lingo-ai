import { useSSO } from "@clerk/expo";
import { router } from "expo-router";
import { useState } from "react";

type Provider = "google" | "facebook" | "apple";

const strategyByProvider = {
  google: "oauth_google",
  facebook: "oauth_facebook",
  apple: "oauth_apple",
} as const;

export function useSocialAuth() {
  const { startSSOFlow } = useSSO();
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialAuth = async (provider: Provider) => {
    setIsLoading(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: strategyByProvider[provider],
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSocialAuth, isLoading };
}
