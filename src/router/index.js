import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import login from "../views/Login.vue";
import register from "../views/Register.vue";
import project from "../views/Project.vue";
import createProject from "../views/CreateProject.vue";
import materialList from "../views/MaterialList.vue";
const routes = [
  {
    path: "/material_list/:id",
    name: "material_list",
    component: materialList,
  },
  {
    path: "/create_project",
    name: "create_project",
    component: createProject,
  },
  {
    path: "/project",
    name: "project",
    component: project,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
