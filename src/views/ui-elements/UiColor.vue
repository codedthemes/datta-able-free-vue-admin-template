<script setup lang="ts">
import { ref, shallowRef } from 'vue'

// third party
import { BRow, BCol } from 'bootstrap-vue-next'
import useClipboard from 'vue-clipboard3'

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'
import CardHeader from '@/components/shared/CardHeader.vue'
import ComponentContent from '@/components/shared/ComponentContent.vue'

const page = ref({ title: 'Color' })
const breadcrumbs = shallowRef([{ text: 'Basic UI' }, { text: 'Color' }])

const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900]

const { toClipboard } = useClipboard() // Initialize vue-clipboard3

async function handleCopy(text: string, event: Event) {
  try {
    await toClipboard(text)
    showBadge(event.target as HTMLElement, 'Copied', 'bg-success')
  } catch {
    showBadge(event.target as HTMLElement, 'Error', 'bg-danger')
  }
}

function showBadge(element: HTMLElement, message: string, badgeClass: string) {
  const iconBadge = document.createElement('span')
  iconBadge.setAttribute('class', `ic-badge badge ${badgeClass} float-end`)
  iconBadge.innerHTML = message
  element.append(iconBadge)

  setTimeout(() => {
    iconBadge.remove()
  }, 3000)
}
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
  <ComponentContent
    content="Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project."
    link="https://getbootstrap.com/docs/5.2/customize/color/"
  />
  <BRow>
    <!-- [ bg-color ] start -->
    <BCol sm="12">
      <CardHeader title="Background Color">
        <BRow gutter-y="4">
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`bg-blue-${shade}`"
              @click="handleCopy(`bg-blue-${shade}`, $event)"
            >
              bg-blue-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`bg-purple-${shade}`"
              @click="handleCopy(`bg-purple-${shade}`, $event)"
            >
              bg-purple-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`bg-pink-${shade}`"
              @click="handleCopy(`bg-pink-${shade}`, $event)"
            >
              bg-pink-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`bg-red-${shade}`"
              @click="handleCopy(`bg-red-${shade}`, $event)"
            >
              bg-red-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`bg-orange-${shade}`"
              @click="handleCopy(`bg-orange-${shade}`, $event)"
            >
              bg-orange-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`bg-yellow-${shade}`"
              @click="handleCopy(`bg-yellow-${shade}`, $event)"
            >
              bg-yellow-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`bg-green-${shade}`"
              @click="handleCopy(`bg-green-${shade}`, $event)"
            >
              bg-green-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`bg-cyan-${shade}`"
              @click="handleCopy(`bg-cyan-${shade}`, $event)"
            >
              bg-cyan-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`bg-gray-${shade}`"
              @click="handleCopy(`bg-gray-${shade}`, $event)"
            >
              bg-gray-{{ shade }}
            </div>
          </BCol>
        </BRow>
      </CardHeader>
    </BCol>
    <!-- [ bg-color ] end -->
    <!-- [ text-color ] start -->
    <BCol sm="12">
      <CardHeader title="Text Color" class="color-card">
        <BRow gutter-y="4">
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`text-blue-${shade}`"
              @click="handleCopy(`text-blue-${shade}`, $event)"
            >
              text-blue-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`text-purple-${shade}`"
              @click="handleCopy(`text-purple-${shade}`, $event)"
            >
              text-purple-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`text-pink-${shade}`"
              @click="handleCopy(`text-pink-${shade}`, $event)"
            >
              text-pink-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`text-red-${shade}`"
              @click="handleCopy(`text-red-${shade}`, $event)"
            >
              text-red-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`text-orange-${shade}`"
              @click="handleCopy(`text-orange-${shade}`, $event)"
            >
              text-orange-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`text-yellow-${shade}`"
              @click="handleCopy(`text-yellow-${shade}`, $event)"
            >
              text-yellow-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`text-green-${shade}`"
              @click="handleCopy(`text-green-${shade}`, $event)"
            >
              text-green-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`text-cyan-${shade}`"
              @click="handleCopy(`text-cyan-${shade}`, $event)"
            >
              text-cyan-{{ shade }}
            </div>
          </BCol>
          <BCol md="4">
            <div
              v-for="shade in shades"
              :key="shade"
              class="p-3 color-block"
              :class="`text-gray-${shade}`"
              @click="handleCopy(`text-gray-${shade}`, $event)"
            >
              text-gray-{{ shade }}
            </div>
          </BCol>
        </BRow>
      </CardHeader>
    </BCol>
    <!-- [ text-color ] end -->
  </BRow>
</template>
