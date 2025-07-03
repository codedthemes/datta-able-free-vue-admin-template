<script setup lang="ts">
/**
 * ComponentContent
 *
 * @component ComponentContent
 * @description A reusable content display component with a reference link.
 *
 * @prop {string} content - The text content displayed in the component.
 * @prop {string} link - The URL for the reference link.
 */

// third party
import { BRow, BCol, BButton } from 'bootstrap-vue-next'

// Define Props with default values
const props = defineProps({
  content: String,
  link: String,
})
</script>

<template>
  <BRow>
    <BCol xxl="9" md="10" class="mb-4">
      <p class="text-muted">{{ props.content }}</p>
      <BButton
        variant="primary"
        size="sm"
        pill
        class="btn-light-primary"
        :href="props.link"
        target="_blank"
      >
        <i class="ti ti-external-link me-1"></i>
        Reference
      </BButton>
    </BCol>
  </BRow>
</template>
