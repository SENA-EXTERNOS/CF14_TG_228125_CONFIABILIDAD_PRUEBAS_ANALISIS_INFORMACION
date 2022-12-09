<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Protocolos
 
      
    .row.container.justify-content-around.align-items-center
      
      figure
            img(src='@/assets/curso/temas/fondo-tarj1-tema6.png', alt='Texto que describa la imagen').fondo-tarj1-tema6

      
      
      .row 
        .col-lg-12

          p(data-aos="flip-down").txt-tarj1-tema6.p-3 Como se comentó anteriormente, para la comunicación entre solicitantes, teniendo en cuenta que un cliente (hace petición al servicio) se puede convertir en un servidor (provee el servicio) y un servidor en cliente.
          
          figure
            img(data-aos="fade-down-right")(src='@/assets/curso/temas/img1-tema6.png', alt='Texto que describa la imagen').img1-tema6

    br
    br
    br

    .row.container.justify-content-around.align-items-center
      

      .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/img1-tarj-tema6.png', alt='Texto que describa la imagen')
              
            //h2.text-center Celebrate your<br>failures
            p Los web <em>service</em> utilizan una forma de mensajes XML. El patrón de mensajería de petición <em>(request)</em> / respuesta <em>(response)</em> es la base de todas las interacciones entre los servicios web y el software que utilizan esos servicios.
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/img2-tarj-tema6.png', alt='Texto que describa la imagen')
              
            //h2.text-center Sterility leads to<br>susceptibility
            p Estos mensajes XML cumplen con el estándar SOAP, dicho estándar fue desarrollado por Microsoft SOAP lo que permite que un cliente invoque servicios. Proporciona estandarización a las interacciones entre clientes y servidores. La manera en que XML define y organiza las solicitudes y respuestas debe ser estándar para que ambas partes puedan entenderse entre sí.

          .col-md.tarjeta.color-acento-botones.text-white.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/img3-tarj-tema6.png', alt='Texto que describa la imagen')
              
            //h2.text-center Sterility leads to<br>susceptibility
            p Un ejemplo de #[strong <em>middleware</em>] es la llamada a procedimiento remoto (RPC). RPC es la base de los sistemas de <em>middleware</em> utilizados para ciertos servicios web; permite a los clientes invocar procedimientos que se implementan en un servidor. Un <em>middleware</em> es una capa intermedia entre dos sistemas, que realiza una tarea antes de llegar al destino final. Entonces, cuando nos referimos a XML-RPC se habla de un protocolo de RPC que hace uso del formato XML.

 

</template>

<script>
export default {
  name: 'Tema6',
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
