import { useEffect, useRef, useState } from "react";
import { Appearance, ColorSchemeName } from "react-native";
// import { storage, StorageKeys } from "@/utils/storage";

type Mode = "light" | "dark" | "system";

interface UseModeToggleReturn {
  isDark: boolean;
  mode: Mode;
  setMode: (mode: Mode) => void;
  currentMode: ColorSchemeName;
  toggleMode: () => void;
}

export function useModeToggle(): UseModeToggleReturn {
  // Get initial system color scheme ONCE (only for initial state)
  const initialSystemScheme = Appearance.getColorScheme() ?? "light";

  // Load saved theme mode from storage, default to "system"
  // const savedMode = storage.getString(StorageKeys.THEME_MODE) as Mode | undefined;
  // const initialMode: Mode = savedMode || "system";
  const initialMode: Mode = "system";

  // Maintain our own theme state - DO NOT rely on useColorScheme() hook
  const [mode, setModeState] = useState<Mode>(initialMode);
  const modeRef = useRef<Mode>(initialMode);

  // Calculate initial resolved color scheme
  const getInitialResolvedScheme = (): ColorSchemeName => {
    if (initialMode === "system") {
      return initialSystemScheme;
    }
    return initialMode;
  };

  // Track the actual resolved color scheme - this is our source of truth
  // This state updates IMMEDIATELY when we change mode - no waiting for useColorScheme()
  const [resolvedColorScheme, setResolvedColorScheme] =
    useState<ColorSchemeName>(getInitialResolvedScheme());

  // Update ref when mode changes
  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  // Listen to system theme changes ONLY when mode is "system"
  useEffect(() => {
    if (mode !== "system") {
      return; // Don't listen if we're manually controlling the theme
    }

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      // Only update if we're still in system mode (check via ref to avoid stale closure)
      if (modeRef.current === "system") {
        setResolvedColorScheme(colorScheme ?? "light");
      }
    });

    // Set initial system scheme
    const currentSystemScheme = Appearance.getColorScheme() ?? "light";
    setResolvedColorScheme(currentSystemScheme);
    Appearance.setColorScheme(null); // Reset to system

    return () => {
      subscription.remove();
    };
  }, [mode]);

  // Initialize theme on mount
  useEffect(() => {
    if (initialMode !== "system") {
      Appearance.setColorScheme(initialMode);
      setResolvedColorScheme(initialMode);
    } else {
      Appearance.setColorScheme(null);
      setResolvedColorScheme(initialSystemScheme);
    }
  }, []);

  const isDark = resolvedColorScheme === "dark";

  const toggleMode = () => {
    switch (mode) {
      case "light":
        setMode("dark");
        break;
      case "dark":
        setMode("system");
        break;
      case "system":
        setMode("light");
        break;
    }
  };

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    // Persist to MMKV
    // storage.set(StorageKeys.THEME_MODE, newMode);

    // Immediately update our own state - don't wait for useColorScheme()
    if (newMode === "system") {
      Appearance.setColorScheme(null); // Reset to system default
      const currentSystemScheme = Appearance.getColorScheme() ?? "light";
      setResolvedColorScheme(currentSystemScheme);
    } else {
      Appearance.setColorScheme(newMode);
      // Immediately update our state - this is the key fix!
      setResolvedColorScheme(newMode);
    }
  };

  return {
    isDark,
    mode,
    setMode,
    currentMode: resolvedColorScheme,
    toggleMode,
  };
}
