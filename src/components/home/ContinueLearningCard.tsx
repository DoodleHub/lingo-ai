import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";

type Props = {
  languageName: string;
  level: string;
  unitOrder: number;
  onPressContinue: () => void;
};

export function ContinueLearningCard({
  languageName,
  level,
  unitOrder,
  onPressContinue,
}: Props) {
  return (
    <View className="mx-6 mt-5 overflow-hidden rounded-3xl">
      <LinearGradient
        colors={["#6C4EF5", "#4433B0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ paddingHorizontal: 20, paddingVertical: 22 }}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-2">
            <Text className="text-body-md text-white/80">Continue learning</Text>
            <Text className="mt-1 text-h1 text-white">{languageName}</Text>
            <Text className="mt-1 text-body-md text-white/80">
              {level} • Unit {unitOrder}
            </Text>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={onPressContinue}
              className="mt-4 h-11 flex-row items-center justify-center self-start rounded-full bg-white px-6"
            >
              <Text className="text-h4 text-lingo-deep-purple">Continue</Text>
            </TouchableOpacity>
          </View>

          <Image source={images.palace} style={{ width: 120, height: 120 }} resizeMode="contain" />
        </View>
      </LinearGradient>
    </View>
  );
}
