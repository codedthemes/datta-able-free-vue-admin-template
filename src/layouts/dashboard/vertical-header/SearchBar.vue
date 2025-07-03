<script setup lang="ts">
// third party
import { BDropdown } from 'bootstrap-vue-next'
</script>

<template>
  <li>
    <BDropdown
      variant="link"
      wrapper-class="dropdown pc-h-item"
      toggle-class="pc-head-link m-0"
      menu-class="pc-h-dropdown drp-search"
      auto-close="outside"
      no-caret
      aria-label="Search"
    >
      <template #button-content>
        <i class="ph ph-magnifying-glass"></i><span class="visually-hidden">Search</span>
      </template>
      <!-- todo: Use <form> instead of <BDropdownForm> due to styling issues -->
      <form class="px-3 py-2">
        <input
          type="search"
          class="form-control border-0 shadow-none"
          placeholder="Search here..."
        />
      </form>
    </BDropdown>
  </li>
</template>
