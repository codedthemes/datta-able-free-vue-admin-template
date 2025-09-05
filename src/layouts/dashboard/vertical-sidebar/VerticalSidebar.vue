<script setup lang="ts">
import { shallowRef, ref, onMounted, onBeforeUnmount } from 'vue'

import { BImg } from 'bootstrap-vue-next'

// third party
import SimpleBar from 'simplebar-vue'

// files
import sidebarItems from './sidebarItem'

// components
import Logo from '../logo/LogoMain.vue'
import NavGroup from './NavGroup/NavGroup.vue'
import NavItem from './NavItem/NavItem.vue'
import NavCollapse from './NavCollapse/NavCollapse.vue'

import couponImage from '@/assets/images/img-coupon.png'

const isSmallScreen = ref(window.innerWidth <= 1024)

// Function to update screen size
const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 1024
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize)
})

const sidebarMenu = shallowRef(sidebarItems)
</script>

<template>
  <!-- [ Sidebar Menu ] start -->
  <nav class="pc-sidebar">
    <div class="navbar-wrapper">
      <Logo />
      <div class="navbar-content">
        <SimpleBar style="height: calc(100vh - 90px)">
          <ul class="pc-navbar">
            <!---Menu Loop -->
            <template v-for="(item, i) in sidebarMenu" :key="i">
              <!---Item Sub Header -->
              <NavGroup :item="item" v-if="item.header" :key="item.title ?? i" />
              <!---If Has Child -->
              <NavCollapse :item="item" :level="0" v-else-if="item.children" />
              <!---Single Item-->
              <NavItem :item="item" v-else />
              <!---End Single Item-->
            </template>
          </ul>
          <div class="card pc-user-card my-3 bg-white bg-opacity-10">
            <div class="card-body text-center">
              <BImg :src="couponImage" alt="logo" fluid class="w-50" />
              <h5 class="mb-0 text-white mt-1">Datta Able</h5>
              <p class="text-white">Checkout pro features</p>
              <a
                href="https://codedthemes.com/item/datta-able-vue-admin-template/"
                target="_blank"
                class="btn btn-warning"
              >
                <i class="ph ph-arrow-square-out"></i>
                Upgrade to Pro
              </a>
            </div>
          </div>
        </SimpleBar>
      </div>
    </div>
  </nav>
  <!-- [ Sidebar Menu ] end -->
</template>
