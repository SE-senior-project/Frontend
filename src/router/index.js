import { createRouter, createWebHistory } from "vue-router";
import service from '../services/OneMeasureService';
import GStore from '@/store'
//AUTH//
import HomeView from "../views/HomeView.vue";
import login from "../views/auth/Login.vue";
import register from "../views/auth/Register.vue";
//ADMIN//
import admin from "../views/admin/Admin.vue";
import manageAccount from "../views/admin/ManageAccount.vue";
//PM//
import project from "../views/pm/Project.vue";
import materialList from "../views/pm/MaterialList.vue";
import createProject from "../views/pm/CreateProject.vue";
import materialSelection from "../views/pm/MaterialSelection.vue";
import materialType from "../views/pm/MaterialType.vue";
import totalMaterialSelection from "../views/pm/TotalMaterialSelection.vue";
//BOQ//
import boqTemplate from "../views/boq/BOQTemplate.vue";
import boqTemplateSelection from "../views/boq/BOQTemplateSelection.vue";
import boqConfirmation from "../views/boq/BOQConfirmation.vue";
import showTemplate from "../views/boq/ShowTemplate.vue";
import bogGenration from "../views/boq/BOQGeneration.vue";

import showcase from "../views/Showcase.vue";
import form from "../views/Form.vue";
import Swal from "sweetalert2";
const routes = [
  {
    path: "/material_list",
    name: "material_list",
    component: materialList,
  },
  {
    path: "/material_selection",
    name: "material_selection",
    component: materialSelection,
    props: true,
    beforeEnter: async () => {
      console.log(GStore.currentSelectionCategory)
      service.get_all_selection_type(GStore.currentSelectionCategory).then((response) => {
        GStore.currentMaterialCategory = response.data;
        // console.log(GStore.currentMaterialType)
      })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "โปรดลองอีกครั้งภายหลัง",
            showConfirmButton: false,
            timer: 2000,
          })
        })
    }
  },
  {
    path: "/material_type",
    name: "material_type",
    component: materialType,
    props: true,
    beforeEnter: async () => {
      service.get_all_selection_in_type(GStore.currentSelectiontype).then((response) => {
        GStore.currentMaterialType = response.data;

        console.log(GStore.currentMaterialType)
      })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "โปรดลองอีกครั้งภายหลัง",
            showConfirmButton: false,
            timer: 2000,
          })
        })
    }
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
    beforeEnter: async () => {
      try {
        const response1 = await service.get_all_project(GStore.currentUser.user_id, 1);
        GStore.active_project = response1.data;
        console.log(GStore.active_project)
        const response2 = await service.get_all_project(GStore.currentUser.user_id, 0);
        GStore.inactive_project = response2.data;
        console.log(GStore.inactive_project)
      } catch {
        GStore.active_project = null;
        GStore.inactive_project = null;
        console.log('cannot load user');
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        })
      }
    }
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
    beforeEnter: async () => {
      try {
        const response4 = await service.get_all_materials();
        localStorage.setItem("external", JSON.stringify(response4.data));
        var provinceAbc = GStore.currentMaterial.filter(d => d.material_name === 'อิฐมอญ ขนาด 7x 16 x 3.5 ซม.');
        console.log(provinceAbc)
      } catch {
        GStore.currentMaterial = null;
        console.log('cannot load data');
      }
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
    beforeEnter: async () => {
      try {
        const response1 = await service.get_all_waiting_user();
        GStore.waiting_user = response1.data;
        const response2 = await service.get_all_active_contractor();
        GStore.active_user = response2.data;
      } catch {
        GStore.waiting_user = null;
        GStore.active_user = null;
        console.log('cannot load user');
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          this.$router.go();
        });
      }

    }

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
    path: "/total_material_selection",
    name: "total_material_selection",
    component: totalMaterialSelection,
    beforeEnter: async () => {
      try {
        const response1 = await service.total_material_selection(GStore.current_project);
        GStore.total_material = response1.data[0].total;
      } catch {
        GStore.total_material = null;
        console.log('cannot load user');
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        })
      }
    }
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
    path: "/showcase",
    name: "showcase",
    component: showcase,
  },
  {
    path: "/form",
    name: "form",
    component: form,
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
