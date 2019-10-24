import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "chart.js";
import Vuelidate from "vuelidate";
// import Vuelidate from "vuelidate";
// import { store } from "./store/store";
// import firebase from "firebase";
import Vuex from "vuex";

Vue.use(Vuex)

// window.eventBus = new Vue()

Vue.config.productionTip = false;
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(Vuelidate);


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
