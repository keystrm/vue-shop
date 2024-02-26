import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("../pages/HomePage.vue") },
  { path: "/shop", component: () => import("../pages/ShopPage.vue") },
  { path: "/contact-us", component: () => import("../pages/ContactPage.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
