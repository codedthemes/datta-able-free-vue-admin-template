<script setup lang="ts">
/**
 * BorderStyleCard Component
 *
 * @component BorderStyleCard
 * @description A reusable card component with a customizable header.
 *
 * @prop {string} title - The title displayed in the card header.
 */

const props = defineProps({
  title: String,
})
</script>

<template>
  <h5>{{ props.title }}</h5>
  <hr />
  <slot />
</template>
