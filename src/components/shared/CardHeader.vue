<script setup lang="ts">
/**
 * CardHeader Component
 *
 * @component CardHeader
 * @description A reusable card component with a customizable header, using Bootstrap Vue.
 *
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
  </BCard>
</template>
