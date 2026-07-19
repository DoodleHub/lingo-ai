import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/theme";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

export function TabPlaceholderScreen({ icon, title, description }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center gap-3 px-8">
        <View className="h-16 w-16 items-center justify-center rounded-full bg-surface">
          <Ionicons name={icon} size={28} color={colors.lingoDeepPurple} />
        </View>
        <Text className="text-h3 text-text-primary">{title}</Text>
        <Text className="text-center text-body-md text-text-secondary">
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
}
