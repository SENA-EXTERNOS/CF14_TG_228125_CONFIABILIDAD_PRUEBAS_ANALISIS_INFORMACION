<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Pruebas de servicio web

    .row.container.justify-content-around.align-items-center

      .row 
        .col-lg-8
            p Herramientas para realizar pruebas de servicios web.
            p En la construcción de aplicaciones web con la arquitectura cliente servidor, donde están las capas separadas, normalmente se recomienda construir primero la capa del backend, luego se realiza la documentación de los servicios creados, con algunas herramientas (una muy popular es Swagger, con estándares como Open API). Una vez se tiene esta documentación, se procede a crear el frontend y consumir los servicios presentados. Una manera de probarlos antes de empezar a crear nuestro frontend, es usar herramientas como las que mencionaremos.

        .col-lg-4
            figure
                img(data-aos="zoom-in")(src='@/assets/curso/temas/img1-tema9 .png', alt='Texto que describa la imagen').img1-tema9

    br        
    br        
    br

    .row.container.justify-content-around.align-items-center

        .row 

          .col-lg-6.fondo-der-tarj1-tema9
              p.txt-blanco-tarj1-tema9.text-bold.p-3 Esquema Cliente-Servidor: existen algunas herramientas para probar y consumir servicios web de todos los tipos, mencionaremos las más usadas y populares.
              p.txt2-tarj1-tema9 Posteriormente, tendrá la oportunidad de construir sus propios servicios web y consumirlos con algunas de las herramientas, incluso con su propio frontEnd que también construirá “desde cero”.
      
          .col-lg-6.fondo-izq-tarj1-tema9  
              figure
                img(data-aos="zoom-in-up")(src='@/assets/curso/temas/img-tarj1-tema9.png', alt='Texto que describa la imagen').img-tarj1-tema9

              
           
    br
    separador

        
    .row.container.justify-content-around.align-items-center

        #tipos-y-caracteristicas-de-tecnologias-para-probar-servicios
        .titulo-segundo.color-acento-contenido
          h2 9.1 Tipos y características de tecnologías para probar servicios

        p Para ampliar la información descrita anteriormente, veamos lo siguiente:

        .row.bloque-slider-tema9
          
          figure
              img(src='@/assets/curso/temas/img-fondo-slider-tema9.png', alt='Texto que describa la imagen').img-fondo-slider-tema9

          .col-lg-12
            // NO ES POSIBLE INSERTAR LOS ELEMENTOS MENCIONADOS EN EL XD EN ESTE TIPO DE SLIDER
            SlyderB.mb-5(:datos="datosSlyder")

    br
    br
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row
          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.fondo-tarj-tema9.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img1-tarj-tema9.png', alt='Texto que describa la imagen').img-tarj-tema9
              .bloque-txt-tarj-tema9
                h3.txt-tarj-tema9.text-center Rest Assured
                a.anexo.mb-4.mb-lg-0(href="https://rest-assured.io/ " target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. https://rest-assured.io/ 

          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-primario.fondo-tarj-tema9.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img2-tarj-tema9.png', alt='Texto que describa la imagen').img-tarj-tema9
              .bloque-txt-tarj-tema9
                h3.txt-tarj-tema9.text-center Newman
                a.anexo.mb-4.mb-lg-0(href="https://www.npmjs.com/package/newman" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. https://www.npmjs.com/package/newman 
     
     
          .col-sm-4.col-lg-4.mb-4.mb-sm-0
            .tarjeta--boton.color-primario.fondo-tarj-tema9.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img3-tarj-tema9.png', alt='Texto que describa la imagen').img-tarj-tema9
              .bloque-txt-tarj-tema9
                h3.txt-tarj-tema9.text-center Insomnia REST
                a.anexo.mb-4.mb-lg-0(href="https://insomnia.rest/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. https://insomnia.rest/ 
     
    br
    br
    br

    .row.container.justify-content-around.align-items-center
        
        #manejo-de-formatos-de-intercambio-de-informacion
        .titulo-segundo.color-acento-contenido
          h2 9.2 Manejo de formatos de intercambio de información
        
        p Cuando una aplicación web está construida con PHP y otra aplicación está creada en Java, para lograr la comunicación entre ambas, la mejor forma es mediante los web service.  

        .row
          figure
              img(src='@/assets/curso/temas/img-fondo-pestanas-tema9.png', alt='Texto que describa la imagen').img-fondo-pestanas-tema9
       
          

          .col-lg-12
            TabsC.color-primario.bloque-pestanas
              .py-3.py-md-4(titulo="<em>HTML (HyperText Markup Language)</em>")
                .row
                  .col-md-6.mb-4.mb-md-0
                  
                    h4.txt-pestanas-tema9 HTML (HyperText Markup Language)
                    p.txt-pestanas-tema9 Lenguaje de marcado utilizado para estructurar el texto en las páginas web. Hay que tener en cuenta que HTML proporciona estructura a las páginas web, pero no estilo. Por ejemplo, HTML marca qué partes de la página texto son el título, encabezados, párrafos, etc., para que puedan ser representados apropiadamente por un navegador web. ¡Ojo! No es un lenguaje de programación.
                
                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/img-pestanas-tema9.png', alt='Texto que describa la imagen').img-pestanas-tema9
                      //figcaption Leyenda de la imagen

              .py-3.py-md-4(titulo="<em>XML (eXtensible Markup Language)</em>")
                .row
                  .col-md-6
                    h4.txt-pestanas-tema9 XML (eXtensible Markup Language)
                    p.txt-pestanas-tema9 Al igual que HTML, es un lenguaje de marcado para almacenar y transportar datos. XML es legible tanto por máquina como por humanos, generalmente se usa para enviar datos estructurados dentro de un sistema basado en la web.

                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/temas/img2-pestanas-tema9.png', alt='Texto que describa la imagen').img-pestanas-tema9
                      //figcaption Leyenda de la imagen
              

              .py-3.py-md-4(titulo="<em>JSON (JavaScript Object Notation)</em>")
                .row
                
                  .col-md-6 
                    h4.txt-pestanas-tema9 JSON (JavaScript Object Notation)
                    p.txt-pestanas-tema9 utilizado para almacenar y transportar datos. Está diseñado para ser legible tanto por máquinas como por humanos. Aporta beneficios, ya que se puede convertir fácilmente en objeto del lenguaje de programación JavaScript, y viceversa. 

                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/temas/img3-pestanas-tema9.png', alt='Texto que describa la imagen').img-pestanas-tema9
                      //figcaption Leyenda de la imagen
         
        
</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Postman:',
        texto:
          'Es una plataforma API para construir y usar API. Se puede  descargar Postman en su web oficial: La instalación es sencilla, en Windows se ejecuta el instalador y se siguen las indicaciones. Si se abre Postman “de manera rápida”, se tendrá una interfaz muy parecida a la siguiente:',
        imagen: require('@/assets/curso/temas/img1-slider-tema9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
        //a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
        //  .anexo__icono
        //    img(src="@/assets/template/icono-link.svg")
        //  .anexo__texto
        //    p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
      },
      {
        //titulo: 'Respuestas HTTP:',
        texto:
          'Peticiones con un Body, en Postman, se pueden realizar en la siguiente sección mostrada, por lo regular con peticiones como POST, PUT, PATCH:',
        imagen: require('@/assets/curso/temas/img2-slider-tema9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Respuestas HTTP:',
        texto:
          'A continuación, se muestra el resultado de una petición con GET a la URL. La respuesta mostrada es en formato JSON. Se puede observar un objeto con los campos o claves: versión, que es un valor de texto y newsSites. NewsSites a su vez, es un vector de textos.',
        imagen: require('@/assets/curso/temas/img3-slider-tema9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'SOAPUI',
        texto:
          'Según su web oficial, es la herramienta de prueba automatizada más utilizada en el mundo para las API de SOAP y REST. Funciona para escribir, ejecutar, integrar y automatizar pruebas de API avanzadas con facilidad.',
        imagen: require('@/assets/curso/temas/img4-slider-tema9.png'),
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
