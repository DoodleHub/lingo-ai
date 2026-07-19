import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { usePostHog } from "posthog-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LessonListItem, type LessonStatus } from "@/components/learn/LessonListItem";
import { UnitHero } from "@/components/learn/UnitHero";
import { getLessonsByUnit } from "@/data/lessons";
import { getCurrentUnit } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";
import { colors } from "@/theme";

type Tab = "lessons" | "practice";

export default function Learn() {
  const posthog = usePostHog();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);

  const [activeTab, setActiveTab] = useState<Tab>("lessons");
  const [bookmarked, setBookmarked] = useState(false);

  if (!selectedLanguage) return null;

  const currentUnit = getCurrentUnit(selectedLanguage);
  if (!currentUnit) return null;

  const lessons = getLessonsByUnit(currentUnit.id);
  const completedCount = lessons.filter((lesson) =>
    completedLessonIds.includes(lesson.id),
  ).length;
  const firstIncompleteLesson = lessons.find(
    (lesson) => !completedLessonIds.includes(lesson.id),
  );

  const getStatus = (lessonId: string): LessonStatus => {
    if (completedLessonIds.includes(lessonId)) return "completed";
    if (firstIncompleteLesson?.id === lessonId) return "in-progress";
    return "locked";
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/home");
    }
  };

  const handleOpenLesson = (lessonId: string, status: LessonStatus) => {
    posthog.capture("lesson_opened", {
      lesson_id: lessonId,
      language: selectedLanguage,
      status,
    });
    router.push(`/lesson/${lessonId}/audio`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <UnitHero
        title={currentUnit.title}
        unitOrder={currentUnit.order}
        completedCount={completedCount}
        totalCount={lessons.length}
        bookmarked={bookmarked}
        onBack={handleBack}
        onToggleBookmark={() => setBookmarked((prev) => !prev)}
      />

      <View className="-mt-6 flex-1 rounded-t-3xl bg-white">
        <View className="flex-row px-6 pt-5">
          <TouchableOpacity
            onPress={() => setActiveTab("lessons")}
            className={`mr-6 pb-3 ${
              activeTab === "lessons" ? "border-b-2 border-lingo-deep-purple" : ""
            }`}
          >
            <Text
              className={`text-h4 ${
                activeTab === "lessons" ? "text-lingo-deep-purple" : "text-text-secondary"
              }`}
            >
              Lessons
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("practice")}
            className={`pb-3 ${
              activeTab === "practice" ? "border-b-2 border-lingo-deep-purple" : ""
            }`}
          >
            <Text
              className={`text-h4 ${
                activeTab === "practice" ? "text-lingo-deep-purple" : "text-text-secondary"
              }`}
            >
              Practice
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "lessons" ? (
          <ScrollView
            className="flex-1 px-6"
            contentContainerClassName="pt-5 pb-10"
            showsVerticalScrollIndicator={false}
          >
            {lessons.map((lesson) => {
              const status = getStatus(lesson.id);
              return (
                <LessonListItem
                  key={lesson.id}
                  lesson={lesson}
                  status={status}
                  onPress={() => handleOpenLesson(lesson.id, status)}
                />
              );
            })}
          </ScrollView>
        ) : (
          <View className="flex-1 items-center justify-center gap-3 px-8 pb-10">
            <View className="h-16 w-16 items-center justify-center rounded-full bg-surface">
              <Ionicons name="barbell-outline" size={28} color={colors.lingoDeepPurple} />
            </View>
            <Text className="text-h3 text-text-primary">Practice mode</Text>
            <Text className="text-center text-body-md text-text-secondary">
              Review past lessons and vocabulary here soon.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
