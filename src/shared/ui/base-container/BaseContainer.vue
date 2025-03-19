<script setup lang="ts">
defineSlots<{
  default: (props: unknown) => unknown;
}>();
</script>

<template>
  <div
    class="mx-auto w-full max-w-[990px] transition-all duration-500 max-sm:px-4 sm:max-[990px]:px-8"
  >
    <slot name="default"></slot>
  </div>
</template>
