<script setup lang="ts">
import { RouterView } from 'vue-router'

// components
import VerticalSidebar from './vertical-sidebar/VerticalSidebar.vue'
import VerticalHeader from './vertical-header/VerticalHeader.vue'
import Footer from './FooterBlock.vue'
import LoaderWrapper from '../LoaderWrapper.vue'
</script>

<template>
  <VerticalSidebar />
  <VerticalHeader />
  <div class="pc-container">
    <div class="pc-content">
      <LoaderWrapper />
      <RouterView />
    </div>
  </div>
  <Footer />
</template>
