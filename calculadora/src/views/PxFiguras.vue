<template>
  <div class="contenedor">
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-container>
          <b-row>
            <b-col cols="9">
              <b-nav card-header tabs>
                <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
                <b-nav-item
                  @click="toggleTriangulo"
                  exact
                  exact-active-class="active"
                  >Triángulo</b-nav-item
                >
                <b-nav-item
                  @click="toggleCuadrado"
                  exact
                  exact-active-class="active"
                  >Cuadrado</b-nav-item
                >
                <b-nav-item
                  @click="toggleCirculo"
                  exact
                  exact-active-class="active"
                  >Círculo</b-nav-item
                >
              </b-nav>
            </b-col>
            <b-col>
              <b-dropdown id="drop-down" text="¿Qué quieres calcular?">
                <b-dropdown-item @click="toggleArea"> Área </b-dropdown-item>
                <b-dropdown-item @click="togglePerimetro">
                  Perímetro
                </b-dropdown-item>
              </b-dropdown>
            </b-col>
          </b-row>
        </b-container>
      </b-card-header>

      <b-card-body>
        <b-card-text>
          <px-triangulo
            v-if="showTriangulo"
            :showArea="showArea"
            :showPerimetro="showPerimetro"
          />
          <px-cuadrado
            v-if="showCuadrado"
            :propiedades="propiedades"
          ></px-cuadrado>
          <px-circulo
            v-if="showCirculo"
            :propiedades="propiedades"
          ></px-circulo>
        </b-card-text>
        <!-- <router-view></router-view> -->
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import PxTriangulo from "../components/PxTriangulo.vue";
import PxCuadrado from "../components/PxCuadrado.vue";
import PxCirculo from "../components/PxCirculo.vue";

export default {
  components: { PxTriangulo, PxCuadrado, PxCirculo },
  name: "PxFiguras",

  data() {
    return {
      showTriangulo: true,
      showCuadrado: false,
      showCirculo: false,
      showArea: false,
      showPerimetro: false,
    };
  },

  methods: {
    toggleTriangulo() {
      if (this.showCuadrado || this.showCirculo) {
        if (this.showCuadrado) {
          this.showCuadrado = !this.showCuadrado;
        }
        if (this.showCirculo) {
          this.showCirculo = !this.showCirculo;
        }
        this.showTriangulo = !this.showTriangulo;
      }
    },
    toggleCuadrado() {
      if (this.showTriangulo || this.showCirculo) {
        if (this.showTriangulo) {
          this.showTriangulo = !this.showTriangulo;
        }
        if (this.showCirculo) {
          this.showCirculo = !this.showCirculo;
        }
        this.showCuadrado = !this.showCuadrado;
      }
    },
    toggleCirculo() {
      if (this.showTriangulo || this.showCuadrado) {
        if (this.showTriangulo) {
          this.showTriangulo = !this.showTriangulo;
        }
        if (this.showCuadrado) {
          this.showCuadrado = !this.showCuadrado;
        }
        this.showCirculo = !this.showCirculo;
      }
    },
    toggleArea() {
      this.showArea = !this.showArea;
    },
    togglePerimetro() {
      this.showPerimetro = !this.showPerimetro;
    },
  },
};
</script>

<style scoped>
.contenedor {
  margin-top: 5%;
}
#input-group {
  position: relative;
  bottom: -10%;
  left: -10%;
}
</style>
