<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    p.mb-4 Estimado aprendiz, bienvenido al presente componente formativo con el que fortalecerá habilidades asociadas a los lenguajes de programación, conocerá algunas de las librerías y #[i frameworks] más usados en la actualidad y podrá aprender sobre algunos lenguajes de programación como Java y JavaScript, para explicar algunos conceptos de gran importancia como  la programación orientada a objeto y sus pilares fundamentales, las interfaces, las variables, constantes, métodos, nomenclaturas y sintaxis de estos lenguajes y pruebas funcionales. Además, se hablará de la filosofía de #[i DevOps] y sus buenas prácticas. Esperamos que esta ruta de aprendizaje sea de su agrado.
    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


    .row.justify-content-center.mb-5
      .col-lg
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/wUn1CTmR4DQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
