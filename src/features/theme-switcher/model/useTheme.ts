import { ref, provide, inject, readonly } from 'vue';
import { THEME_STORAGE_KEY, DEFAULT_THEME } from '../lib/config';
import type { Theme, ThemeContext } from '../lib/types';

const CONTEXT_KEY = Symbol('theme');

export const useTheme = () => {
  const theme = ref<Theme>(DEFAULT_THEME);

  const initTheme = () => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isValidTheme = storedTheme === 'light' || storedTheme === 'dark';
    theme.value = isValidTheme ? storedTheme : systemDark ? 'dark' : 'light';

    document.documentElement.classList.toggle('dark', theme.value === 'dark');
  };

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme.value === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme.value);
  };

  const provideTheme = () => {
    provide<ThemeContext>(CONTEXT_KEY, {
      theme: readonly(theme),
      toggleTheme,
    });
  };

  return {
    theme: readonly(theme),
    toggleTheme,
    initTheme,
    provideTheme,
  };
};

export const useInjectedTheme = () => {
  const context = inject<ThemeContext>(CONTEXT_KEY);
  if (!context) throw new Error('useInjectedTheme must be used within a provider');
  return context;
};
