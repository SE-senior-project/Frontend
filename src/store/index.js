// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import { reactive } from "vue";
export default reactive({
  flashMessage: "",
  waiting_user:null,
  total_material:null,
  active_user:null,
  active_project:null,
  inactive_project:null,
  current_project: JSON.parse(localStorage.getItem("project_id")),
  currentUser:  JSON.parse(localStorage.getItem("user")),
  // currentUser_fail: false,
  currentMaterial: JSON.parse(localStorage.getItem("external")),
  currentSelectionCategory: null,
  currentSelectiontype: null,
  CurrentSelectionCategory: null,
  currentMaterialType:null,
  searchResult:null
});
