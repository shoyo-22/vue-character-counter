<script setup lang="ts">
defineSlots<{
  default: (props: unknown) => unknown;
}>();
</script>

<template>
  <div
    class="w-full mx-auto max-w-[990px] max-sm:px-4 sm:max-[990px]:px-8 transition-all duration-500"
  >
    <slot name="default"></slot>
  </div>
</template>
