import { useSSO } from "@clerk/expo";
import { router } from "expo-router";
import { useState } from "react";

import { posthog } from "@/lib/posthog";

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
    posthog.capture('social_auth_started', { provider });
    setIsLoading(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: strategyByProvider[provider],
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        posthog.capture('user_signed_in', { method: provider });
        router.replace("/");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSocialAuth, isLoading };
}
