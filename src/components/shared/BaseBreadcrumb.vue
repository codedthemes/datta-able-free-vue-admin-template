<script setup lang="ts">
/**
 * BaseBreadcrumb Component
 *
 * @component BaseBreadcrumb
 * @description A reusable breadcrumb component using Bootstrap Vue.
 *
 * @prop {string} title - The title displayed at the top of the breadcrumb.
 * @prop {BreadcrumbItem[]} breadcrumbs - Array of breadcrumb items to display in the breadcrumb trail.
 *
 * @computed {BreadcrumbItem[]} computedBreadcrumbs - Ensures the Home link is always included before rendering the breadcrumb list.
 */

import { computed } from 'vue'

// third party
import { BBreadcrumb, BRow, BCol } from 'bootstrap-vue-next'
import { type BreadcrumbItem } from 'bootstrap-vue-next'

// Define Props
const props = defineProps<{
  title: string
  breadcrumbs: BreadcrumbItem[]
}>()

// Ensure Home link is always present
const computedBreadcrumbs = computed<BreadcrumbItem[]>(() => [
  { text: 'Home', to: '/' },
  ...props.breadcrumbs,
])
</script>

<template>
  <!-- [ breadcrumb ] start -->
  <div class="page-header">
    <div class="page-block">
      <BRow>
        <BCol md="12">
          <div class="page-header-title">
            <h5 class="mb-0">{{ title }}</h5>
          </div>
        </BCol>
        <BCol md="12">
          <BBreadcrumb :items="computedBreadcrumbs" />
        </BCol>
      </BRow>
    </div>
  </div>
  <!-- [ breadcrumb ] end -->
</template>

<style lang="scss">
.page-header {
  nav {
    .breadcrumb {
      margin-bottom: 0;
    }
    .breadcrumb-item {
      &.active {
        color: inherit;
      }
    }
  }
}
</style>
