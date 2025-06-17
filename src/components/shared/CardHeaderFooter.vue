<script setup lang="ts">
/**
 * CardHeaderFooter Component
 *
 * @component CardHeaderFooter
 * @description A reusable card component that includes customizable header and footer sections using Bootstrap Vue.
 * The header displays a title and an optional caption, while default slot content is rendered in the body.
 * A named `footer` slot allows for flexible footer customization.
 * @prop {string} title - The title displayed in the card header.
 * @prop {string} [caption] - An optional caption displayed below the title in the card header.
 */

// third party
import { BCard } from 'bootstrap-vue-next'

const props = defineProps({
  title: String,
  caption: String,
})
</script>

<template>
  <BCard>
    <template #header>
      <h5>{{ props.title }}</h5>
      <p class="f-12" v-if="props.caption" v-html="props.caption"></p>
    </template>
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </BCard>
</template>
