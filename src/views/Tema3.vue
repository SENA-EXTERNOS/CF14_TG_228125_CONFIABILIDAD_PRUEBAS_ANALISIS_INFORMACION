<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Frameworks</em>

      
    .row.container.justify-content-around.align-items-center
      
      .row 

        .col-lg-6.fondo-tarj1-tema3
            .img-fondo-tarj1-tema3
            figure
                img(data-aos="fade-up-right")(src='@/assets/curso/temas/img1-tema3.png', alt='Texto que describa la imagen').img1-tema3


        .col-lg-6.fondo-der-tarj1-tema3(data-aos="fade-left").p-4
            p.txt-blanco-tarj1-tema3.p-3 Para empezar, hay que aclarar que los lenguajes de programación son aquellos que con su sintaxis pueden escribir líneas de códigos que planteen un algoritmo; su principal uso es crear aplicaciones software para distintos propósitos: escritorio, web, móvil, etc.  Con un lenguaje de programación se pueden crear librerías y reutilizar una o varias funcionalidades en los diferentes proyectos que se requiera. Con un buen conjunto de librerías, buenas prácticas e incluso patrones de diseño, se pueden crear <em>frameworks</em> que aceleran la construcción de un producto software. 
            p.txt2-tarj1-tema3 El término de <em>framework</em> (marco de trabajo), en general, es algo que indica qué hacer, pero no el cómo, así que es posible adaptarlo según la necesidad y definir el cómo.

    separador

    br

    
    .row.container.justify-content-around.align-items-center

        #sistemas-distribuidos
        .titulo-segundo.color-acento-contenido
          h2 3.1 Tipos y Características
        
        p Existen <em>frameworks</em> (marcos de trabajo) para la mayoría de los lenguajes de programación más populares en la industria. Enfoquémonos en algunos de los <em>frameworks</em> más usados para el desarrollo Web.

        .tarjeta.container.tarjeta--azul.p-4
          
          figure
              img(src='@/assets/curso/temas/img-fondo-slider-tema3.png', alt='Texto que describa la imagen').img-fondo-slider-tema3
         
          
          SlyderA(tipo="b")

            .row.justify-content-center.align-items-center.my-lg-4

              .col-md-6.mb-4.mb-md-0
                .txt-slider-tema3
                  h4 Express.JS
                  p Usado para facilitar la creación de API en el entorno de Ejecución de NodeJS. Nos servirá de mucho uso para una rápida y fácil creación de las API REST.
                  p Su web oficial se encuentra en: 
                  a.anexo.mb-4.mb-lg-0(href="https://expressjs.com/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. https://expressjs.com/

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-expresjs-tema3.png', alt='Texto que describa la imagen').img-frameworks-tema3
                  //figcaption Leyenda de la imagen

            .row.justify-content-center.align-items-center.my-lg-4
            
              .col-md-6.mb-4.mb-md-0
                .txt-slider-tema3
                  h4 Spring Boot
                  p Es un <em>framework</em> para el desarrollo de aplicaciones web robustas del lado del servidor (backend). Usa principalmente el lenguaje de programación Java; a este están ligados diferentes conceptos, y para su entendimiento, se requiere de una curva de aprendizaje relativamente alta. Se puede detallar más información en su web oficial
                  a.anexo.mb-4.mb-lg-0(href="https://spring.io/projects/spring-boot/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. https://spring.io/projects/spring-boot/

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-spring-boot-tema3.png', alt='Texto que describa la imagen').img-frameworks-tema3
                  //figcaption Leyenda de la imagen


            .row.justify-content-center.align-items-center.my-lg-4
            
              .col-md-6.mb-4.mb-md-0
                .txt-slider-tema3
                  h4 Angular
                  p Su propósito principal es trabajar en la capa de frontend, crear interfaces gráficas de usuario y conectarlas con un backend. Es propiedad de Google. Inicialmente se creó la versión 1 (AngularJS), que se podría considerar una librería de Javascript. Luego emergió Angular 2 con el lenguaje de programación Typescript, después la versión 3 y así sucesivamente; y hoy se llama Angular. Su web oficial: 
                  a.anexo.mb-4.mb-lg-0(href="https://angular.io/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. https://angular.io/ 

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-angular-tema3.png', alt='Texto que describa la imagen').img-frameworks-tema3
                  //figcaption Leyenda de la imagen
            
            .row.justify-content-center.align-items-center.my-lg-4
            
              .col-md-6.mb-4.mb-md-0
                .txt-slider-tema3
                  h4 Django
                  p Es un <em>framework</em> para trabajar proyectos con el lenguaje de programación Python. Su web oficial es: 
                  a.anexo.mb-4.mb-lg-0(href="https://www.djangoproject.com/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. https://www.djangoproject.com/

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-django-tema3.png', alt='Texto que describa la imagen').img-frameworks-tema3
                  //figcaption Leyenda de la imagen

            .row.justify-content-center.align-items-center.my-lg-4
            
              .col-md-6.mb-4.mb-md-0
                .txt-slider-tema3
                  h4 Flask
                  p Al igual que Django, es un <em>framework,</em> apropiado para crear aplicaciones usando el lenguaje Python. Su web oficial se encuentra en: 
                  a.anexo.mb-4.mb-lg-0(href="https://flask.palletsprojects.com/en/2.2.x/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. https://flask.palletsprojects.com/en/2.2.x/

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-flask-tema3.png', alt='Texto que describa la imagen').img-frameworks-tema3
                  //figcaption Leyenda de la imagen


            .row.justify-content-center.align-items-center.my-lg-4
            
              .col-md-6.mb-4.mb-md-0
                .txt-slider-tema3
                  h4 Ruby On Rails
                  p Ruby on Rails, es un <em>framework</em> para realizar proyectos con el lenguaje de programación Ruby. Puedes ampliar más información en su web oficial: 
                  a.anexo.mb-4.mb-lg-0(href="https://rubyonrails.org/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. https://rubyonrails.org/

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
