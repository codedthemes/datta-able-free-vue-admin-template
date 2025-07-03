<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="m-header">
    <RouterLink to="/" class="b-brand text-primary" aria-label="logo">
      <!-- ========   Change your logo from here   ============ -->
      <img src="@/assets/images/logo-white.svg" class="img-fluid logo-lg" alt="logo" />
    </RouterLink>
  </div>
</template>
