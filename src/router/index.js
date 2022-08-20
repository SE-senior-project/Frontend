import { createRouter, createWebHistory } from "vue-router";
import service from "../services/OneMeasureService";
import GStore from "@/store";
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
import materialTypeSearch from "../views/pm/MaterialTypeSearch.vue";
//BOQ//
import boqTemplate from "../views/boq/BOQTemplate.vue";
import boqTemplateSelection from "../views/boq/BOQTemplateSelection.vue";
import boqConfirmation from "../views/boq/BOQConfirmation.vue";
import showTemplate from "../views/boq/ShowTemplate.vue";
import bogGen from "../views/boq/BOQGen.vue";
//Checklist//
import checklist from "../views/checklist/Checklist.vue";
import list from "../views/checklist/List.vue";

import showcase from "../views/Showcase.vue";
import form from "../views/Form.vue";
import Swal from "sweetalert2";
const routes = [
  {
    path: "/checklist",
    name: "checklist",
    component: checklist,
    beforeEnter: async () => {
      try {
        const checkList = await service.get_checklist();
        GStore.allCheckList = checkList.data;
        const selecTask= await service.get_select_task(GStore.current_project);
        GStore.selectTask = selecTask.data;
      } catch {
        GStore.allCheckList = null;
        GStore.selectTask = null;
        console.log("cannot load checklist");
        // Swal.fire({
        //   icon: "error",
        //   title: "โปรดลองอีกครั้งภายหลัง",
        //   showConfirmButton: false,
        //   timer: 2000,
        // }).then(() => {
        //   this.$router.go();
        // });
      }
    },
  },
  {
    path: "/list/:id",
    name: "list",
    component: list,
    beforeEnter: async (to) => {
      try {
        const allList = await service.get_list(to.params.id);
        GStore.allList = allList.data;
      } catch {
        GStore.allList = null;
        console.log("cannot load list");
        // Swal.fire({
        //   icon: "error",
        //   title: "โปรดลองอีกครั้งภายหลัง",
        //   showConfirmButton: false,
        //   timer: 2000,
        // }).then(() => {
        //   this.$router.go();
        // });
      }
    },
  },
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
      console.log(GStore.currentSelectionCategory);
      service
        .get_all_selection_type(GStore.currentSelectionCategory)
        .then((response) => {
          GStore.currentMaterialCategory = response.data;
          // console.log(GStore.currentMaterialType)
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "โปรดลองอีกครั้งภายหลัง",
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
  },
  {
    path: "/material_type",
    name: "material_type",
    component: materialType,
    props: true,
    beforeEnter: async () => {
      service
        .get_all_selection_in_type(GStore.currentSelectiontype)
        .then((response) => {
          GStore.currentMaterialType = response.data;

          console.log(GStore.currentMaterialType);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "โปรดลองอีกครั้งภายหลัง",
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
  },
  {
    path: "/material_type_search",
    name: "material_type_search",
    component: materialTypeSearch,
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
        const response1 = await service.get_all_project(
          GStore.currentUser.user_id,
          1
        );
        GStore.active_project = response1.data;
        console.log(GStore.active_project);
        const response2 = await service.get_all_project(
          GStore.currentUser.user_id,
          0
        );
        GStore.inactive_project = response2.data;
        console.log(GStore.inactive_project);
      } catch {
        GStore.active_project = null;
        GStore.inactive_project = null;
        console.log("cannot load user");
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
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
        // console.log(typeof (GStore.currentMaterial[0].material_name));
        // var provinceAbc = GStore.currentMaterial.filter(d => d.material_name === 'อิฐมอญ ขนาด 7x 16 x 3.5 ซม.');
        // console.log(provinceAbc)
      } catch {
        GStore.currentMaterial = null;
        console.log("cannot load data");
      }
    },
  },
  {
    path: "/boq_template",
    name: "boq_template",
    component: boqTemplate,
    beforeEnter: async () => {
      try {
        const currentBOQ = await service.get_BOQ(GStore.current_project);
        GStore.currentBOQ = currentBOQ.data;
      } catch {
        GStore.currentBOQ = null;
        console.log("cannot load user");
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          this.$router.go();
        });
      }
    },
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
        console.log("cannot load user");
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          this.$router.go();
        });
      }
    },
  },
  {
    path: "/manage_account",
    name: "manage_account",
    component: manageAccount,
  },
  {
    path: "/boq_gen/:id",
    name: "boq_gen",
    component: bogGen,
    beforeEnter: async (to) => {
      try {
        const response_current_BOQ_list = await service.get_BOQ_list_selection(
          parseInt(to.params.id)
        );
        GStore.CurrentBOQUSE = response_current_BOQ_list.data;
        GStore.generateId = parseInt(to.params.id)
        // console.log(GStore.CurrentBOQUSE)
        var sumation = 0;
        GStore.CurrentBOQUSE.forEach(
          (element) => (sumation = sumation + element.total_price)

        );
        GStore.CurrentTotalBOQlist = sumation;
      } catch {

        console.log(GStore.CurrentBOQUSE)
        console.log(GStore.CurrentTotalBOQlist)
      }
    },
  },
  {
    path: "/total_material_selection",
    name: "total_material_selection",
    component: totalMaterialSelection,
    beforeEnter: async () => {
      try {
        const response1 = await service.total_material_selection(
          GStore.current_project
        );
        GStore.total_material = response1.data[0].total;
      } catch {
        GStore.total_material = null;
        console.log("cannot load user");
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  {
    path: "/boq_template_selection/:id",
    name: "boq_template_selection",
    component: boqTemplateSelection,
    beforeEnter: async (to) => {
      try {
        console.log(parseInt(to.params.id));
        const response_current_select_BOQ = await service.get_BOQ_list_selection(
          parseInt(to.params.id)
        );
        GStore.CurrentBOQUSE = response_current_select_BOQ.data;
        console.log(GStore.CurrentBOQUSE);
        var sumation = 0;
        GStore.CurrentBOQUSE.forEach(
          (element) => (sumation = sumation + element.total_price)

        );
        GStore.CurrentTotalBOQlist = sumation;


      } catch {
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  {
    path: "/boq_confirmation/:id",
    name: "boq_confirmation",
    component: boqConfirmation,
    beforeEnter: async (to) => {
      try {
        const response_current_BOQ_list = await service.get_BOQ_list_selection(
          parseInt(to.params.id)
        );
        GStore.CurrentBOQUSE = response_current_BOQ_list.data;
        var sumation = 0;
        GStore.CurrentBOQUSE.forEach(
          (element) => (sumation = sumation + element.total_price)

        );
        GStore.CurrentTotalBOQlist = sumation;
      } catch {

      }
    },
  },
  {
    path: "/show_template/:id",
    name: "show_template",
    component: showTemplate,
    beforeEnter: async (to) => {
      try {
        console.log(parseInt(to.params.id));
        const response_current_select_customer_view = await service.get_BOQ_list_selection(
          parseInt(to.params.id)
        );
        GStore.currentShowView = response_current_select_customer_view.data;
        console.log(GStore.currentShowView);
        var sumation = 0;
        GStore.currentShowView.forEach(
          (element) => (sumation = sumation + element.total_price)

        );
        GStore.CurrentTotalBOQlist = sumation;
      } catch {
        Swal.fire({
          icon: "error",
          title: "โปรดลองอีกครั้งภายหลัง",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
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
