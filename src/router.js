import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import dashboard from "./views/Dashboard.vue";
import profile from "./views/Profile.vue";
// import { settings } from "cluster";
import gallery from "./views/Gallery.vue";
import aboutus from "./views/AboutUs.vue";
import setting from "./views/Setting.vue";
import upgradepro from "./views/UpgradePro.vue";
import forms from "./views/Forms.vue";
import report from "./views/Report.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: dashboard
    },
    {
      path: "/about",
      name: "about"
    },
    {
      path: "/profile",
      component: profile
    },
    {
      path: "/gallery",
      component: gallery
    },
    {
      path: "/aboutus",
      component:aboutus
    },
    {
      path: "/setting",
      component: setting
    },
    {
      path: "/upgradepro",
      component: upgradepro
    },
    {
      path: "/forms",
      component: forms
    },
    {
      path: "/report",
      component: report
    }
  ]
});
