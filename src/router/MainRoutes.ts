const MainRoutes = {
  path: '/',
  component: () => import('@/layouts/dashboard/DashboardLayout.vue'),
  // meta: {
  //   requiresAuth: true
  // },
  children: [
    {
      name: 'dashboard',
      path: '/',
      meta: { title: 'Home' },
      component: () => import('@/views/dashboard/DefaultDashboard.vue'),
    },
    {
      name: 'color',
      path: '/color',
      meta: { title: 'Home' },
      component: () => import('@/views/ui-elements/UiColor.vue'),
    },
    {
      name: 'typography',
      path: '/typography',
      meta: { title: 'Home' },
      component: () => import('@/views/ui-elements/UiTypography.vue'),
    },
    {
      name: 'sample-page',
      path: '/sample-page',
      meta: { title: 'Home' },
      component: () => import('@/views/SamplePage.vue'),
    },
  ],
}

export default MainRoutes
