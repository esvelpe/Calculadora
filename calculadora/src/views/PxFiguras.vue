<template>
  <div class="contenedor">
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
          <b-nav-item @click="toggleTriangulo" exact exact-active-class="active"
            >Triángulo</b-nav-item
          >
          <b-nav-item to="/figuras/cuadrado" exact exact-active-class="active"
            >Cuadrado</b-nav-item
          >
          <b-nav-item to="/figuras/circulo" exact exact-active-class="active"
            >Círculo</b-nav-item
          >
        </b-nav>
      </b-card-header>

      <b-card-body>
        <b-card-text>
          <px-triangulo v-if="showTriangulo" />
        </b-card-text>
        <!-- <router-view></router-view> -->
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import PxTriangulo from "../components/PxTriangulo.vue";

export default {
  components: { PxTriangulo },
  name: "PxFiguras",

  data() {
    return {
      showTriangulo: false,
    };
  },

  methods: {
    toggleTriangulo() {
      this.showTriangulo = !this.showTriangulo;
    },
  },
};
</script>

<style scoped>
.contenedor {
  margin-top: 5%;
}
</style>
