Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/home/home"),
  },
  {
    path: "/unitInfo",
    name: "unitInfo",
    component: () => import("@/systemConfig/unitInfo"),
  },
  {
    path: "/plm",
    name: "plm",
    component: () => import("@/category/plm/plm"),
  },
  {
    path: "/pms",
    name: "pms",
    component: () => import("@/category/pms/pms"),
  },
  {
    path: "/gpc",
    name: "gpc",
    component: () => import("@/category/gpc/gpc"),
  },
  {
    path: "*",
    component: () => import("@/layout/404"),
  },
]
const router = new VueRouter({
  routes,
})
export default router
