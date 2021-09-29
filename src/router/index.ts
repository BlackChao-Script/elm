import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: '/address' },
  { path: '/address', component: () => import('../views/address/index.vue') },
  {
    path: '/addressDel/:id',
    component: () => import('../views/addressDel/index.vue'),
    children: [],
  },
  {
    path: '/takeaway',
    component: () => import('../views/takeaway/index.vue'),
    children: [
      {
        path: '',
        redirect: 'takeawayHome',
      },
      {
        path: 'takeawayHome',
        component: () => import('../views/takeaway/takeawayHome/index.vue'),
      },
      {
        path: 'search',
        component: () => import('../views/takeaway/search/index.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/takeaway/order/index.vue'),
      },
      {
        path: 'mine',
        component: () => import('../views/takeaway/mine/index.vue'),
      },
    ],
  },
]
// 工厂函数创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
