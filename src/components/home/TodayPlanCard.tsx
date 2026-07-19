import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export type TodayPlanItemType = "lesson" | "conversation" | "vocabulary";

export interface TodayPlanItem {
  id: string;
  type: TodayPlanItemType;
  title: string;
  subtitle: string;
  xp: number;
}

const ITEM_ICON: Record<TodayPlanItemType, keyof typeof Ionicons.glyphMap> = {
  lesson: "book",
  conversation: "headset",
  vocabulary: "chatbubbles",
};

const ITEM_BG: Record<TodayPlanItemType, string> = {
  lesson: "bg-lingo-deep-purple",
  conversation: "bg-lingo-deep-purple",
  vocabulary: "bg-error",
};

type Props = {
  items: TodayPlanItem[];
  completedIds: string[];
  onToggleItem: (item: TodayPlanItem) => void;
  onPressViewAll: () => void;
};

export function TodayPlanCard({ items, completedIds, onToggleItem, onPressViewAll }: Props) {
  return (
    <View className="mx-6 mt-6">
      <View className="flex-row items-center justify-between">
        <Text className="text-h3 text-text-primary">Today&apos;s plan</Text>
        <TouchableOpacity hitSlop={8} onPress={onPressViewAll}>
          <Text className="text-body-md text-lingo-deep-purple">View all</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-3">
        {items.map((item) => {
          const isCompleted = completedIds.includes(item.id);

          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => onToggleItem(item)}
              className="flex-row items-center py-2.5"
            >
              <View
                className={`h-11 w-11 items-center justify-center rounded-xl ${ITEM_BG[item.type]}`}
              >
                <Ionicons name={ITEM_ICON[item.type]} size={20} color="#FFFFFF" />
              </View>

              <View className="ml-3 flex-1">
                <Text className="text-h4 text-text-primary">{item.title}</Text>
                <Text className="text-body-sm text-text-secondary">{item.subtitle}</Text>
              </View>

              {isCompleted ? (
                <View className="h-7 w-7 items-center justify-center rounded-full bg-lingo-deep-purple">
                  <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                </View>
              ) : (
                <View className="h-7 w-7 rounded-full border-2 border-border" />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
