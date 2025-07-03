<script setup lang="ts">
// third party
import { BCard, BCardBody, BRow, BCol, BProgress, BProgressBar } from 'bootstrap-vue-next'

const props = defineProps<{
  likes: string
  icon: string
  iconVariant: string
  percent: string
  percentClass?: string
  target: string
  targetProgress: number
  targetProgressClass?: string
  duration: string
  durationProgress: number
  durationProgressClass?: string
}>()
</script>

<template>
  <BCard class="card-social" no-body>
    <BCardBody class="border-bottom">
      <BRow class="align-items-center justify-content-center">
        <BCol cols="auto">
          <i :class="`${props.icon} text-${props.iconVariant} f-36`"></i>
        </BCol>
        <BCol class="text-end">
          <h3>{{ props.likes }}</h3>
          <h5 :class="`${props?.percentClass} mb-0`">
            {{ props.percent }}
            <span class="text-muted">Total Likes</span>
          </h5>
        </BCol>
      </BRow>
    </BCardBody>
    <BCardBody>
      <BRow class="align-items-center justify-content-center card-active">
        <BCol cols="6">
          <h6 class="text-center m-b-10">
            <span class="text-muted m-r-5">Target:</span>
            {{ props.target }}
          </h6>
          <BProgress height="6px" aria-label="target">
            <BProgressBar :value="props.targetProgress" :class="`${props?.targetProgressClass}`" />
          </BProgress>
        </BCol>
        <BCol cols="6">
          <h6 class="text-center m-b-10">
            <span class="text-muted m-r-5">Duration:</span>
            {{ props.duration }}
          </h6>
          <BProgress height="6px" aria-label="duration">
            <BProgressBar
              :value="props.durationProgress"
              :class="`${props?.durationProgressClass}`"
            />
          </BProgress>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>
