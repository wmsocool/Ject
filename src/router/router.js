Vue.use(VueRouter)
const routes = [
  {
    path: '/system',
    name: 'system',
    component: () => import('@/system/system.vue'),
    children: [
      {
        path: '/system/:id',
        name: 'system',
        component: () => import('@/category/ject/ject.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'ject',
    component: () => import('@/category/ject/index.vue'),
    children: [
      {
        path: '/ject',
        name: 'jectlist',
        component: () => import('@/category/ject/ject.vue')
      },
      {
        path: '/ject/list',
        name: 'jectlist',
        component: () => import('@/category/ject/list.vue')
      },
      {
        path: '/ject/content',
        name: 'unitInfo',
        component: () => import('@/category/ject/content.vue')
      }
    ]
  },
  {
    path: '/pms',
    name: 'pms',
    component: () => import('@/category/pms/index.vue')
  },
  {
    path: '/gpc',
    name: 'gpc',
    component: () => import('@/category/gpc/index.vue')
  },
  {
    path: '*',
    component: () => import('@/common/404.vue')
  }
]
const router = new VueRouter({
  routes
})
export default router
