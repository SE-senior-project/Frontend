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
  patient: null,
  user: null,
  item: null,
  Keepdata: [],
  Deldata: [],
  waiting_user:null,
  active_user:null,
  currentUser:  JSON.parse(localStorage.getItem("user")),
});
