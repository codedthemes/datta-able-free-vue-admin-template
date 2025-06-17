const PublicRoutes = {
  path: '/main',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  // meta: {
  //   requiresAuth: false
  // },
  children: [
    {
      name: 'login',
      path: '/login',
      meta: { title: 'Login' },
      component: () => import('@/views/pages/authentication/login/LoginPage.vue'),
    },
    {
      name: 'register',
      path: '/register',
      meta: { title: 'Register' },
      component: () => import('@/views/pages/authentication/register/RegisterPage.vue'),
    },
  ],
}

export default PublicRoutes
