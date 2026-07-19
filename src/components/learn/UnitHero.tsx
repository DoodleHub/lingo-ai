import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";
import { colors } from "@/theme";

type Props = {
  title: string;
  unitOrder: number;
  completedCount: number;
  totalCount: number;
  bookmarked: boolean;
  onBack: () => void;
  onToggleBookmark: () => void;
};

export function UnitHero({
  title,
  unitOrder,
  completedCount,
  totalCount,
  bookmarked,
  onBack,
  onToggleBookmark,
}: Props) {
  return (
    <View className="bg-white">
      <View className="flex-row items-center justify-between px-6 pt-2">
        <TouchableOpacity
          onPress={onBack}
          hitSlop={8}
          className="h-10 w-10 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={26} color={colors.textPrimary} />
        </TouchableOpacity>

        <View className="flex-1 items-center">
          <Text className="text-h3 text-text-primary">{title}</Text>
          <Text className="mt-0.5 text-body-sm text-text-secondary">
            Unit {unitOrder} • {completedCount}/{totalCount} lessons
          </Text>
        </View>

        <TouchableOpacity
          onPress={onToggleBookmark}
          hitSlop={8}
          className="h-10 w-10 items-center justify-center"
        >
          <Ionicons
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            size={22}
            color={colors.lingoDeepPurple}
          />
        </TouchableOpacity>
      </View>

      <View className="mt-4 overflow-hidden rounded-b-[32px]">
        <LinearGradient
          colors={["#BFE3FF", "#EAF6FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ height: 200, alignItems: "center", justifyContent: "flex-end" }}
        >
          <Image
            source={images.mascotWelcome}
            style={{ width: 170, height: 170 }}
            resizeMode="contain"
          />
        </LinearGradient>
      </View>
    </View>
  );
}
