import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/parser',
    component: () => import('@/views/Parser/index.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router