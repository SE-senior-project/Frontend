import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OnemeasureLogin from "../views/OnemeasureLogin.vue";
import OnemeasureRegister from "../views/OnemeasureRegister.vue";

const routes = [
  {
    path: "/register",
    name: "register",
    component: OnemeasureRegister,
  },
  {
    path: "/login",
    name: "login",
    component: OnemeasureLogin,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
