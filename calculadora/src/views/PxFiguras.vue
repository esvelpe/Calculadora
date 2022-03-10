<template>
  <div class="contenedor">
    <b-card title="Card Title" body-class="text-center" header-tag="nav">
      <template #header>
        <b-nav card-header tabs>
          <b-nav-item>Triángulo</b-nav-item>
          <b-nav-item>Cuadrado</b-nav-item>
          <b-nav-item>Círculo</b-nav-item>
        </b-nav>
      </template>

      <b-card-text>
        With supporting text below as a natural lead-in to additional content.
      </b-card-text>

      <b-button variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PxFiguras",
};
</script>

<style scoped>
.contenedor {
  margin-top: 10%;
}
</style>
