import { createRouter, createWebHistory } from "vue-router";
//AUTH//
import HomeView from "../views/HomeView.vue";
import login from "../views/Auth/Login.vue";
import register from "../views/Auth/Register.vue";
//ADMIN//
import admin from "../views/Admins/Admin.vue";
import manageAccount from "../views/Admins/ManageAccount.vue";
//PM//
import project from "../views/PM/Project.vue";
import materialList from "../views/PM/MaterialList.vue";
import createProject from "../views/PM/CreateProject.vue";
import materialSelection from "../views/PM/MaterialSelection.vue";
import materialType from "../views/PM/MaterialType.vue";
import totalMaterialSelection from "../views/PM/TotalMaterialSelection.vue";
//BOQ//
import boqTemplate from "../views/BOQ/BOQTemplate.vue";
import boqTemplateSelection from "../views/BOQ/BOQTemplateSelection.vue";
import boqConfirmation from "../views/BOQ/BOQConfirmation.vue";
import showTemplate from "../views/BOQ/ShowTemplate.vue";
import bogGenration from "../views/BOQ/BOQGeneration.vue";
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
    path: "/admin",
    name: "admin",
    component: admin,
  },
  {
    path: "/manage_account",
    name: "manage_account",
    component: manageAccount,
  },
  {
    path: "/boq_generation",
    name: "boq_generation",
    component: bogGenration,
  },
  {
    path: "/material_selection",
    name: "material_selection",
    component: materialSelection,
  },
  {
    path: "/material_type",
    name: "material_type",
    component: materialType,
  },
  {
    path: "/total_material_selection",
    name: "total_material_selection",
    component: totalMaterialSelection,
  },
  {
    path: "/boq_template",
    name: "boq_template",
    component: boqTemplate,
  },
  {
    path: "/boq_template_selection",
    name: "boq_template_selection",
    component: boqTemplateSelection,
  },
  {
    path: "/boq_confirmation",
    name: "boq_confirmation",
    component: boqConfirmation,
  },
  {
    path: "/show_template",
    name: "show_template",
    component: showTemplate,
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
