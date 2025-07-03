<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// third party
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world'
import 'jsvectormap/src/scss/jsvectormap.scss'

// map setup
const mapWorld = ref<HTMLElement | null>(null)
interface JsVectorMapInstance {
  destroy: () => void
}

let mapInstance: JsVectorMapInstance | null = null

onMounted(() => {
  if (mapWorld.value) {
    mapWorld.value.id = 'map-world'
    mapInstance = new jsVectorMap({
      selector: '#map-world',
      map: 'world',
      zoomButtons: true,
      markersSelectable: true,
      markers: [
        {
          coords: [-14.235, -51.9253],
        },
        {
          coords: [35.8617, 104.1954],
        },
        {
          coords: [61, 105],
        },
        {
          coords: [26.8206, 30.8025],
        },
      ],
      markerStyle: {
        initial: {
          fill: '#3f4d67',
        },
        hover: {
          fill: '#04a9f5',
        },
      },
      markerLabelStyle: {
        initial: {
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 500,
          fill: '#3f4d67',
        },
      },
      // You can customize more options here
    })
  }
})

onBeforeUnmount(() => {
  mapInstance?.destroy()
})
</script>

<template>
  <div ref="mapWorld" style="height: 400px; width: 100%"></div>
</template>
