import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

type Provider = "google" | "facebook" | "apple";

const providers: { key: Provider; label: string }[] = [
  { key: "google", label: "Continue with Google" },
  { key: "facebook", label: "Continue with Facebook" },
  { key: "apple", label: "Continue with Apple" },
];

interface SocialAuthButtonsProps {
  onPressProvider?: (provider: Provider) => void;
}

export function SocialAuthButtons({ onPressProvider }: SocialAuthButtonsProps) {
  return (
    <View className="gap-3">
      <View className="flex-row items-center gap-3">
        <View className="h-px flex-1 bg-border" />
        <Text className="text-body-sm text-text-secondary">or continue with</Text>
        <View className="h-px flex-1 bg-border" />
      </View>

      {providers.map((provider) => (
        <TouchableOpacity
          key={provider.key}
          activeOpacity={0.75}
          onPress={() => onPressProvider?.(provider.key)}
          className="h-14 flex-row items-center justify-center gap-3 rounded-2xl border border-border"
        >
          <ProviderIcon provider={provider.key} />
          <Text className="text-h4 text-text-primary">{provider.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function ProviderIcon({ provider }: { provider: Provider }) {
  switch (provider) {
    case "google":
      return <FontAwesome5 name="google" size={18} color="#4285F4" />;
    case "facebook":
      return (
        <View className="h-5 w-5 items-center justify-center rounded-full bg-[#1877F2]">
          <FontAwesome5 name="facebook-f" size={11} color="#FFFFFF" />
        </View>
      );
    case "apple":
      return <FontAwesome5 name="apple" size={20} color="#0D132B" />;
  }
}
