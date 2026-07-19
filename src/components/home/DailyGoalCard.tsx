import { Image, Text, View } from "react-native";

import { images } from "@/constants/images";

type Props = {
  xpToday: number;
  dailyGoalXp: number;
};

export function DailyGoalCard({ xpToday, dailyGoalXp }: Props) {
  const progress = Math.min(xpToday / dailyGoalXp, 1);

  return (
    <View className="mx-6 mt-5 flex-row items-center justify-between rounded-3xl bg-[#FBEFE2] px-5 py-4">
      <View className="flex-1">
        <Text className="text-body-md text-text-secondary">Daily goal</Text>
        <View className="mt-1 flex-row items-baseline gap-1">
          <Text className="text-h1 text-text-primary">{xpToday}</Text>
          <Text className="text-body-md text-text-secondary">/ {dailyGoalXp} XP</Text>
        </View>
        <View className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/70">
          <View className="h-2 rounded-full bg-streak" style={{ width: `${progress * 100}%` }} />
        </View>
      </View>

      <Image
        source={images.treasure}
        style={{ width: 76, height: 76, marginLeft: 12 }}
        resizeMode="contain"
      />
    </View>
  );
}
