"use client";

import {
  ThemeProviderProps as NextThemeProviderProps,
  ThemeProvider as NextThemesProvider,
} from "next-themes";

export function ThemeProvider(props: NextThemeProviderProps) {
  return <NextThemesProvider {...props} />;
}
