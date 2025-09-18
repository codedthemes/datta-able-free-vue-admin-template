<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

// files
import NavItem from '../NavItem/NavItem.vue'
import type { menu } from '../sidebarItem'

const props = defineProps({ item: Object, level: Number })
const route = useRoute()

// Store expanded states for each menu item (unique key = item title)
const expandedItem = ref<string | null>(null)
const submenu = ref<HTMLElement | null>(null)

// Check if the current item or any of its children is active
const isAnyChildActive = (items: menu[]): boolean => {
  return items?.some(
    (sub) =>
      sub.to?.toLowerCase() === route.path.toLowerCase() ||
      (sub.children && isAnyChildActive(sub.children)),
  )
}

// Compute active state (either the parent or any child)
const isActive = computed(() => {
  return (
    props.item?.to?.toLowerCase() === route.path.toLowerCase() ||
    isAnyChildActive(props.item?.children || [])
  )
})

// Keep menu open if it's active on page load
watch(
  () => route.path,
  async () => {
    expandedItem.value = isActive.value ? props.item?.title : null
    await nextTick()

    if (submenu.value && isActive.value) {
      slideDown(submenu.value)
    } else if (submenu.value) {
      slideUp(submenu.value)
    }
  },
  { immediate: true },
)

// Toggle menu expansion independently
const toggleMenu = async () => {
  const isExpanded = expandedItem.value === props.item?.title

  // Close all menus and only open the clicked one
  expandedItem.value = isExpanded ? null : props.item?.title

  await nextTick()
  if (submenu.value) {
    // transition walu ahiya thi add thase ke ??

    if (expandedItem.value === props.item?.title) {
      slideDown(submenu.value)
    } else {
      slideUp(submenu.value)
    }
  }
}

const slideDown = async (el: HTMLElement) => {
  // el.style.removeProperty('display') // Reset display
  // const { display } = window.getComputedStyle(el)
  // if (display === 'none')

  // el.style.height = '0px'
  await nextTick()
  // el.style.transition= 'all 0.3s ease-in-out'
  el.style.removeProperty('padding')
  el.style.display = 'block'
  el.style.overflow = 'hidden'

  const height = el.scrollHeight + 'px' // Get actual height
  el.style.height = height
  setTimeout(() => {
    el.style.overflow = 'visible'
    el.style.height = '100%'
  }, 301)
}

const slideUp = async (el: HTMLElement) => {
  el.style.height = el.scrollHeight + 'px'
  await nextTick()
  // el.style.transition= 'all 0.3s ease-in-out',
  el.style.overflow = 'hidden'
  el.style.display = 'block'
  el.style.height = '0px'
  el.style.padding = '0px'

  setTimeout(() => {
    // el.style.display = 'none'
    // el.style.removeProperty('padding')
  }, 301)
}
</script>

<template>
  <li
    :class="[
      'pc-item',
      'pc-hasmenu',
      { 'pc-trigger': expandedItem === item?.title, active: expandedItem === item?.title },
    ]"
  >
    <a href="javascript:void(0)" class="pc-link" @click.prevent="toggleMenu">
      <div class="pc-micon" v-if="props.item?.icon">
        <i :class="['ph ' + props.item?.icon]"></i>
      </div>
      <span class="pc-mtext">{{ props.item?.title }}</span>
      <span class="pc-arrow"><i class="ti ti-chevron-right"></i></span>
      <span class="pc-badge" v-if="props.item?.chip">{{ props.item?.chip }}</span>
    </a>

    <!-- Sub-items -->
    <ul ref="submenu" v-if="props.item?.children" class="pc-submenu">
      <template v-for="(subitem, i) in props.item?.children" :key="i">
        <NavCollapse v-if="subitem.children" :item="subitem" :level="(level ?? 0) + 1" />
        <NavItem v-else :item="subitem" :level="(level ?? 0) + 1" />
      </template>
    </ul>
  </li>
</template>

<style scoped>
.pc-submenu {
  transition: all 0.3s ease-in-out;
}
</style>
