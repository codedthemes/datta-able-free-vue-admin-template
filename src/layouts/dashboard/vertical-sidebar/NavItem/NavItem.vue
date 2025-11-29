<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

// third party
import { useRoute } from "vue-router";

const props = defineProps({ item: Object, level: Number });
const route = useRoute();
const emit = defineEmits(["childActive"]);

// Check if this item is active
const isActive = computed(() => {
  return route.path.toLowerCase() === props.item?.to.toLowerCase();
});

// Notify parent if active
onMounted(() => {
  if (isActive.value) {
    emit("childActive", props.item?.title); // Send item title to parent
  }
});

const relativeURL = ref("");

onMounted(async () => {
  try {
    relativeURL.value = await import.meta.env.BASE_URL;
  } catch (error) {
    console.error("Error url not found:", error);
  }
});

// Computed final link
const linkTo = computed(() => {
  if (props.item?.getURL && props.item?.type === "external") {
    return "/";
  } else if (props.item?.getURL) {
    return `${relativeURL.value}${props.item?.to}`;
  } else {
    return props.item?.to;
  }
});

// Handle click
const handleClick = (e: Event) => {
  document.querySelector(".pc-sidebar")?.classList.remove("mob-sidebar-active");
  document.querySelector(".pc-sidebar .pc-menu-overlay")?.remove();
  if (props.item?.getURL && props.item?.type === "external") {
    e.preventDefault(); // stop vue-router
    window.open(props.item?.to, "_blank");
  }
};
</script>

<template>
  <!---Single Item-->
  <li :class="['pc-item', { active: isActive }]">
    <router-link
      :to="linkTo"
      class="pc-link"
      :target="item?.type === 'external' ? '_blank' : ''"
      @click="handleClick"
    >
      <!---If icon-->
      <div class="pc-micon" v-if="props.item?.icon">
        <i :class="['ph ' + props.item?.icon]"></i>
      </div>
      <span class="pc-mtext">{{ item?.title }}</span>
      <span class="pc-badge" v-if="props.item?.chip">{{
        props.item?.chip
      }}</span>
    </router-link>
  </li>
</template>
