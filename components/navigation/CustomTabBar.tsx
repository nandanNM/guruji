import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColor } from "@/hooks/useColor";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const [tabBarWidth, setTabBarWidth] = useState(0);
  const insets = useSafeAreaInsets();

  // Theme
  const backgroundColor = useColor("background");
  const borderColor = useColor("border");
  const primaryColor = useColor("primary");
  const textColorMuted = useColor("textMuted");

  // Animation setup (EXACT MATCH)
  const tabWidth = tabBarWidth / state.routes.length;
  const translateX = useSharedValue(state.index * tabWidth);

  const indicatorPadding = 20; // EXACT SAME as original
  const indicatorWidth =
    tabWidth > 2 * indicatorPadding
      ? tabWidth - 2 * indicatorPadding
      : tabWidth;

  useEffect(() => {
    translateX.value = withTiming(state.index * tabWidth + indicatorPadding, {
      duration: 250,
    });
  }, [state.index, tabWidth]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: indicatorWidth,
  }));

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          borderTopColor: borderColor,
          paddingBottom: insets.bottom,
        },
      ]}
      onLayout={(e: LayoutChangeEvent) =>
        setTabBarWidth(e.nativeEvent.layout.width)
      }>
      {/* Animated Indicator */}
      {tabBarWidth > 0 && (
        <Animated.View
          style={[
            styles.indicator,
            { backgroundColor: primaryColor },
            indicatorStyle,
          ]}
        />
      )}

      {/* Tab Items */}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const icon = options.tabBarIcon
          ? options.tabBarIcon({
              focused: isFocused,
              color: isFocused ? primaryColor : textColorMuted,
              size: 24,
            })
          : null;

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
          <Pressable key={route.key} onPress={onPress} style={styles.tabItem}>
            {icon}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
  },
  indicator: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    zIndex: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
});
