import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/hall',
      children: [
        { path: '/hall',  component: () => import('@/views/Hall/index.vue') },
      ]
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Login/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/login.vue')
    }
  ]
})

export default router
