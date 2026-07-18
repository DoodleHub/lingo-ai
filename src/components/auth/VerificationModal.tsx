import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "@/theme";

const CODE_LENGTH = 6;

interface VerificationModalProps {
  visible: boolean;
  email?: string;
  onClose: () => void;
  onComplete: (code: string) => void;
}

export function VerificationModal({
  visible,
  email,
  onClose,
  onComplete,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const [wasVisible, setWasVisible] = useState(visible);
  const inputRef = useRef<TextInput>(null);

  if (visible !== wasVisible) {
    setWasVisible(visible);
    if (visible) {
      setCode("");
    }
  }

  useEffect(() => {
    if (!visible) return;

    const focusTimeout = setTimeout(() => inputRef.current?.focus(), 300);
    return () => clearTimeout(focusTimeout);
  }, [visible]);

  const handleChangeCode = (text: string) => {
    const digitsOnly = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digitsOnly);

    if (digitsOnly.length === CODE_LENGTH) {
      onComplete(digitsOnly);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <Pressable className="flex-1 bg-black/40" onPress={onClose} />

        <View className="rounded-t-3xl bg-white px-6 pb-8 pt-3">
          <View className="items-center pb-4">
            <View className="h-1 w-10 rounded-full bg-border" />
          </View>

          <TouchableOpacity
            onPress={onClose}
            hitSlop={8}
            className="absolute right-5 top-5"
          >
            <Ionicons name="close" size={22} color={colors.textSecondary} />
          </TouchableOpacity>

          <Text className="text-h3 text-text-primary">Check your email</Text>
          <Text className="mt-2 text-body-md text-text-secondary">
            We sent a 6-digit code to {email?.trim() ? email : "your email"}.
            Enter it below to continue.
          </Text>

          <Pressable
            className="mt-6 flex-row justify-between"
            onPress={() => inputRef.current?.focus()}
          >
            {Array.from({ length: CODE_LENGTH }).map((_, index) => {
              const digit = code[index];
              const isNextSlot = index === code.length;

              return (
                <View
                  key={index}
                  className={`h-14 w-12 items-center justify-center rounded-2xl border ${
                    isNextSlot ? "border-lingo-deep-purple" : "border-border"
                  }`}
                >
                  <Text className="text-h2 text-text-primary">{digit ?? ""}</Text>
                </View>
              );
            })}
          </Pressable>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChangeCode}
            keyboardType="number-pad"
            maxLength={CODE_LENGTH}
            style={{ position: "absolute", opacity: 0, height: 0, width: 0 }}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
