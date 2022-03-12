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
            <span
              ><strong
                >El
                {{ propiedades.includes("area") ? "area" : "perimetro" }} del
                triángulo es:</strong
              ></span
            >
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
            <span v-if="propiedades.includes('area')">{{
              area.toFixed(2)
            }}</span>
            <span v-if="propiedades.includes('perimetro')">{{
              perimetro.toFixed(2)
            }}</span>
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
    propiedades: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    area() {
      const S =
        (Number(this.ladoA) + Number(this.ladoB) + Number(this.ladoC)) / 2;
      const radicando =
        S * (S - this.ladoA) * (S - this.ladoB) * (S - this.ladoC);
      return Math.sqrt(radicando);
    },
    perimetro() {
      return Number(this.ladoA) + Number(this.ladoB) + Number(this.ladoC);
    },
  },
};
</script>
