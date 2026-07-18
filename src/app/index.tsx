import { useAuth, useUser } from "@clerk/expo";
import { Link, Redirect } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const swatches = [
  { label: "Lingo Purple", className: "bg-lingo-purple" },
  { label: "Lingo Deep Purple", className: "bg-lingo-deep-purple" },
  { label: "Lingo Blue", className: "bg-lingo-blue" },
  { label: "Lingo Green", className: "bg-lingo-green" },
  { label: "Success", className: "bg-success" },
  { label: "Warning", className: "bg-warning" },
  { label: "Streak", className: "bg-streak" },
  { label: "Error", className: "bg-error" },
  { label: "Info", className: "bg-info" },
];

export default function Index() {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const { user } = useUser();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="gap-6 p-6"
    >
      <Text className="text-h1 text-text-primary">Design System</Text>
      <Text className="text-body-md text-text-secondary">
        Lingo tokens wired up through NativeWind
      </Text>

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
      </View>

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

      <View className="gap-3">
        <Text className="text-h3 text-text-primary">Typography</Text>
        <Text className="text-h1 text-text-primary">H1 Page Title</Text>
        <Text className="text-h2 text-text-primary">H2 Section Title</Text>
        <Text className="text-h3 text-text-primary">H3 Card Title</Text>
        <Text className="text-h4 text-text-primary">H4 Subheading</Text>
        <Text className="text-body-lg text-text-primary">
          Body Large — important content
        </Text>
        <Text className="text-body-md text-text-primary">
          Body Medium — body text
        </Text>
        <Text className="text-body-sm text-text-secondary">
          Body Small — supporting text
        </Text>
        <Text className="text-caption text-text-secondary">
          CAPTION — LABELS, META TEXT
        </Text>
      </View>

      <View className="gap-3">
        <Text className="text-h3 text-text-primary">Colors</Text>
        <View className="flex-row flex-wrap gap-3">
          {swatches.map((swatch) => (
            <View key={swatch.label} className="w-24 gap-1">
              <View
                className={`h-16 rounded-2xl border border-border ${swatch.className}`}
              />
              <Text className="text-caption text-text-secondary">
                {swatch.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View className="gap-2 rounded-2xl border border-border bg-surface p-4">
        <Text className="text-h4 text-text-primary">Surface card</Text>
        <Text className="text-body-sm text-text-secondary">
          Uses the surface + border neutrals for cards and panels.
        </Text>
      </View>
    </ScrollView>
  );
}
