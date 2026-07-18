import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

import { colors } from "@/theme";

type AuthTextFieldProps = Pick<
  TextInputProps,
  "value" | "onChangeText" | "placeholder" | "keyboardType" | "autoCapitalize" | "textContentType"
> & {
  label: string;
  isPassword?: boolean;
};

export function AuthTextField({
  label,
  isPassword = false,
  ...inputProps
}: AuthTextFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className="rounded-2xl border border-border px-4 py-2.5">
      <Text className="text-caption text-text-secondary">{label}</Text>
      <View className="flex-row items-center">
        <TextInput
          className="flex-1 py-0.5 text-body-lg text-text-primary"
          placeholderTextColor={colors.textSecondary}
          underlineColorAndroid="transparent"
          secureTextEntry={isPassword && !isPasswordVisible}
          {...inputProps}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((visible) => !visible)}
            hitSlop={8}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
