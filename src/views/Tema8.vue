<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Estrategias DEVOPS 
 
      
    .row.container.justify-content-around.align-items-center
        .row 
          .col-lg-5.fondo-der-tarj1-tema8
        
            figure
                img(data-aos="fade-right")(src='@/assets/curso/temas/img1-tema8.png', alt='Texto que describa la imagen').img-tarj1-tema8


          .col-lg-7.fondo-izq-tarj1-tema8

            p.txt-blanco-tarj1-tema8.p-3 Hoy en día, el término de DevOps es común en el mundo del desarrollo de software. Dev se refiere a los desarrolladores, quienes construyen la parte funcional del proyecto final; mientras que Ops se refiere a los procesos para el despliegue del software y la infraestructura ligada al desarrollo y dicho despliegue. En los proyectos actuales la infraestructura está relacionada con arquitecturas Cloud o en la nube.
            p.txt-tarj1-tema8.p-3 DevOps no es un rol, es una metodología de trabajo que ayuda a la organización de los equipos de desarrollo de software, y no solo desarrolladores, sino todos los interesados en el proyecto que se esté desarrollando, para llevar a cabo la construcción de aplicaciones software de calidad. DevOps incluye metodologías ágiles como Scrum y una serie de buenas prácticas.

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row.container
          p.txt-devops-tema8.p-3 Imagen: ciclo herramientas tecnológicas usadas en Devops.
        
          figure
                img(src='@/assets/curso/temas/img-fondo-tarj2-tema8.png', alt='Texto que describa la imagen').img-fondo-tarj2-tema8

          .col-lg-12
              
              figure
                img(src='@/assets/curso/temas/img-devops-tema8.png', alt='Texto que describa la imagen').img-devops-tema8

    br
    br
    br
    br
    br
    
    .row.container.justify-content-around.align-items-center

        .row.container
          .col-lg-8
            .cuadro-texto-tema8
            .bloque-texto-f.pt-4.px-5.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto Medium (2022), nos brinda un par de conceptos, de forma bastante acertada:
                br
                br
                p Integración continua (CI): “La CI, Integración Continua, Continuous Integration, es la revisión que del código que se lleva a cabo cada vez que sube el código a los remotos (pushes al poder) y también cada vez que se abren pull requests.”
                br
                br
                p Despliegue continuo (CD): “Continuos Deployment, CD o Despliegue Continuo consiste en que el código esté preparado en cualquier momento para ser desplegado.”
                br
                br
                p Se puede revisar el siguiente enlace para más detalle: 

          .col-lg-4
              
              figure
                img(src='@/assets/curso/temas/img-final-tema8.png', alt='Texto que describa la imagen').img-final-tema8

        .row
          .col-lg-6.anexo-final-tema8
            a.anexo.mb-4.mb-lg-0(href="https://medium.com/dottech/qu%C3%A9-es-devops-y-por-qu%C3%A9-es-tan-importante-427fbfc81136" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web. https://medium.com/dottech/qu%C3%A9-es-devops-y-por-qu%C3%A9-es-tan-importante-427fbfc81136

    br

    .row.container.justify-content-around.align-items-center
        
        .row 
          .col-lg-6.cajon-color-final
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
