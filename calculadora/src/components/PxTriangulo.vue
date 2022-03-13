<template>
  <div>
    <template>
      <b-container>
        <b-row>
          <b-col cols="7">
            <b-input-group prepend="Lado A">
              <b-form-input
                type="number"
                placeholder="Ingrese lado A"
                v-model="ladoA"
              ></b-form-input>
            </b-input-group>
          </b-col>
          <b-col>
            <span v-if="showArea || showPerimetro"
              ><strong
                >El {{ showArea ? "area" : "perimetro" }} del triángulo
                triángulo es:</strong
              ></span
            >
            <span v-else>
              Seleccione si desea calcular el área o el perímetro del triángulo
            </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="7">
            <b-input-group prepend="Lado B" class="mt-3">
              <b-form-input
                type="number"
                placeholder="Ingrese lado B"
                v-model="ladoB"
              ></b-form-input>
            </b-input-group>
          </b-col>
          <b-col>
            <span v-if="showArea">{{
              area ? area.toFixed(2) : "Los valores que ingresó son incorrectos"
            }}</span>
            <span v-else-if="showPerimetro">{{ perimetro.toFixed(2) }}</span>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="7">
            <b-input-group prepend="Lado C" class="mt-3">
              <b-form-input
                type="number"
                placeholder="Ingrese lado C"
                v-model="ladoC"
              ></b-form-input>
            </b-input-group>
          </b-col>
          <b-col>
            <b-button to="/" pill variant="outline-primary">
              Regresar
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </template>
  </div>
</template>
<script>
export default {
  name: "PxTriangulo",
  data() {
    return {
      ladoA: 0,
      ladoB: 0,
      ladoC: 0,
    };
  },
  props: {
    showArea: {
      type: Boolean,
      default: false,
    },
    showPerimetro: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    area() {
      const S =
        (Number(this.ladoA) + Number(this.ladoB) + Number(this.ladoC)) / 2.0;
      const radicando =
        S *
        (S - Number(this.ladoA)) *
        (S - Number(this.ladoB)) *
        (S - Number(this.ladoC));
      if (radicando >= 0) {
        return Math.sqrt(radicando);
      } else {
        return false;
      }
    },
    perimetro() {
      return Number(this.ladoA) + Number(this.ladoB) + Number(this.ladoC);
    },
  },
};
</script>
