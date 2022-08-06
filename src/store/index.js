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
  ////// auth ///////////
  currentUser: JSON.parse(localStorage.getItem("user")),
  waiting_user: null,
  ///// admin ///////////////
  // currentExternalMonth: JSON.parse(localStorage.getItem("month")),
  total_material: null,
  active_user: null,
  active_project: null,
  inactive_project: null,
  /////////// project /////////
  current_project: JSON.parse(localStorage.getItem("project_id")),
  currentMaterial: JSON.parse(localStorage.getItem("external")),
  currentSelectionCategory: null,
  currentSelectiontype: null,
  currentMaterialCategory: null,
  currentMaterialType: null,
  searchResult: null,
  ////// BOQ ////////////
  CurrentBOQUSE: null,
  CurrentTotalBOQlist: null,
  currentBOQ:null,
  currentShowView:null,
  currentCustomerView:null,
  currentLastBOQId:null
});
