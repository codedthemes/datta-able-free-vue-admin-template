<script setup lang="ts">
// third party
import { BDropdown, BDropdownItem, BDropdownHeader } from 'bootstrap-vue-next'
import SimpleBar from 'simplebar-vue'

// common components
import SvgSprite from '@/components/shared/SvgSprite.vue'
</script>

<template>
  <li>
    <BDropdown
      variant="link"
      wrapper-class="dropdown pc-h-item header-user-profile"
      toggle-class="pc-head-link me-0"
      menu-class="dropdown-user-profile dropdown-menu-end pc-h-dropdown p-0 overflow-hidden"
      no-caret
      aria-label="Profile"
    >
      <template #button-content>
        <a href="#" class="pc-head-link mx-0 position-static" aria-label="Profile">
          <i class="ph ph-user-circle"></i>
        </a>
        <span class="visually-hidden">Profile</span>
      </template>
      <BDropdownHeader
        tag="div"
        header-class="d-flex align-items-center justify-content-between bg-primary"
      >
        <div class="d-flex my-2">
          <div class="flex-shrink-0">
            <img
              src="@/assets/images/user/avatar-2.jpg"
              alt="user-image"
              class="user-avatar wid-35"
            />
          </div>
          <div class="flex-grow-1 ms-3">
            <h6 class="text-white mb-1">Carson Darrin 🖖</h6>
            <span class="text-white text-opacity-75">carson.darrin@company.io</span>
          </div>
        </div>
      </BDropdownHeader>
      <div class="dropdown-body">
        <SimpleBar
          style="max-height: calc(100vh - 225px); overflow-x: hidden"
          :options="{ autoHide: false }"
        >
          <BDropdownItem href="#">
            <span>
              <SvgSprite name="custom-setting-outline" class="text-muted me-2 align-text-bottom" />
              <span>Settings</span>
            </span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span>
              <SvgSprite name="custom-share-bold" class="text-muted me-2 align-text-bottom" />
              <span>Share</span>
            </span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <span>
              <SvgSprite name="custom-lock-outline" class="text-muted me-2 align-text-bottom" />
              <span>Change Password</span>
            </span>
          </BDropdownItem>
          <div class="d-grid my-2">
            <button class="btn btn-primary">
              <SvgSprite name="custom-logout-1-outline" class="me-2 align-text-bottom" />
              Logout
            </button>
          </div>
        </SimpleBar>
      </div>
    </BDropdown>
  </li>
</template>
