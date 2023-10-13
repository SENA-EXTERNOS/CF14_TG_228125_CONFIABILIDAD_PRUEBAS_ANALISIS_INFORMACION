<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Frameworks</em>



    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t3/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para empezar, hay que aclarar que los lenguajes de programación son aquellos que con su sintaxis pueden escribir líneas de códigos que planteen un algoritmo; su principal uso es crear aplicaciones #[em software] para distintos propósitos: escritorio, web, móvil, etc.  Con un lenguaje de programación se pueden crear librerías y reutilizar una o varias funcionalidades en los diferentes proyectos que se requiera. Con un buen conjunto de librerías, buenas prácticas e incluso patrones de diseño, se pueden crear <em>frameworks</em> que aceleran la construcción de un producto #[em software]. El término de #[i framework] (marco de trabajo), en general, es algo que indica #[b qué] hacer, pero no el #[b cómo], así que es posible adaptarlo según la necesidad y definir el cómo.



    h3.mb-4.mt-5
      i.fas.fa-square.cac
      | &nbsp;Tipos y Características

    p Existen <em>frameworks</em> (marcos de trabajo) para la mayoría de los lenguajes de programación más populares en la industria. Enfoquémonos en algunos de los <em>frameworks</em> más usados para el desarrollo web.


    .slyderB_bg_03.p-4.mb-5

      SlyderA(tipo="b")

        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema3
              h4 Express.JS
              p Usado para facilitar la creación de API en el entorno de Ejecución de NodeJS. Nos servirá de mucho uso para una rápida y fácil creación de las API REST.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/img-expresjs-tema3.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen

        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema3
              h4 Spring Boot
              p Es un <em>framework</em> para el desarrollo de aplicaciones web robustas del lado del servidor (<em>Back End</em>). Usa principalmente el lenguaje de programación Java; a este están ligados diferentes conceptos, y para su entendimiento, se requiere de una curva de aprendizaje relativamente alta.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/img-spring-boot-tema3.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen


        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema3
              h4 Angular
              p Su propósito principal es trabajar en la capa de <em>Front End</em>, crear interfaces gráficas de usuario y conectarlas con un <em>Back End</em>. Es propiedad de Google. Inicialmente se creó la versión 1 (AngularJS), que se podría considerar una librería de Javascript. Luego emergió Angular 2 con el lenguaje de programación Typescript, después la versión 3 y así sucesivamente; y hoy se llama Angular.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/img-angular-tema3.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen

        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema3
              h4 Django
              p Es un <em>framework</em> para trabajar proyectos con el lenguaje de programación Python.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/img-django-tema3.png', alt='Texto que describa la imagen')
              //figcaption Leyenda de la imagen

        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema3
              h4 Flask
              p Al igual que Django, es un <em>framework,</em> apropiado para crear aplicaciones usando el lenguaje Python.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/img-flask-tema3.png', alt='Texto que describa la imagen').img-frameworks-tema3
              //figcaption Leyenda de la imagen


        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema3
              h4 Ruby On Rails
              p Ruby on Rails, es un <em>framework</em> para realizar proyectos con el lenguaje de programación Ruby.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/img-ruby-tema3.png', alt='Texto que describa la imagen').img-frameworks-tema3
              //figcaption Leyenda de la imagen

</template>

<script>
export default {
  name: 'Tema3',
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
