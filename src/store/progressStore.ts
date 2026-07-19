import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProgressState {
  streakDays: number;
  xpToday: number;
  dailyGoalXp: number;
  completedPlanItemIds: string[];
  hasHydrated: boolean;
  toggleTodayPlanItem: (id: string, xp: number) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      streakDays: 12,
      xpToday: 15,
      dailyGoalXp: 20,
      completedPlanItemIds: [],
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
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
