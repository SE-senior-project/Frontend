import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GStore from "./store";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "./plugin/font.js";

createApp(App)
  .provide("GStore", GStore)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
