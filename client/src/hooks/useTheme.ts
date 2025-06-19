import { useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEYS } from '@/constants';

type Theme = 'dark' | 'light';

export function useTheme(
  defaultTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light',
  storageKey: string = LOCAL_STORAGE_KEYS.themeKey
) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(storageKey, newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}
