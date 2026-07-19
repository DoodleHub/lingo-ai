import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProgressState {
  streakDays: number;
  xpToday: number;
  dailyGoalXp: number;
  completedPlanItemIds: string[];
  completedLessonIds: string[];
  hasHydrated: boolean;
  toggleTodayPlanItem: (id: string, xp: number) => void;
  toggleLessonCompleted: (lessonId: string) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      streakDays: 12,
      xpToday: 15,
      dailyGoalXp: 20,
      completedPlanItemIds: [],
      completedLessonIds: ["es-u3-l1", "es-u3-l2"],
      hasHydrated: false,
      toggleTodayPlanItem: (id, xp) => {
        const isCompleted = get().completedPlanItemIds.includes(id);
        set({
          completedPlanItemIds: isCompleted
            ? get().completedPlanItemIds.filter((itemId) => itemId !== id)
            : [...get().completedPlanItemIds, id],
          xpToday: Math.max(0, get().xpToday + (isCompleted ? -xp : xp)),
        });
      },
      toggleLessonCompleted: (lessonId) => {
        const isCompleted = get().completedLessonIds.includes(lessonId);
        set({
          completedLessonIds: isCompleted
            ? get().completedLessonIds.filter((id) => id !== lessonId)
            : [...get().completedLessonIds, lessonId],
        });
      },
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "progress-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        streakDays: state.streakDays,
        xpToday: state.xpToday,
        dailyGoalXp: state.dailyGoalXp,
        completedPlanItemIds: state.completedPlanItemIds,
        completedLessonIds: state.completedLessonIds,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
