import { createRouter, createWebHistory } from 'vue-router'
import MainRoutes from './MainRoutes'
import PublicRoutes from './PublicRoutes'
import { useUIStore } from '@/stores/ui'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    PublicRoutes,
    MainRoutes,
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

// Navigation Guard to Change Title
router.beforeEach((to, from, next) => {
  const appTitle = import.meta.env.VITE_APP_TITLE
  document.title = to.meta.title ? `${to.meta.title} | ${appTitle}` : appTitle
  next()
})

router.beforeEach(() => {
  const uiStore = useUIStore()
  uiStore.isLoading = true
})

router.afterEach(() => {
  const uiStore = useUIStore()
  uiStore.isLoading = false
})

export default router
