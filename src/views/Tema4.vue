<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Librerías
 
      
    .row.container.justify-content-around.align-items-center

        .tarjeta.fondo-slider-tema4.p-4
          
          figure
              img(src='@/assets/curso/temas/img-fondo-slider-tema4.png', alt='Texto que describa la imagen').img-fondo-slider-tema4
          
          
          SlyderA(tipo="b")

            .row.justify-content-center.align-items-center.my-lg-4
      
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-mongoose-tema4.png', alt='Texto que describa la imagen').img-slider-tema4
                  //figcaption Leyenda de la imagen

              .col-md-6.mb-4.mb-md-0
                h4 Mongoose
                p Es una librería de Javascript, comúnmente usada para realizar conexión a base de datos con el motor MongoDB y manipulación de datos o colecciones almacenadas. Se usará más adelante.


            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-bootstrap-tema4.png', alt='Texto que describa la imagen').img-slider-tema4
                  //figcaption Leyenda de la imagen

              .col-md-6.mb-4.mb-md-0
                h4 Bootstrap
                p Generalmente es usado para dar estilo a las interfaces gráficas de usuario.


            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-react-tema4.png', alt='Texto que describa la imagen').img-slider-tema4
                  //figcaption Leyenda de la imagen

              .col-md-6.mb-4.mb-md-0
                h4 ReactJS
                p Esta librería está orientada principalmente al frontend, para la construcción de interfaces gráficas de usuario. Es propiedad de Facebook. Su web oficial está en: 

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
