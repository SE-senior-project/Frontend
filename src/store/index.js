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
  currentUser: null,
  currentUserid: null,
  currentmarkdata: null,
});
