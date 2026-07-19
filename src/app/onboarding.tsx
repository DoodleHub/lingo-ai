import { router } from "expo-router";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { posthog } from "@/lib/posthog";

export default function Onboarding() {
  const { width } = useWindowDimensions();
  const mascotSize = width * 0.62;
  const stageHeight = mascotSize * 1.35;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-6 pb-6">
        <View className="flex-row items-center justify-center gap-2 pt-4">
          <Image
            source={images.mascotLogo}
            style={{ width: 36, height: 36 }}
            resizeMode="contain"
          />
          <Text className="font-['Poppins-Bold'] text-[24px] text-text-primary">
            LingoAI
          </Text>
        </View>

        <View className="mt-10">
          <Text className="text-h1 text-text-primary">Your AI language</Text>
          <Text className="text-h1 text-lingo-deep-purple">teacher.</Text>
        </View>

        <Text className="mt-3 text-body-md text-text-secondary">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        <View className="mt-4 flex-1 items-center justify-center">
          <View
            className="relative"
            style={{ width: mascotSize, height: stageHeight }}
          >
            <View className="absolute left-0 top-[22%] rounded-2xl bg-[#EFF6FD] px-4 py-2">
              <Text className="font-['Poppins-SemiBold'] text-[15px] text-text-primary">
                Hello!
              </Text>
              <View className="absolute -bottom-1 left-5 h-3 w-3 rotate-45 rounded-sm bg-[#EFF6FD]" />
            </View>

            <View className="absolute right-0 top-0 rounded-2xl bg-[#F6F7FD] px-4 py-2">
              <Text className="font-['Poppins-SemiBold'] text-[15px] text-lingo-deep-purple">
                ¡Hola!
              </Text>
              <View className="absolute -bottom-1 left-5 h-3 w-3 rotate-45 rounded-sm bg-[#F6F7FD]" />
            </View>

            <View className="absolute right-[-4%] top-[38%] rounded-2xl bg-[#FCF3EE] px-4 py-2">
              <Text className="font-['Poppins-SemiBold'] text-[15px] text-[#E9483F]">
                你好!
              </Text>
              <View className="absolute -bottom-1 left-5 h-3 w-3 rotate-45 rounded-sm bg-[#FCF3EE]" />
            </View>

            <Image
              source={images.mascotWelcome}
              style={{
                width: mascotSize,
                height: mascotSize,
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
              resizeMode="contain"
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {
            posthog.capture('onboarding_started');
            router.push("/sign-up");
          }}
          className="h-14 flex-row items-center justify-center rounded-full bg-lingo-deep-purple px-6"
        >
          <Text className="font-['Poppins-SemiBold'] text-[17px] text-white">
            Get Started
          </Text>
          <Text className="ml-2 text-[20px] text-white">›</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
