<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.container.justify-content-around.align-items-center

      .row.fondo-img-tar-introd
          .col-lg-12
          
              p Aprendiz, reciba una cordial bienvenida al componente formativo Planificación de actividades para el mantenimiento de la infraestructura tecnológica. En la actualidad hay grandes avances en la tecnología, lo que ha permitido que equipos servidores que ocupaban un cuarto completo para procesar datos, ahora estén en espacios pequeños, y que a su vez puedan ofrecer varios “servicios” según sea el caso.
              p ¡Muchos éxitos en esta nueva etapa!

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

        figure
          .video
            iframe(data-aos="zoom-out")(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    
    
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
