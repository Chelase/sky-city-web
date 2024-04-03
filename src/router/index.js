import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/index/index.vue'),
      children: [
        {
          path: '/hall',
          name: 'hall',
          component: () => import('@/views/index/hall.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/index/user.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
