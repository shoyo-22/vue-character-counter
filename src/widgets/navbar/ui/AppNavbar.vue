<script setup lang="ts">
import { BaseContainer } from '@/shared/ui';
import { ThemeSwitcher } from '@/features/theme-switcher';
</script>

<template>
  <header>
    <BaseContainer class="flex py-4">
      <div class="flex flex-1">
        <span
          class="dark:text-app-neutral-200 text-app-neutral-900 leading-[1.3] font-semibold transition-colors duration-300 max-sm:text-lg max-sm:tracking-[-0.75px] sm:text-2xl sm:tracking-[-1px]"
        >
          Character Counter
        </span>
      </div>
      <ThemeSwitcher />
    </BaseContainer>
  </header>
</template>
