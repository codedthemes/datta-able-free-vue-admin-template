<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// third party
import { BForm, BFormGroup, BFormInput, BFormCheckbox, BButton } from 'bootstrap-vue-next'

const router = useRouter()
const status = ref(true)

// State object
const email = ref('info@codedthemes.com')
const password = ref('admin123')

// Email validation
const emailError = computed(() => {
  if (!email.value.trim()) return 'E-mail is required'
  if (/\s/.test(email.value.trim())) return 'E-mail must not contain spaces'
  if (!/.+@.+\..+/.test(email.value.trim())) return 'E-mail must be valid'
  return ''
})

// Password validation
const passwordError = computed(() => {
  if (!password.value) return 'Password is required'
  if (password.value.length > 10) return 'Password must be less than 10 characters'
  return ''
})

// Computed validation states
const isEmailValid = computed(() => !emailError.value)
const isPasswordValid = computed(() => !passwordError.value)

// Handle form submission
const handleSubmit = () => {
  if (isEmailValid.value && isPasswordValid.value) {
    router.push('/dashboard/default')
  }
}
</script>

<template>
  <!-- [ Login Form ] start -->
  <h4 class="text-center f-w-500 mt-4 mb-3">Login</h4>
  <BForm @submit.prevent="handleSubmit">
    <BFormGroup :state="isEmailValid" :invalid-feedback="emailError" class="mb-3">
      <BFormInput type="email" v-model="email" placeholder="Email Address" />
    </BFormGroup>
    <BFormGroup :state="isPasswordValid" :invalid-feedback="passwordError" class="mb-3">
      <BFormInput type="password" v-model="password" placeholder="Password" />
    </BFormGroup>
    <div class="d-flex mt-1 justify-content-between align-items-center">
      <BFormCheckbox id="customCheck1" v-model="status" name="customCheck1" class="text-muted mb-0">
        Remember me?
      </BFormCheckbox>
      <router-link class="text-secondary" to="/reset-password1">Forgot Password?</router-link>
    </div>
    <div class="text-center mt-4">
      <BButton
        type="submit"
        variant="primary"
        class="shadow px-sm-4"
        :disabled="!isEmailValid || !isPasswordValid"
        >Login</BButton
      >
    </div>
  </BForm>
  <div class="d-flex justify-content-between align-items-center mt-4 gap-2 text-nowrap">
    <h6 class="f-w-500 mb-0">Don't have an Account?</h6>
    <router-link to="/register" class="link-primary">Create Account</router-link>
  </div>
  <!-- [ Login Form ] end -->
</template>
