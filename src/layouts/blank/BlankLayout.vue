<script setup lang="ts">
import { RouterView } from "vue-router";

// components
import LoaderWrapper from "../LoaderWrapper.vue";
</script>

<template>
  <LoaderWrapper />
  <RouterView />
</template>
