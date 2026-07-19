import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { usePostHog } from "posthog-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLessonById } from "@/data/lessons";
import { useProgressStore } from "@/store/progressStore";
import { colors } from "@/theme";

export default function LessonDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const posthog = usePostHog();
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);
  const toggleLessonCompleted = useProgressStore((state) => state.toggleLessonCompleted);

  const lesson = getLessonById(id);
  if (!lesson) return null;

  const isCompleted = completedLessonIds.includes(lesson.id);

  const handleToggleComplete = () => {
    toggleLessonCompleted(lesson.id);
    if (!isCompleted) {
      posthog.capture("lesson_completed", { lesson_id: lesson.id });
    }
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
        <Text className="text-h3 text-text-primary">Lesson {lesson.order}</Text>
        <View className="h-10 w-10" />
      </View>

      <ScrollView
        className="flex-1 px-6"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <Text className="mt-2 text-h1 text-text-primary">{lesson.title}</Text>
        <Text className="mt-2 text-body-lg text-text-secondary">
          {lesson.goal.summary}
        </Text>

        <View className="mt-5 gap-2">
          {lesson.goal.objectives.map((objective) => (
            <View key={objective} className="flex-row items-center gap-2">
              <Ionicons name="checkmark-circle" size={18} color={colors.lingoGreen} />
              <Text className="flex-1 text-body-md text-text-primary">{objective}</Text>
            </View>
          ))}
        </View>

        <Text className="mt-8 text-h3 text-text-primary">Vocabulary</Text>
        <View className="mt-3 gap-3">
          {lesson.vocabulary.map((word) => (
            <View
              key={word.id}
              className="rounded-2xl border border-border bg-white px-4 py-3"
            >
              <Text className="text-h4 text-text-primary">{word.term}</Text>
              <Text className="mt-0.5 text-body-sm text-text-secondary">
                {word.translation}
              </Text>
              <Text className="mt-2 text-body-sm text-text-primary">{word.example}</Text>
              <Text className="text-body-sm text-text-secondary">
                {word.exampleTranslation}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleToggleComplete}
          className={`mt-8 h-14 flex-row items-center justify-center rounded-full px-6 ${
            isCompleted ? "bg-surface" : "bg-lingo-deep-purple"
          }`}
        >
          <Ionicons
            name={isCompleted ? "checkmark-circle" : "checkmark-circle-outline"}
            size={20}
            color={isCompleted ? colors.lingoDeepPurple : "#FFFFFF"}
          />
          <Text
            className={`ml-2 font-['Poppins-SemiBold'] text-[17px] ${
              isCompleted ? "text-lingo-deep-purple" : "text-white"
            }`}
          >
            {isCompleted ? "Completed" : "Mark as complete"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
