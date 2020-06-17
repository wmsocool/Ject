Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'ject',
    component: () => import('@/category/ject/index'),
    children: [
      {
        path: '/ject',
        name: 'jectlist',
        component: () => import('@/category/ject/ject')
      },
      {
        path: '/ject/list',
        name: 'jectlist',
        component: () => import('@/category/ject/list')
      },
      {
        path: '/ject/content',
        name: 'unitInfo',
        component: () => import('@/category/ject/content')
      }
    ]
  },
  {
    path: '/unitInfo',
    name: 'unitInfo',
    component: () => import('@/system/unitInfo')
  },
  {
    path: '/pms',
    name: 'pms',
    component: () => import('@/category/pms/pms')
  },
  {
    path: '/gpc',
    name: 'gpc',
    component: () => import('@/category/gpc/gpc')
  },
  {
    path: '*',
    component: () => import('@/common/404')
  }
]
const router = new VueRouter({
  routes
})
export default router
