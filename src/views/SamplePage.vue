<script setup lang="ts">
import { ref, shallowRef } from 'vue'

// third party
import { BCard, BRow, BCol } from 'bootstrap-vue-next'

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'

const page = ref({ title: 'Sample Page' })
const breadcrumbs = shallowRef([{ text: 'Other' }, { text: 'Sample Page' }])
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <!-- [ Main Content ] start -->
  <BRow>
    <!-- [ sample-page ] start -->
    <BCol sm="12">
      <BCard>
        <template #header>
          <h5>Hello card</h5>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facilis alias magnam,
        voluptate maiores fugiat, aliquid totam saepe voluptates quisquam consequatur impedit quos
        velit reprehenderit nostrum quia non, dolorem explicabo?
      </BCard>
    </BCol>
    <!-- [ sample-page ] end -->
  </BRow>
  <!-- [ Main Content ] end -->
</template>
