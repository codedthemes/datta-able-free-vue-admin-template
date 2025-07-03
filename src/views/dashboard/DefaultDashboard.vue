<script setup lang="ts">
import { ref, shallowRef } from 'vue'

// third party
import { BRow, BCol } from 'bootstrap-vue-next'

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'
import CardHeader from '@/components/shared/CardHeader.vue'

import ProgressSalesCard from '@/views/dashboard/components/ProgressSalesCard.vue'
import WorldMap from '@/views/dashboard/components/WorldMap.vue'
import EarningChart from '@/views/dashboard/components/EarningChart.vue'
import TotalCard from '@/views/dashboard/components/TotalCard.vue'
import SocialLikeCard from '@/views/dashboard/components/SocialLikeCard.vue'
import RatingCard from '@/views/dashboard/components/RatingCard.vue'
import RecentUser from '@/views/dashboard/components/RecentUser.vue'

const page = ref({ title: 'Home' })
const breadcrumbs = shallowRef([{ text: 'Dashboard' }, { text: 'Home' }])
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
  <BRow>
    <BCol md="6" xl="4">
      <ProgressSalesCard
        title="Daily Sales"
        icon="ph ph-arrow-up"
        iconVariant="success"
        sales="249.95"
        :progressValue="50"
        :percent="67"
      />
    </BCol>
    <BCol md="6" xl="4">
      <ProgressSalesCard
        title="Monthly Sales"
        icon="ph ph-arrow-down"
        iconVariant="danger"
        sales="2.942.32"
        :progressValue="35"
        progressClass="bg-brand-color-2"
        :percent="36"
      />
    </BCol>
    <BCol xl="4">
      <ProgressSalesCard
        title="Yearly Sales"
        icon="ph ph-arrow-up"
        iconVariant="success"
        sales="8.638.32"
        :progressValue="70"
        :percent="80"
      />
    </BCol>
    <BCol md="6" xl="8">
      <CardHeader title="Users from United States">
        <WorldMap />
      </CardHeader>
    </BCol>
    <BCol md="6" xl="4">
      <EarningChart />
      <TotalCard />
    </BCol>
    <BCol xl="4">
      <SocialLikeCard
        likes="12,281"
        icon="ti ti-brand-facebook-filled"
        iconVariant="primary"
        percent="+7.2%"
        percentClass="text-success"
        target="35,098"
        :targetProgress="60"
        targetProgressClass="bg-brand-color-1"
        duration="3,539"
        :durationProgress="45"
        durationProgressClass="bg-brand-color-2"
      />
    </BCol>
    <BCol md="6" xl="4">
      <SocialLikeCard
        likes="11,200"
        icon="ti ti-brand-twitter-filled"
        iconVariant="primary"
        percent="+6.2%"
        percentClass="text-primary"
        target="34,185"
        :targetProgress="40"
        targetProgressClass="bg-success"
        duration="4,567"
        :durationProgress="70"
        durationProgressClass="bg-primary"
      />
    </BCol>
    <BCol md="6" xl="4">
      <SocialLikeCard
        likes="10,500"
        icon="ti ti-brand-google-filled"
        iconVariant="danger"
        percent="+5.9%"
        percentClass="text-primary"
        target="25,998"
        :targetProgress="80"
        targetProgressClass="bg-brand-color-1"
        duration="7,753"
        :durationProgress="50"
        durationProgressClass="bg-brand-color-2"
      />
    </BCol>
    <BCol md="6" xl="4">
      <RatingCard />
    </BCol>
    <BCol md="6" xl="8">
      <RecentUser />
    </BCol>
  </BRow>
</template>
