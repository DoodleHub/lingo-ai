import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

import { images } from "@/constants/images";
import { colors } from "@/theme";

type Props = {
  greeting: string;
  flagEmoji: string;
  streakDays: number;
};

export function HomeHeader({ greeting, flagEmoji, streakDays }: Props) {
  return (
    <View className="flex-row items-center justify-between px-6 pt-2">
      <View className="flex-row items-center gap-3">
        <View className="h-11 w-11 items-center justify-center rounded-full bg-surface">
          <Text className="text-[20px]">{flagEmoji}</Text>
        </View>
        <Text className="text-h4 text-text-primary">{greeting}</Text>
      </View>

      <View className="flex-row items-center gap-4">
        <View className="flex-row items-center gap-1">
          <Image
            source={images.streakFire}
            style={{ width: 22, height: 22 }}
            resizeMode="contain"
          />
          <Text className="text-h4 text-text-primary">{streakDays}</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color={colors.textPrimary} />
      </View>
    </View>
  );
}
