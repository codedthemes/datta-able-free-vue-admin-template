<script setup lang="ts">
/**
 * AuthLayout1 Component
 *
 * @component AuthLayout1
 * @description A common authentication layout wrapper that provides a structured design for login, signup, and other authentication-related pages.
 * @slot default - A slot to render the authentication form content inside the card.
 *
 */

// third party
import { BCard, BImg } from 'bootstrap-vue-next'

// assets
import darkLight from '@/assets/images/logo-dark.svg'
</script>

<template>
  <!-- [ Main Content ] start -->
  <div class="auth-main">
    <div class="auth-wrapper v1">
      <div class="auth-form">
        <div class="position-relative my-5">
          <div class="auth-bg">
            <span class="r"></span>
            <span class="r s"></span>
            <span class="r s"></span>
            <span class="r"></span>
          </div>
          <BCard class="mb-0">
            <div class="text-center">
              <router-link to="/dashboard/default">
                <BImg :src="darkLight" alt="logo" fluid />
              </router-link>
            </div>
            <!-- Slot for authentication form -->
            <slot />
          </BCard>
        </div>
      </div>
    </div>
  </div>
  <!-- [ Main Content ] end -->
</template>
