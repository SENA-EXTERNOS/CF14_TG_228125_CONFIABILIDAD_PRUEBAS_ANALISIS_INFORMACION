<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tecnologías de programación

    
    .row.container.justify-content-around.align-items-center
      
      p Cuando se habla de tecnologías de programación se refiere a los lenguajes de programación que se pueden utilizar para el desarrollo de software, así como las diferentes herramientas y frameworks que se pueden aplicar.
      p Entre ellas podemos encontrar las siguientes:

    .row.container.justify-content-around.align-items-center
      figure
          img(src='@/assets/curso/temas/img-fondo-slider-tema2.png', alt='Texto que describa la imagen').img-fondo-slider-tema2

      
    
      SlyderB.mb-5(:datos="datosSlyder").bloque-slider1-tema2
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        
        .row 
          .col-lg-8
          
            h3 Tecnologías del lado del servidor
            
            p Las tecnologías del lado del servidor o también llamadas backend son las que tienen como objetivo implementar los comportamientos que tendrá la web en el servidor, es decir, sus peticiones, cómo se tratan, cómo se consume la capa de datos, etc. 
            p Veamos en el siguiente anexo algunas de las tecnologías para desarrollo web más populares.
            
            .col-lg-6.anexo-final-tema2
              a.anexo.mb-4(:href="obtenerLink('/downloads/Tecnologías para el desarrollo web.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Tecnologías para desarrollo web.

          .col-lg-4
              figure
                img(src='@/assets/curso/temas/img-final-tema2.png', alt='Texto que describa la imagen').img-final-tema2

        

    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'JavaScript',
        texto:
          'Es una de las tecnologías web más usadas, permite dar una mayor interactividad y dinamismo a los sitios web. Entre sus distintas funcionalidades se puede crear tanto animaciones como objetos, localizar errores en formularios, cambiar elementos web de manera intuitiva, crear cookies…, Además, permite desarrollar aplicaciones tan potentes como Facebook o Twitter. Por esto, JavaScript es una de las mejores tecnologías para desarrollo web de la actualidad.',

        imagen: require('@/assets/curso/temas/img1-slider-tema2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'HTML',
        texto:
          'Es el lenguaje de marca o etiquetas utilizado para la creación de sitios web. Con HTML se realiza la estructura del sitio, su maquetación a través de etiquetas que permiten la organización de contenido. HTML permite a los desarrolladores frontend describir, estructurar o maquetar el contenido del sitio web, como es su información a través de párrafos, imágenes, listas, tablas, barras de menú, etc.',
        imagen: require('@/assets/curso/temas/img2-slider1-tema2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'CSS',
        texto:
          'CSS es la hoja de estilos en cascada que posibilita agregar diseño a las páginas web o desarrollo de aplicaciones web. Haciendo una analogía, el HTML es como hacer la estructura de la casa y el CC ya permite estucar, colocar baldosa, etc.',
        imagen: require('@/assets/curso/temas/img3-slider-tema2.png'),
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
