<script setup lang="ts">
import { RouterView } from 'vue-router'

document.body.setAttribute('data-pc-theme', 'light')
document.body.setAttribute('data-pc-direction', 'ltr')
document.body.setAttribute('data-pc-preset', 'preset-1')
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
