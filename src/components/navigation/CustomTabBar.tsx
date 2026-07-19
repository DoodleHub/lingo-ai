import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "expo-router/js-tabs";
import { useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { colors } from "@/theme";

const CIRCLE_SIZE = 46;
const ICON_SIZE = 22;

const TAB_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  home: "home",
  learn: "book",
  "ai-teacher": "hardware-chip",
  chat: "chatbubble",
  profile: "person",
};

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const indicatorX = useSharedValue(0);

  const handleContainerLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  useEffect(() => {
    if (!containerWidth) return;
    const tabWidth = containerWidth / state.routes.length;
    const target = tabWidth * state.index + tabWidth / 2 - CIRCLE_SIZE / 2;
    indicatorX.value = withTiming(target, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
    });
  }, [containerWidth, indicatorX, state.index, state.routes.length]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
  }));

  return (
    <View className="border-t border-border bg-white pb-6 pt-2">
      <View onLayout={handleContainerLayout} className="flex-row items-center">
        {containerWidth > 0 && (
          <Animated.View
            pointerEvents="none"
            style={[
              {
                position: "absolute",
                top: 0,
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
                borderRadius: CIRCLE_SIZE / 2,
              },
              indicatorStyle,
            ]}
            className="bg-lingo-deep-purple"
          />
        )}

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const label =
            typeof options.title === "string" ? options.title : route.name;
          const iconName = TAB_ICONS[route.name] ?? "ellipse";

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              className="flex-1 items-center justify-center"
            >
              <View
                style={{ height: CIRCLE_SIZE, width: CIRCLE_SIZE * 1.5 }}
                className={`items-center ${
                  isFocused ? "justify-start pt-3" : "justify-start"
                }`}
              >
                <Ionicons
                  name={
                    isFocused
                      ? iconName
                      : (`${iconName}-outline` as keyof typeof Ionicons.glyphMap)
                  }
                  size={ICON_SIZE}
                  color={isFocused ? "#FFFFFF" : colors.textSecondary}
                />
                <Text
                  className={`text-caption ${
                    isFocused ? "text-transparent" : "text-text-secondary"
                  }`}
                >
                  {label}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
