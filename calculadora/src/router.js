import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView";
import PxFiguras from "./views/PxFiguras.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/figuras",
      name: "figuras",
      component: PxFiguras,
    },
  ],
});
