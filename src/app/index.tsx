import { useAuth, useUser } from "@clerk/expo";
import { Link, Redirect } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLanguageByCode } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";

export default function Index() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const { user } = useUser();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);
  const clearSelectedLanguage = useLanguageStore(
    (state) => state.clearSelectedLanguage,
  );

  if (!isLoaded || !hasHydrated) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;
  if (!selectedLanguage) return <Redirect href="/language-selection" />;

  const language = getLanguageByCode(selectedLanguage);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-6 p-6"
      >
        <View className="gap-2 rounded-2xl border border-border bg-surface p-4">
          <Text className="text-h4 text-text-primary">
            Signed in as {user?.primaryEmailAddress?.emailAddress}
          </Text>
          <TouchableOpacity
            onPress={() => signOut()}
            className="mt-2 items-center rounded-2xl bg-lingo-deep-purple px-6 py-3"
            activeOpacity={0.85}
          >
            <Text className="font-['Poppins-SemiBold'] text-[16px] text-white">
              Sign out
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => clearSelectedLanguage()}
            className="mt-2 items-center rounded-2xl bg-error px-6 py-3"
            activeOpacity={0.85}
          >
            <Text className="font-['Poppins-SemiBold'] text-[16px] text-white">
              Clear language selection (dev)
            </Text>
          </TouchableOpacity>
        </View>

        {language ? (
          <View className="flex-row items-center gap-3 rounded-2xl border border-border bg-surface p-4">
            <View className="h-11 w-11 items-center justify-center rounded-full bg-white">
              <Text className="text-[20px]">{language.flag}</Text>
            </View>
            <View>
              <Text className="text-caption text-text-secondary">
                Learning
              </Text>
              <Text className="text-h4 text-text-primary">
                {language.name}
              </Text>
            </View>
          </View>
        ) : null}

        <Link href="/onboarding" asChild>
          <TouchableOpacity
            className="items-center rounded-2xl bg-lingo-deep-purple px-6 py-4"
            activeOpacity={0.85}
          >
            <Text className="font-['Poppins-SemiBold'] text-[16px] text-white">
              View onboarding screen
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/language-selection" asChild>
          <TouchableOpacity
            className="items-center rounded-2xl bg-lingo-deep-purple px-6 py-4"
            activeOpacity={0.85}
          >
            <Text className="font-['Poppins-SemiBold'] text-[16px] text-white">
              Choose a language
            </Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
