import { Tabs } from "expo-router";
import React from "react";
import { ViewStyle } from "react-native";

export function StyledTabs({
  tabBarStyle,
  headerStyle,
  screenOptions,
  ...props
}: React.ComponentProps<typeof Tabs> & {
  tabBarStyle?: ViewStyle;
  headerStyle?: ViewStyle;
}) {
  return (
    <Tabs
      {...props}
      screenOptions={args => {
        const baseOptions =
          typeof screenOptions === "function"
            ? screenOptions(args)
            : screenOptions;
        return {
          ...baseOptions,
          tabBarStyle,
          headerStyle,
        };
      }}
    />
  );
}
