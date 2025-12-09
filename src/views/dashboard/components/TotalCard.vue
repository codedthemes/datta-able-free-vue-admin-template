<script setup lang="ts">
// third party
import { BCard, BCardBody, BRow, BCol } from "bootstrap-vue-next";
</script>

<template>
  <BCard no-body>
    <BCardBody class="border-bottom">
      <BRow class="align-items-center">
        <BCol cols="auto">
          <i class="ph ph-lightbulb-filament f-30 text-success"></i>
        </BCol>
        <BCol>
          <h3 class="f-w-300">235</h3>
          <span class="d-block text-uppercase">total ideas</span>
        </BCol>
      </BRow>
    </BCardBody>
    <BCardBody>
      <BRow class="align-items-center">
        <BCol cols="auto">
          <i class="ph ph-map-pin-line f-30 text-primary"></i>
        </BCol>
        <BCol>
          <h3 class="f-w-300">26</h3>
          <span class="d-block text-uppercase">total location</span>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>
