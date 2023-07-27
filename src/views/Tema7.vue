<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Accesos


    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t7/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Recuerde que #[b HTTP] #[i (HyperText Transport Protocol)] es un protocolo que dicta cómo la información, incluidos los hipertextos, se transfieren a través de Internet. Hipertexto se refiere a un documento incrustado con hipervínculos que, al hacer clic, lo llevará al documento o recurso deseado. Los hipervínculos se utilizaron originalmente para vincular documentos HTML. HTTP fue diseñado para facilitar el uso de hipertexto y soportar la comunicación de documentos y recursos expresados en HTML. Veamos las siguientes tablas donde se relacionan las peticiones y respuestas con el protocolo HTTP:



    .bg2.my-5
      .py-4
        SlyderB.mb-5(:datos="datosSlyder")


    #get
    .titulo-segundo.color-acento-contenido
      h2 7.1 Get


    p Obtiene o recupera el recurso proporcionado por el URI que se asigna en la línea de solicitud. Los métodos de obtención se utilizan para recuperar páginas web, imágenes o resultados de programas. Se puede enviar una cadena de consulta junto con la solicitud en el URI. Las consultas siempre comienzan con un signo de interrogación y deben estar codificadas en URL. No se envía ningún cuerpo de mensaje junto con una solicitud GET.


    .row.my-5
      .col-lg-7
        .bg_verde
          .p-4
            p Un navegador web, por ejemplo: Mozilla Firefox, Google Chrome, etc., por defecto realiza peticiones GET mediante la URL; cuando se recibe la respuesta, el navegador web mostrará el documento HTML con CSS y JS (si los contiene la página consultada). Cuando, por ejemplo, se ingresa a: <a href="https://www.sena.edu.co/">https://www.sena.edu.co/</a> escribiendo la dirección en la barra de navegación, la petición realizada por defecto es con GET y se obtendrá lo que se ve en la pantalla del navegador como respuesta. Para el caso de peticiones a un #[i Endpoint] de un API REST, se realiza GET para realizar una consulta o leer un recurso, recuperar un recurso. El método GET es usado por un cliente para acceder o consultar un recurso que está en la URL especificada en el servidor.
      .col-lg-5
        figure
          img(data-aos="fade-right")(src='@/assets/curso/temas/t7/2.png', alt='Texto que describa la imagen')


    separador

    #post
    .titulo-segundo.color-acento-contenido
      h2 7.2 Post


    p Se utiliza para agregar o modificar un recurso, según el cuerpo del mensaje de la solicitud, en el host especificado en la URI de la solicitud. El cuerpo del mensaje contiene la información utilizada para crear o actualizar un recurso en el sitio web. Se usa a menudo para crear un recurso. Para actualizar es preferiblemente el uso de PUT.


    .slyderB_bg_01.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start

          .col-md-4.mb-4.mb-md-0
            p El método POST suele usarse también cuando se envía información mediante formularios. Normalmente, la petición realizada es de este tipo. Cuando se hace clic en el botón de “ingresar” se enviará una petición POST (en este caso), con esta información. En el inspector del navegador (opción “red”) se puede observar.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/img1-slider2-tema7.png')
              //figcaption Leyenda de la imagen


        .row.justify-content-center.align-items-start

          .col-md-4.mb-4.mb-md-0
            p En esta imagen se puede ver que a la URL descrita de <em>login</em>, se le envió una petición post.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/img2-slider2-tema7.png')
              //figcaption Leyenda de la imagen


        .row.justify-content-center.align-items-start

          .col-md-4.mb-4.mb-md-0
            p En esta imagen, se puede ver la información que se envió por el formulario.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/1.png')
              //figcaption Leyenda de la imagen

    .row.my-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p Para el caso de peticiones a un <em>Endpoint</em> de un API REST, se realiza POST para crear un recurso, guardarlo. Como se mencionó anteriormente con este método, se puede enviar datos de un formulario u otros formatos, pero para el caso de API REST, el envío se hace mediante un <em>“Body”</em> en formato JSON.


</template>

<script>
export default {
  name: 'Tema7',
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
