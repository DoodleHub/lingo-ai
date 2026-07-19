import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { usePostHog } from "posthog-react-native";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { getLanguageByCode } from "@/data/languages";
import { getLessonById } from "@/data/lessons";
import { colors } from "@/theme";

const FEEDBACK = [
  { label: "Speaking", value: "Excellent", color: colors.lingoGreen },
  { label: "Pronunciation", value: "Great", color: colors.lingoBlue },
  { label: "Grammar", value: "Good", color: colors.lingoPurple },
] as const;

const CARD_SHADOW = {
  shadowColor: "#000000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.12,
  shadowRadius: 10,
  elevation: 4,
};

export default function AudioLesson() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const posthog = usePostHog();

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);

  const lesson = getLessonById(id);
  if (!lesson) return null;

  const language = getLanguageByCode(lesson.languageCode);

  const handleEndCall = () => {
    posthog.capture("audio_lesson_ended", { lesson_id: lesson.id });
    router.back();
  };

  const handleShowGoal = () => {
    Alert.alert(
      lesson.title,
      [lesson.goal.summary, "", ...lesson.goal.objectives.map((objective) => `• ${objective}`)].join(
        "\n",
      ),
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-row items-center justify-between px-6 pt-2">
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={8}
          className="h-10 w-10 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={26} color={colors.textPrimary} />
        </TouchableOpacity>

        <View className="items-center">
          <Text className="text-h3 text-text-primary">AI Teacher</Text>
          <View className="mt-0.5 flex-row items-center gap-1.5">
            <View className="h-2 w-2 rounded-full bg-lingo-green" />
            <Text className="text-body-sm text-text-secondary">Online</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            onPress={() => setCameraOn((prev) => !prev)}
            hitSlop={6}
            className="h-10 w-10 items-center justify-center rounded-full bg-surface"
          >
            <Ionicons
              name={cameraOn ? "videocam" : "videocam-outline"}
              size={18}
              color={colors.textPrimary}
            />
          </TouchableOpacity>

          <View className="h-10 w-10 items-center justify-center rounded-full bg-surface">
            <Text className="text-body-sm text-text-primary">{lesson.order}</Text>
          </View>

          <TouchableOpacity
            onPress={handleShowGoal}
            hitSlop={6}
            className="h-10 w-10 items-center justify-center rounded-full bg-surface"
          >
            <Ionicons name="information-circle-outline" size={20} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        className="flex-1 px-6"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-4 overflow-hidden rounded-3xl" style={{ height: 400 }}>
          <LinearGradient
            colors={["#EDE9FE", "#F6F2FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
          >
            <View className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1.5">
              <Text className="text-caption text-white">
                {language?.flag} {lesson.title}
              </Text>
            </View>

            <View
              className="absolute right-4 top-4 h-20 w-16 items-center justify-center rounded-2xl border-2 border-white bg-surface"
              style={CARD_SHADOW}
            >
              <Ionicons name="person" size={26} color={colors.textSecondary} />
              <View className="absolute -bottom-1.5 -right-1.5 h-6 w-6 items-center justify-center rounded-full bg-text-primary">
                <Ionicons name="videocam-off" size={12} color="#FFFFFF" />
              </View>
            </View>

            <View className="flex-1 items-center justify-center">
              <Image
                source={images.mascotWelcome}
                style={{ width: 220, height: 220 }}
                resizeMode="contain"
              />
            </View>
          </LinearGradient>

          <View className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white px-4 py-3" style={CARD_SHADOW}>
            <View className="flex-row items-center justify-between">
              <View className="flex-1 pr-3">
                <Text className="text-h4 text-text-primary">{lesson.aiTeacher.openingLine}</Text>
                {subtitlesOn && (
                  <Text className="mt-1 text-body-sm text-text-secondary">
                    {lesson.aiTeacher.openingLineTranslation}
                  </Text>
                )}
              </View>
              <TouchableOpacity
                hitSlop={8}
                className="h-9 w-9 items-center justify-center rounded-full bg-surface"
              >
                <Ionicons name="volume-high" size={18} color={colors.lingoDeepPurple} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="mt-6 flex-row items-start justify-between px-2">
          <ControlButton
            icon={cameraOn ? "videocam" : "videocam-outline"}
            label="Camera"
            active={cameraOn}
            onPress={() => setCameraOn((prev) => !prev)}
          />
          <ControlButton
            icon={micOn ? "mic" : "mic-off"}
            label="Mic"
            active={micOn}
            onPress={() => setMicOn((prev) => !prev)}
          />
          <ControlButton
            icon="language"
            label="Subtitles"
            active={subtitlesOn}
            onPress={() => setSubtitlesOn((prev) => !prev)}
          />

          <View className="items-center">
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleEndCall}
              className="h-14 w-14 items-center justify-center rounded-full bg-error"
            >
              <MaterialIcons name="call-end" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text className="mt-1.5 text-caption text-text-secondary">End Call</Text>
          </View>
        </View>

        <View className="mt-6 flex-row items-stretch justify-between rounded-2xl border border-border bg-white px-4 py-4">
          {FEEDBACK.map((item, index) => (
            <View
              key={item.label}
              className={`flex-1 items-center justify-center ${
                index < FEEDBACK.length - 1 ? "border-r border-border" : ""
              }`}
            >
              <Text className="text-body-sm text-text-primary">{item.label}</Text>
              <Text className="mt-1 text-h4" style={{ color: item.color }}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>

        {lesson.phrases.length > 0 && (
          <View className="mt-6">
            <Text className="text-h4 text-text-primary">Phrases to practice</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-3"
              contentContainerClassName="gap-3 pr-6"
            >
              {lesson.phrases.map((phrase) => (
                <View
                  key={phrase.id}
                  className="rounded-2xl border border-border bg-surface px-4 py-3"
                  style={{ maxWidth: 220 }}
                >
                  <Text className="text-body-md text-text-primary">{phrase.text}</Text>
                  <Text className="mt-0.5 text-body-sm text-text-secondary">
                    {phrase.translation}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function ControlButton({
  icon,
  label,
  active,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <View className="items-center">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        className={`h-14 w-14 items-center justify-center rounded-full border ${
          active ? "border-lingo-deep-purple bg-[#F5F3FF]" : "border-border bg-white"
        }`}
      >
        <Ionicons
          name={icon}
          size={22}
          color={active ? colors.lingoDeepPurple : colors.textPrimary}
        />
      </TouchableOpacity>
      <Text className="mt-1.5 text-caption text-text-secondary">{label}</Text>
    </View>
  );
}
