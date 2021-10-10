import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: '/address' },
  { path: '/address', component: () => import('../views/address/index.vue') },
  {
    path: '/addressDel/:id',
    component: () => import('../views/addressDel/index.vue'),
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
        meta: {
          keepAlive: true,
        },
      },
      {
        path: 'search',
        component: () => import('../views/takeaway/search/index.vue'),
        meta: {
          keepAlive: true,
        },
      },
      {
        path: 'order',
        component: () => import('../views/takeaway/order/index.vue'),
        meta: {
          keepAlive: true,
        },
      },
      {
        path: 'mine',
        component: () => import('../views/takeaway/mine/index.vue'),
        meta: {
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: '/allfoot/:title',
    component: () => import('../views/takeaway/allfoot/index.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/services',
    component: () => import('../views/services/index.vue'),
  },
  {
    path: '/shoppingdet/:id',
    component: () => import('../views/shoppingDet/index.vue'),
  },
  {
    path: '/dets',
    component: () => import('../views/dets/index.vue'),
  },
]
// 工厂函数创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
