import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
