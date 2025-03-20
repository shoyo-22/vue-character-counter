<script setup lang="ts">
import { AppNavbar } from '@/widgets/navbar';
import { useTheme } from '@/features/theme-switcher';

const { initTheme, provideTheme } = useTheme();

initTheme();
provideTheme();
</script>

<template>
  <AppNavbar />
  <main>Character Counter App</main>
</template>
