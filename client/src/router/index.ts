import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/table',
    component: () => import('@/views/table')
  },
  {
    path: '/container',
    component: () => import('@/views/Container/index.vue'),
    children: [
      {
        path: 'c1/:id',
        component: () => import('@/views/Container/children/c1')
      },
      {
        path: 'c2',
        component: () => import('@/views/Container/children/c2')
      },
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router