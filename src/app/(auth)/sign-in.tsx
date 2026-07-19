import { useSignIn } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthTextField } from "@/components/auth/AuthTextField";
import { SocialAuthButtons } from "@/components/auth/SocialAuthButtons";
import { VerificationModal } from "@/components/auth/VerificationModal";
import { images } from "@/constants/images";
import { useSocialAuth } from "@/hooks/useSocialAuth";
import { posthog } from "@/lib/posthog";

export default function SignIn() {
  const { width } = useWindowDimensions();
  const mascotSize = width * 0.45;
  const { signIn } = useSignIn();
  const { handleSocialAuth } = useSocialAuth();

  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendCode = async () => {
    if (!signIn || !email.trim()) return;

    setError(null);
    setIsSubmitting(true);
    const { error: sendError } = await signIn.emailCode.sendCode({
      emailAddress: email.trim(),
    });
    setIsSubmitting(false);

    if (sendError) {
      setError(sendError.longMessage ?? sendError.message);
      return;
    }

    setIsVerifying(true);
  };

  const handleVerified = async (code: string) => {
    if (!signIn) return;

    const { error: verifyError } = await signIn.emailCode.verifyCode({ code });
    if (verifyError) {
      setError(verifyError.longMessage ?? verifyError.message);
      return;
    }

    const { error: finalizeError } = await signIn.finalize();
    if (finalizeError) {
      setError(finalizeError.longMessage ?? finalizeError.message);
      return;
    }

    posthog.identify(email.trim());
    posthog.capture('user_signed_in', { method: 'email' });

    setIsVerifying(false);
    router.replace("/");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          className="flex-1 px-6"
          contentContainerClassName="pb-6"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            hitSlop={8}
            className="h-10 w-10 items-center justify-center"
          >
            <Ionicons name="chevron-back" size={26} color="#0D132B" />
          </TouchableOpacity>

          <Text className="mt-2 text-h1 text-text-primary">Welcome back</Text>
          <Text className="mt-2 text-body-md text-text-secondary">
            Continue your language journey ✨
          </Text>

          <View className="mt-4 items-center">
            <View
              className="relative"
              style={{ width: mascotSize, height: mascotSize }}
            >
              <Ionicons
                name="sparkles"
                size={16}
                color="#FFC800"
                style={{ position: "absolute", left: 4, top: 4 }}
              />
              <Ionicons
                name="sparkles"
                size={14}
                color="#4D8BFF"
                style={{ position: "absolute", right: 8, top: 26 }}
              />
              <Ionicons
                name="sparkles"
                size={12}
                color="#FFC800"
                style={{ position: "absolute", right: 20, bottom: 8 }}
              />
              <Image
                source={images.mascotAuth}
                style={{ width: mascotSize, height: mascotSize }}
                resizeMode="contain"
              />
            </View>
          </View>

          <View className="mt-4 gap-4">
            <AuthTextField
              label="Email"
              placeholder="alex@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              textContentType="emailAddress"
            />
          </View>

          {error && (
            <Text className="mt-3 text-body-sm text-error">{error}</Text>
          )}

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleSendCode}
            disabled={isSubmitting}
            className="mt-6 overflow-hidden rounded-full"
          >
            <LinearGradient
              colors={["#6C4EF5", "#5B3BF6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ height: 56, alignItems: "center", justifyContent: "center" }}
            >
              <Text className="text-h4 text-white">
                {isSubmitting ? "Sending code..." : "Sign In"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <View className="mt-6">
            <SocialAuthButtons onPressProvider={handleSocialAuth} />
          </View>
        </ScrollView>

        <View className="flex-row items-center justify-center gap-1 px-6 pb-4 pt-2">
          <Text className="text-body-sm text-text-secondary">
            Don&apos;t have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/sign-up")} hitSlop={8}>
            <Text className="font-['Poppins-SemiBold'] text-body-sm text-lingo-deep-purple">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={isVerifying}
        email={email}
        onClose={() => setIsVerifying(false)}
        onComplete={handleVerified}
      />
    </SafeAreaView>
  );
}
