import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OnemeasureLogin from "../views/OMLogin.vue";
import OnemeasureRegister from "../views/OMRegister.vue";
import OnemeasureProjectManagement from "../views/OMProjectManagement.vue";
import OneMeasureCreateNewProject from "../views/CreateProject.vue";
import OMMateriallist from "../views/MaterialList.vue";

const routes = [
  {
    path: "/materiallist/:id",
    name: "OMmateriallist",
    component: OMMateriallist,
  },
  {
    path: "/createProject",
    name: "createProject",
    component: OneMeasureCreateNewProject,
  },
  {
    path: "/management",
    name: "projectmanagement",
    component: OnemeasureProjectManagement,
  },
  {
    path: "/register",
    name: "register",
    component: OnemeasureRegister,
  },
  {
    path: "/",
    name: "login",
    component: OnemeasureLogin,
  },
  {
    path: "/home",
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
