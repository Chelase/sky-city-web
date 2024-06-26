import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from "@/stores/user.js"

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
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  // 是否已登录
  if (userStore.isLogin) {
    // 如果已登录状态下，进入登录页会强制跳转到主页
    if (to.name === 'login') {
      next({
        name: 'home',
        replace: true,
      })
    } else {// 正常访问页面
      next()
    }
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath !== '/' ? to.fullPath : undefined,
        },
      })
    }
  }
})

export default router
