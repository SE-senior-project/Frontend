import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GStore from "./store";
import '@/services/AxiosInterceptorSetup.js'
import { FontAwesomeIcon } from "./plugin/font.js";
import "./index.css";

createApp(App)
  .provide("GStore", GStore)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
