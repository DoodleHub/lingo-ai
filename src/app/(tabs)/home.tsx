import { useUser } from "@clerk/expo";
import { router } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePostHog } from "posthog-react-native";

import { ContinueLearningCard } from "@/components/home/ContinueLearningCard";
import { DailyGoalCard } from "@/components/home/DailyGoalCard";
import { HomeHeader } from "@/components/home/HomeHeader";
import { TodayPlanCard, type TodayPlanItem } from "@/components/home/TodayPlanCard";
import { getLessonsByUnit } from "@/data/lessons";
import { getLanguageByCode } from "@/data/languages";
import { getCurrentUnit } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export default function Home() {
  const { user } = useUser();
  const posthog = usePostHog();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const streakDays = useProgressStore((state) => state.streakDays);
  const xpToday = useProgressStore((state) => state.xpToday);
  const dailyGoalXp = useProgressStore((state) => state.dailyGoalXp);
  const completedPlanItemIds = useProgressStore((state) => state.completedPlanItemIds);
  const toggleTodayPlanItem = useProgressStore((state) => state.toggleTodayPlanItem);

  if (!selectedLanguage) return null;

  const language = getLanguageByCode(selectedLanguage);
  const currentUnit = getCurrentUnit(selectedLanguage);
  const currentLesson = currentUnit ? getLessonsByUnit(currentUnit.id)[0] : undefined;
  const cefrLevel = currentUnit
    ? CEFR_LEVELS[Math.min(Math.floor((currentUnit.order - 1) / 6), CEFR_LEVELS.length - 1)]
    : "A1";

  const todayPlan: TodayPlanItem[] = currentLesson
    ? [
        {
          id: `${currentLesson.id}-lesson`,
          type: "lesson",
          title: "Lesson",
          subtitle: currentLesson.title,
          xp: 10,
        },
        {
          id: `${currentLesson.id}-conversation`,
          type: "conversation",
          title: "AI Conversation",
          subtitle: `Practice ${currentLesson.aiTeacher.focusAreas[0] ?? "speaking"}`,
          xp: 10,
        },
        {
          id: `${currentLesson.id}-vocabulary`,
          type: "vocabulary",
          title: "New words",
          subtitle: `${currentLesson.vocabulary.length} words`,
          xp: 5,
        },
      ]
    : [];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-10"
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader
          greeting={`${language?.greeting ?? "Hello"}, ${user?.firstName ?? "there"}! 👋`}
          flagEmoji={language?.flag ?? "🌍"}
          streakDays={streakDays}
        />

        <DailyGoalCard xpToday={xpToday} dailyGoalXp={dailyGoalXp} />

        {language && currentUnit && (
          <ContinueLearningCard
            languageName={language.name}
            level={cefrLevel}
            unitOrder={currentUnit.order}
            onPressContinue={() => {
              posthog.capture('continue_learning_tapped', {
                language: selectedLanguage,
                unit_order: currentUnit.order,
                cefr_level: cefrLevel,
              });
              router.push("/learn");
            }}
          />
        )}

        <TodayPlanCard
          items={todayPlan}
          completedIds={completedPlanItemIds}
          onToggleItem={(item) => {
              const isCompleting = !completedPlanItemIds.includes(item.id);
              if (isCompleting) {
                posthog.capture('lesson_plan_item_completed', {
                  item_type: item.type,
                  item_title: item.title,
                  xp_earned: item.xp,
                  language: selectedLanguage,
                });
              }
              toggleTodayPlanItem(item.id, item.xp);
            }}
          onPressViewAll={() => router.push("/learn")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
