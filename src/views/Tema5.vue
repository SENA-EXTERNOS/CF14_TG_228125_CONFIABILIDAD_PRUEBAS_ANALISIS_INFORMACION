<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Codificación en lenguajes de programación



    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t5/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La programación orientada es un paradigma de programación, que toma todo lo que está en el mundo circundante y lo mira como un objeto.

        p Existen cuatro principales pilares para que algo se considere orientado a objetos:

        ul.lista-ul.mt-4
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


    .bg1.my-5
      .py-4

        p.my-5 El lenguaje de programación Java actualmente es propiedad del gigante de Oracle. Es, por excelencia, orientado a objetos y permite crear cualquier tipo de aplicación.

        .row.justify-content-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/img-java-tema5.png', alt='Texto que describa la imagen')



    .bg5.my-5

      h3.mb-4.mt-5
        i.fas.fa-square.cac
        | &nbsp;Nomenclatura

      .py-4
        .row.justify-content-center
          .col-lg-10
            .cajon.color-acento-botones.p-4
              p Java utiliza camelCase para el nombramiento de sus clases, interfaces, métodos y variables. CamelCase es una nomenclatura o forma de escribir nombres, cabe destacar que esta nomenclatura no es obligatoria, pero es una forma de organizar su código y trabajar con buenas prácticas de programación en Java. Dicha nomenclatura puede variar dependiendo del lenguaje de programación con el que se trabaje, no es la misma para todos-Veamos en el siguiente anexo algunos ejemplos:

          .row.justify-content-center.my-4
            .col-lg-6
              a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Ejemplos nomenclatura

    br
    br

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
