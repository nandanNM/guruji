import React, { createContext, useContext } from "react";
import { useModeToggle } from "@/hooks/useModeToggle";
import { ColorSchemeName } from "react-native";

interface ThemeContextType {
  colorScheme: ColorSchemeName;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  colorScheme: "light",
  isDark: false,
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentMode, isDark } = useModeToggle();

  return (
    <ThemeContext.Provider value={{ colorScheme: currentMode, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  }
  return context;
}

