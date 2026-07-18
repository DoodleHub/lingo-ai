import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";
import { colors } from "@/theme";
import type { LanguageCode } from "@/types/learning";

export default function LanguageSelection() {
  const { width } = useWindowDimensions();
  const [query, setQuery] = useState("");
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const setSelectedLanguage = useLanguageStore(
    (state) => state.setSelectedLanguage,
  );
  const [selectedCode, setSelectedCode] = useState<LanguageCode>(
    selectedLanguage ?? languages[0].code,
  );

  const filteredLanguages = languages.filter((language) =>
    language.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  const handleConfirm = () => {
    setSelectedLanguage(selectedCode);
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
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
        <Text className="text-h3 text-text-primary">Choose a language</Text>
        <View className="h-10 w-10" />
      </View>

      <ScrollView
        className="flex-1 px-6"
        contentContainerClassName="pb-8"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-4 flex-row items-center gap-2 rounded-full bg-surface px-4 py-3">
          <Ionicons name="search" size={18} color={colors.textSecondary} />
          <TextInput
            className="flex-1 py-0.5 text-body-lg text-text-primary"
            placeholder="Search languages"
            placeholderTextColor={colors.textSecondary}
            underlineColorAndroid="transparent"
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <Text className="mt-6 font-['Poppins-SemiBold'] text-[15px] text-text-primary">
          Popular
        </Text>

        <View className="mt-3 gap-3">
          {filteredLanguages.map((language) => {
            const isSelected = language.code === selectedCode;

            return (
              <TouchableOpacity
                key={language.code}
                activeOpacity={0.85}
                onPress={() => setSelectedCode(language.code)}
                className={`flex-row items-center rounded-2xl px-4 py-3 ${
                  isSelected
                    ? "border-2 border-lingo-deep-purple bg-[#F5F3FF]"
                    : "border border-border bg-white"
                }`}
              >
                <View className="h-11 w-11 items-center justify-center rounded-full bg-surface">
                  <Text className="text-[20px]">{language.flag}</Text>
                </View>

                <View className="ml-3 flex-1">
                  <Text className="text-h4 text-text-primary">
                    {language.name}
                  </Text>
                  <Text className="text-body-sm text-text-secondary">
                    {language.learners}
                  </Text>
                </View>

                {isSelected ? (
                  <View className="h-6 w-6 items-center justify-center rounded-full bg-lingo-deep-purple">
                    <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                  </View>
                ) : (
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.textSecondary}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleConfirm}
          className="mt-6 h-14 flex-row items-center justify-center rounded-full bg-lingo-deep-purple px-6"
        >
          <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
          <Text className="ml-2 font-['Poppins-SemiBold'] text-[17px] text-white">
            Confirm selection
          </Text>
        </TouchableOpacity>

        <View className="mt-8 overflow-hidden rounded-3xl">
          <Image
            source={images.earth}
            style={{ width: "100%", height: width * 0.55 }}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
