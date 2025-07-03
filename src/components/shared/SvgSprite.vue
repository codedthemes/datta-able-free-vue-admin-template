<script setup lang="ts">
/**
 * SvgSprite Component
 *
 * @component SvgSprite
 * @description Dynamically loads and renders an SVG icon from a sprite sheet.
 * @prop {string} name - The name of the SVG symbol to reference within the sprite.
 * @data {string | null} spritePath - Holds the path to the SVG sprite sheet.
 * @lifecycle onMounted - Loads the SVG sprite dynamically using `import.meta.env.BASE_URL`.
 *
 */

import { ref, onMounted } from 'vue'

const props = defineProps({
  name: String,
})

const spritePath = ref<string | null>(null)

onMounted(async () => {
  try {
    // Load the SVG sprite dynamically with an absolute path
    spritePath.value = (await import.meta.env.BASE_URL) + 'assets/svg/sprite.svg'
  } catch (error) {
    console.error('Error loading SVG sprite:', error)
  }
})
</script>

<template>
  <svg class="pc-icon">
    <use :xlink:href="`${spritePath}#${props.name}`"></use>
  </svg>
</template>
