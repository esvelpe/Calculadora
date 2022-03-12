<template>
  <div>
    <div v-if="propiedades.includes('area')">
      AREAAA Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sit
      ab quas quidem nihil autem, commodi doloribus fuga voluptas quibusdam ex
      cum reprehenderit architecto. Illo reiciendis aliquam omnis beatae
      voluptatibus!
    </div>
    <div v-if="propiedades.includes('perimetro')">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sint
      voluptatem ea cumque neque laudantium nisi nulla reiciendis non. Animi
      labore reiciendis repellendus obcaecati. Molestias odit doloribus neque ad
      suscipit.
    </div>
  </div>
</template>
<script>
export default {
  name: "PxTriangulo",
  props: {
    propiedades: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
