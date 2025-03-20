<script setup lang="ts">
import { AppNavbar } from '@/widgets/navbar';
import { useTheme } from '@/features/theme-switcher';
import { BaseContainer } from '@/shared/ui';

const { initTheme, provideTheme } = useTheme();

initTheme();
provideTheme();
</script>

<template>
  <AppNavbar />
  <main>
    <BaseContainer>
      <h2
        class="text-app-neutral-900 dark:text-app-neutral-100 my-12 text-center leading-none font-bold tracking-[-1px] transition-all duration-500 max-[990px]:my-10 max-sm:text-[40px] sm:text-[64px]"
      >
        Analyze your text in real-time.
      </h2>
    </BaseContainer>
  </main>
</template>
