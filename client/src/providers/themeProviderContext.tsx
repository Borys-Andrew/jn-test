import { ReactNode, createContext, useContext } from 'react';

import { LOCAL_STORAGE_KEYS } from '@/constants';
import { useTheme } from '@/hooks';

type Theme = 'dark' | 'light';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
  toggleTheme: () => null,
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme,
  storageKey = LOCAL_STORAGE_KEYS.themeKey,
  ...props
}: ThemeProviderProps) {
  const { theme, toggleTheme } = useTheme(defaultTheme, storageKey);

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context;
}
