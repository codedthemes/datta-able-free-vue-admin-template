<script setup lang="ts">
// third party
import { BContainer, BRow, BCol } from "bootstrap-vue-next";
</script>

<template>
  <footer class="pc-footer">
    <BContainer class="footer-wrapper" fluid>
      <BRow class="justify-content-center justify-content-md-between">
        <BCol cols="auto" class="footer-title my-1">
          <p class="m-0">
            Datta able &#9829; crafted by Team
            <a
              href="https://codedthemes.com/"
              class="text-primary"
              target="_blank"
              >CodedThemes</a
            >
          </p>
        </BCol>
        <BCol cols="auto" class="my-1">
          <ul class="list-inline footer-link mb-0">
            <li class="list-inline-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="list-inline-item">
              <a
                href="https://codedthemes.gitbook.io/datta/datta-able-vue"
                target="_blank"
              >
                Documentation
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://codedthemes.support-hub.io/" target="_blank">
                Support
              </a>
            </li>
          </ul>
        </BCol>
      </BRow>
    </BContainer>
  </footer>
</template>

<style lang="scss">
@media (max-width: 378px) {
  .footer-title {
    flex: 0 0 auto;
    width: auto;
  }
}
</style>
