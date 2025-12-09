<script setup lang="ts">
import { ref } from "vue";

// third party
import { BProgress, BProgressBar, BRow, BCol } from "bootstrap-vue-next";

// common components
import CardHeader from "@/components/shared/CardHeader.vue";

const ratingData = ref([
  { star: 5, count: 384, value: 70 },
  { star: 4, count: 145, value: 35 },
  { star: 3, count: 24, value: 25 },
  { star: 2, count: 1, value: 10 },
  { star: 1, count: 0, value: 0 },
]);
</script>

<template>
  <CardHeader title="Rating" class="user-list">
    <BRow class="align-items-center justify-content-center m-b-20">
      <BCol cols="6">
        <h2 class="f-w-300 d-flex align-items-center float-start m-0">
          4.7
          <i class="ti ti-star-filled f-12 m-l-10 text-warning"></i>
        </h2>
      </BCol>
      <BCol cols="6">
        <h6 class="d-flex align-items-center float-end m-0">
          0.4
          <i
            class="ti ti-caret-up-filled text-success f-22 m-l-10"
            style="margin-bottom: -2px"
          ></i>
        </h6>
      </BCol>
    </BRow>
    <BRow>
      <BCol xl="12" v-for="(item, index) in ratingData" :key="index">
        <h6 class="d-flex align-items-center gap-1 float-start">
          <i class="ti ti-star-filled f-12 text-warning"></i>
          {{ item.star }}
        </h6>
        <h6 class="align-items-center float-end">{{ item.count }}</h6>
        <BProgress
          height="6px"
          class="m-t-30"
          aria-label="{{index}}"
          :class="{
            'm-b-15': index !== ratingData.length - 1,
            'm-b-0': index === ratingData.length - 1,
          }"
        >
          <BProgressBar class="bg-brand-color-1" :value="item.value" />
        </BProgress>
      </BCol>
    </BRow>
  </CardHeader>
</template>
