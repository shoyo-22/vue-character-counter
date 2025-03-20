import type { Ref } from 'vue';

export type Theme = 'light' | 'dark';

export type ThemeContext = {
  theme: Ref<Theme>;
  toggleTheme: () => void;
};
