<script setup lang="ts">
// components
import Searchbar from './SearchBar.vue'
import NotificationDD from './NotificationDD.vue'
import ProfileDD from './ProfileDD.vue'

const ToggleSidebar = () => {
  document.querySelector('.pc-sidebar')?.classList.toggle('pc-sidebar-hide')
}

const MobileToggleSidebar = () => {
  document.querySelector('.pc-sidebar')?.classList.toggle('mob-sidebar-active')
  document
    .querySelector('.pc-sidebar')
    ?.insertAdjacentHTML('beforeend', '<div class="pc-menu-overlay"></div>')

  document.querySelector('.pc-menu-overlay').addEventListener('click', function () {
    document.querySelector('.pc-sidebar')?.classList.remove('mob-sidebar-active')
    document.querySelector('.pc-sidebar .pc-menu-overlay').remove()
  })
}
</script>

<template>
  <header class="pc-header">
    <div class="header-wrapper">
      <!-- [Mobile Media Block] start -->
      <div class="me-auto pc-mob-drp">
        <ul class="list-unstyled">
          <!-- ======= Menu collapse Icon ===== -->
          <li class="pc-h-item pc-sidebar-collapse">
            <a
              href="#!"
              class="pc-head-link ms-0"
              aria-label="toggle sidebar"
              @click="ToggleSidebar()"
            >
              <i class="ph ph-list"></i>
            </a>
          </li>
          <li class="pc-h-item pc-sidebar-popup">
            <a
              href="#!"
              class="pc-head-link ms-0"
              aria-label="collapse sidebar"
              @click="MobileToggleSidebar()"
            >
              <i class="ph ph-list"></i>
            </a>
          </li>
          <Searchbar />
        </ul>
      </div>
      <!-- [Mobile Media Block end] -->
      <div class="ms-auto">
        <ul class="list-unstyled">
          <NotificationDD />
          <ProfileDD />
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.pc-header {
  .pc-h-item {
    .pc-h-dropdown {
      will-change: unset !important;
    }
  }
}
</style>
