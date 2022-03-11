<template>
  <main>
    <b-container class="container mt-5">
      <b-row>
        <b-col md="6">
          <b-card
            style="max-width: 30rem"
            header="Figuras geométricas"
            header-bg-variant="info"
            class="mb-5"
          >
            <b-card-text>
              Acá podrás calcular las propiedades básicas de las figuras
              geométricas que prefieras.
            </b-card-text>
            <b-button variant="primary" to="/figuras"> Calcular </b-button>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card
            style="max-width: 30rem"
            header="Estadística"
            header-bg-variant="info"
          >
            <b-card-text>
              Acá podrás calcular todo lo relacionado con la estadística
              descriptiva para un arreglo de elementos que proveas
            </b-card-text>
            <b-button variant="primary"> Calcular </b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-card
            style="max-width: 30rem"
            header="Algebra lineal"
            header-bg-variant="info"
          >
            <b-card-text>
              Acá podrás calcular operaciones básicas del álgebra entre vectores
              que proveas
            </b-card-text>
            <b-button variant="primary"> Calcular </b-button>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card
            style="max-width: 30rem"
            header="Ecuaciones diferenciales"
            header-bg-variant="info"
          >
            <b-card-text>
              Acá podrás seleccionar el tipo de ecuación diferencial y después
              ingresar sus coeficientes para solucionar la ecuación diferencial
            </b-card-text>
            <b-button variant="primary"> Calcular </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.container {
  margin: 10% auto;
}
</style>
