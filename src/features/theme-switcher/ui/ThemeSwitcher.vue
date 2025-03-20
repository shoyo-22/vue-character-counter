<script setup lang="ts">
import { useInjectedTheme } from '../model/useTheme';
import MoonIcon from './icons/MoonIcon.vue';
import SunIcon from './icons/SunIcon.vue';

const { theme, toggleTheme } = useInjectedTheme();
</script>

<template>
  <button @click="toggleTheme" type="button" class="bg-app-neutral-100 rounded-md p-2">
    <Transition
      mode="out-in"
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="scale-0"
      enter-to-class="scale-100"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="scale-100"
      leave-to-class="scale-0"
    >
      <MoonIcon v-if="theme === 'light'" key="moon" class="h-5 w-5" />
      <SunIcon v-else key="sun" class="h-5 w-5" />
    </Transition>
  </button>
</template>
