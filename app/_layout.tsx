import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Bold.ttf"),
    "outfit-midium": require("./../assets/fonts/Outfit-Medium.ttf"),
    outregularfit: require("./../assets/fonts/Outfit-Regular.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
