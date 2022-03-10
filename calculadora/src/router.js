import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView";
import PxFiguras from "./views/PxFiguras.vue";
import PxTriangulo from "./components/PxTriangulo.vue";
import PxCuadrado from "./components/PxCuadrado.vue";
import PxCirculo from "./components/PxCirculo.vue";

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
    {
      path: "/figuras/triangulo",
      name: "triangulo",
      component: PxTriangulo,
    },
    {
      path: "/figuras/cuadrado",
      name: "cuadrado",
      component: PxCuadrado,
    },
    {
      path: "/figuras/circulo",
      name: "circulo",
      component: PxCirculo,
    },
  ],
});
