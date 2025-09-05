<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// third party
import {
  BRow,
  BCol,
  BFormInput,
  BFormCheckbox,
  BButton,
  BFormGroup,
  BForm,
} from 'bootstrap-vue-next'

const router = useRouter()

// Form fields
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const termsAccepted = ref(false)

// Validation rules
const isRequired = (value: string) =>
  value.trim().length > 0 ? undefined : 'This field is required'
const isEmail = (value: string) => {
  const trimmedEmail = value.trim()
  if (!trimmedEmail) return 'E-mail is required'
  if (/\s/.test(trimmedEmail)) return 'E-mail must not contain spaces'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return 'Enter a valid email'
  return undefined
}
const minLength = (value: string, length: number) =>
  value.length >= length ? undefined : `Must be at least ${length} characters`
const passwordsMatch = computed(() =>
  password.value === confirmPassword.value ? undefined : 'Passwords do not match',
)
const termsValidation = computed(() =>
  termsAccepted.value ? undefined : 'You must accept the Terms & Conditions',
)

// Validation errors (must return string | undefined)
const firstNameError = computed(() => isRequired(firstName.value))
const lastNameError = computed(() => isRequired(lastName.value))
const emailError = computed(() => isEmail(email.value))
const passwordError = computed(() => minLength(password.value, 10))
const confirmPasswordError = computed(() => passwordsMatch.value)

// Bootstrap validation states (null = untouched, true = valid, false = invalid)
const firstNameState = computed(() => (firstName.value ? !firstNameError.value : null))
const lastNameState = computed(() => (lastName.value ? !lastNameError.value : null))
const emailState = computed(() => (email.value ? !emailError.value : null))
const passwordState = computed(() => (password.value ? !passwordError.value : null))
const confirmPasswordState = computed(() =>
  confirmPassword.value ? !confirmPasswordError.value : null,
)

// Check if form is valid
const isFormValid = computed(
  () =>
    !firstNameError.value &&
    !lastNameError.value &&
    !emailError.value &&
    !passwordError.value &&
    !confirmPasswordError.value &&
    termsAccepted.value,
)

// Form submission
const handleSubmit = () => {
  if (isFormValid.value) {
    alert('Signup successful!')
    router.push('/dashboard/default')
  }
}
</script>

<template>
  <!-- [ Signup Form ] start -->
  <h4 class="text-center f-w-500 mt-4 mb-3">Sign up</h4>
  <BForm @submit.prevent="handleSubmit">
    <BRow>
      <BCol sm="6">
        <BFormGroup
          class="mb-3"
          label-for="first-name"
          :state="firstNameState"
          :invalid-feedback="firstNameError ?? ''"
        >
          <BFormInput id="first-name" v-model="firstName" placeholder="First Name" />
        </BFormGroup>
      </BCol>
      <BCol sm="6">
        <BFormGroup
          class="mb-3"
          label-for="last-name"
          :state="lastNameState"
          :invalid-feedback="lastNameError ?? ''"
        >
          <BFormInput id="last-name" v-model="lastName" placeholder="Last Name" />
        </BFormGroup>
      </BCol>
    </BRow>
    <BFormGroup
      class="mb-3"
      label-for="email"
      :state="emailState"
      :invalid-feedback="emailError ?? ''"
    >
      <BFormInput id="email" type="email" v-model="email" placeholder="Email Address" />
    </BFormGroup>
    <BFormGroup
      class="mb-3"
      label-for="password"
      :state="passwordState"
      :invalid-feedback="passwordError ?? ''"
    >
      <BFormInput id="password" type="password" v-model="password" placeholder="Password" />
    </BFormGroup>
    <BFormGroup
      class="mb-3"
      label-for="confirm-password"
      :state="confirmPasswordState"
      :invalid-feedback="confirmPasswordError ?? ''"
    >
      <BFormInput
        id="confirm-password"
        type="password"
        v-model="confirmPassword"
        placeholder="Confirm Password"
      />
    </BFormGroup>
    <BFormGroup>
      <BFormCheckbox id="terms" v-model="termsAccepted" class="text-muted mb-0 mt-1">
        I agree to the Terms & Conditions
      </BFormCheckbox>
      <small v-if="!termsAccepted" class="text-danger">{{ termsValidation }}</small>
    </BFormGroup>
    <div class="text-center mt-4">
      <BButton variant="primary" type="submit" class="shadow px-sm-4" :disabled="!isFormValid">
        Sign up
      </BButton>
    </div>
  </BForm>
  <div class="d-flex justify-content-between align-items-end mt-4 gap-2 text-nowrap">
    <h6 class="f-w-500 mb-0">Already have an Account?</h6>
    <router-link to="/login" class="link-primary">Login</router-link>
  </div>
  <!-- [ Signup Form ] end -->
</template>
