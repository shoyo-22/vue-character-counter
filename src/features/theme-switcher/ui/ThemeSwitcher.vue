<script setup lang="ts">
import { useInjectedTheme } from '../model/useTheme';
import MoonIcon from './icons/MoonIcon.vue';
import SunIcon from './icons/SunIcon.vue';

const { theme, toggleTheme } = useInjectedTheme();
</script>

<template>
  <button
    @click="toggleTheme"
    type="button"
    class="bg-app-neutral-100 dark:bg-app-neutral-700 grid cursor-pointer place-items-center rounded-md max-sm:size-8 sm:size-[44px]"
  >
    <Transition
      mode="out-in"
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="scale-0"
      enter-to-class="scale-100"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="scale-100"
      leave-to-class="scale-0"
    >
      <MoonIcon v-if="theme === 'light'" key="moon" class="max-sm:size sm:size-[22px]" />
      <SunIcon v-else key="sun" class="max-sm:size sm:size-[22px]" />
    </Transition>
  </button>
</template>
