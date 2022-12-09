<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Librerías
 
      
    .row.container.justify-content-around.align-items-center

        .row 
          .col-lg-5.fondo--izq-tarj1-tema5
              figure
                img(data-aos="flip-down")(src='@/assets/curso/temas/img1-tema5.png', alt='Texto que describa la imagen').img1-tema5

          .col-lg-7.fondo--der-tarj1-tema5(data-aos="flip-down").p-3
              p.txt-tarj1-tema5 La programación orientada es un paradigma de programación, que toma todo lo que está en el mundo circundante y lo mira como un objeto. 
              p.txt-tarj1-tema5 Existen cuatro principales pilares para que algo se considere orientado a Objetos:
              ul.lista-ul.txt-tarj1-tema5
                li 
                  i.lista-ul__vineta
                  | Abstracción.
                li 
                  i.lista-ul__vineta
                  | Polimorfismo.
                li 
                  i.lista-ul__vineta
                  | Encapsulamiento.
                li 
                  i.lista-ul__vineta
                  | Herencia.

    br
    br

    .row.container.justify-content-around.align-items-center

      .row
          
          figure
              img(src='@/assets/curso/temas/img-fondo-tarj2-tema5.png', alt='Texto que describa la imagen').img-fondo-tarj2-tema5

          .col-lg-12
              p.txt-java-tema5.p-4 El lenguaje de programación Java actualmente es propiedad del gigante de Oracle. Es, por excelencia, orientado a objetos y permite crear cualquier tipo de aplicación.
              
              figure
                img(src='@/assets/curso/temas/img-java-tema5.png', alt='Texto que describa la imagen').img-java-tema5

    separador
    br            

    .row.container.justify-content-around.align-items-center
        
        #nomenclatura
        .titulo-segundo.color-acento-contenido
          h2 5.1  Nomenclatura

        .row
          .col-lg-10.bloque-cajon-color-tema5
            .cajon.color-acento-botones.p-4
              p Java utiliza camelCase para el nombramiento de sus clases, interfaces, métodos y variables. CamelCase es una nomenclatura o forma de escribir nombres, cabe destacar que esta nomenclatura no es obligatoria, pero es una forma de organizar su código y trabajar con buenas prácticas de programación en Java. Dicha nomenclatura puede variar dependiendo del lenguaje de programación con el que se trabaje, no es la misma para todos-Veamos en el siguiente anexo algunos ejemplos:
            
            .col-lg-6.anexo-tema5
              a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p Enlace web. Ejemplos nomenclatura
       
       
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
