import { Ionicons } from "@expo/vector-icons";
import { Image, type ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

import { images } from "@/constants/images";
import { colors } from "@/theme";
import type { Lesson } from "@/types/learning";

export type LessonStatus = "completed" | "in-progress" | "locked";

type Props = {
  lesson: Lesson;
  status: LessonStatus;
  onPress: () => void;
};

// Local mascot-style illustrations that match the lesson topic where we have
// one; otherwise fall back to a deterministic Picsum placeholder so every
// lesson still gets a respective image.
function getLessonIcon(lesson: Lesson): ImageSourcePropType {
  if (/café|coffee/i.test(lesson.title)) return images.palace;
  if (/travel|direction/i.test(lesson.title)) return images.earth;
  if (/shopping/i.test(lesson.title)) return images.treasure;
  return { uri: `https://picsum.photos/seed/${lesson.id}/120/120` };
}

export function LessonListItem({ lesson, status, onPress }: Props) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in-progress";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`mb-3 flex-row items-center justify-between rounded-2xl border px-4 py-4 ${
        isInProgress
          ? "border-2 border-lingo-deep-purple bg-[#F5F3FF]"
          : "border-border bg-white"
      }`}
    >
      <View className="flex-1 pr-3">
        <Text
          className={`text-body-sm ${
            isInProgress ? "text-lingo-deep-purple" : "text-text-secondary"
          }`}
        >
          Lesson {lesson.order}
        </Text>
        <Text className="mt-0.5 text-h4 text-text-primary">{lesson.title}</Text>

        {isInProgress && (
          <Text className="mt-0.5 text-body-sm text-lingo-deep-purple">
            In progress
          </Text>
        )}
        {status === "locked" && (
          <Text className="mt-0.5 text-caption text-text-secondary">
            {lesson.vocabulary.length} new words
          </Text>
        )}
      </View>

      {isCompleted && (
        <View className="h-7 w-7 items-center justify-center rounded-full bg-lingo-green">
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        </View>
      )}
      {isInProgress && (
        <Image
          source={getLessonIcon(lesson)}
          style={{ width: 40, height: 40, borderRadius: 10 }}
          resizeMode="contain"
        />
      )}
      {status === "locked" && (
        <Ionicons name="lock-closed" size={18} color={colors.textSecondary} />
      )}
    </TouchableOpacity>
  );
}
