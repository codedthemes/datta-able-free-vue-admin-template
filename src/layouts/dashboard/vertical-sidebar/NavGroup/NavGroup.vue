<script setup lang="ts">
const props = defineProps({ item: Object })
</script>

<template>
  <li class="pc-item pc-caption">
    <label>{{ props.item?.header }}</label>
  </li>
</template>
