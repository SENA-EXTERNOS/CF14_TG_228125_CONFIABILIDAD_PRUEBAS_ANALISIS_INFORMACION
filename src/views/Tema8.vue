<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Estrategias DEVOPS


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t8/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hoy en día, el término de DevOps es común en el mundo del desarrollo de software. Dev se refiere a los desarrolladores, quienes construyen la parte funcional del proyecto final; mientras que Ops se refiere a los procesos para el despliegue del software y la infraestructura ligada al desarrollo y dicho despliegue. En los proyectos actuales la infraestructura está relacionada con arquitecturas Cloud o en la nube.
        br
        br
        p DevOps no es un rol, es una metodología de trabajo que ayuda a la organización de los equipos de desarrollo de software, y no solo desarrolladores, sino todos los interesados en el proyecto que se esté desarrollando, para llevar a cabo la construcción de aplicaciones software de calidad. DevOps incluye metodologías ágiles como Scrum y una serie de buenas prácticas.


    .bg1svg.my-5
      .py-5
        p Imagen: ciclo herramientas tecnológicas usadas en Devops.

        .row.justify-content-center
          .col-lg-7
            figure
              img(src='@/assets/curso/temas/img-devops-tema8.png')



    .row.align-items-center
      .col-lg-8
        .bloque-texto-f.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right

          p Medium (2022), nos brinda un par de conceptos, de forma bastante acertada:

          p.mb-4 #[b Integración continua (CI):] “La CI, Integración Continua, #[i Continuous Integration], es la revisión que del código que se lleva a cabo cada vez que sube el código a los remotos (pushes al poder) y también cada vez que se abren #[i pull requests].”

          p #[b Despliegue continuo (CD):] “#[i Continuos Deployment], CD o Despliegue Continuo consiste en que el código esté preparado en cualquier momento para ser desplegado.”




      .col-lg-4

          figure.d-none.d-lg-block
            img(src='@/assets/curso/temas/img-final-tema8.png', alt='Texto que describa la imagen').img-final-tema8



    .row.justify-content-center.my-5
      .col-lg-6
        .cajon.color-acento-contenido.p-4
          p La entrega y el despliegue continuo son dos términos vienen íntimamente ligados, expresado en uno solo como: CI/CD.




</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Peticiones HTTP:',
        texto:
          'mensajes enviados por un cliente para iniciar una acción en el servidor.',
        imagen: require('@/assets/curso/temas/img1-slider-tema7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Respuestas HTTP:',
        texto:
          'mensaje que envía el servidor al cliente tras haber recibido una petición o HTTP request.',
        imagen: require('@/assets/curso/temas/img2-slider-tema7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        //titulo: 'Peticiones HTTP:',
        texto:
          'El método POST suele usarse también cuando se envía información mediante formularios. Normalmente, la petición realizada es de este tipo. Cuando se hace clic en el botón de “ingresar” se enviará una petición POST (en este caso), con esta información. En el inspector del navegador (opción “red”) se puede observar.',
        imagen: require('@/assets/curso/temas/img1-slider2-tema7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Respuestas HTTP:',
        texto:
          'En esta imagen se puede ver que a la URL descrita de <em>login</em>, se le envió una petición post.',
        imagen: require('@/assets/curso/temas/img2-slider2-tema7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Respuestas HTTP:',
        texto:
          'En esta imagen, se puede ver la información que se envió por el formulario. ',
        imagen: require('@/assets/curso/temas/img3-slider2-tema7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
