import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GStore from "./store";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/services/AxiosInterceptorSetup.js'
import { FontAwesomeIcon } from "./plugin/font.js";
import "./index.css";

createApp(App)
  .provide("GStore", GStore)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(VueSweetalert2)
  .mount("#app");
