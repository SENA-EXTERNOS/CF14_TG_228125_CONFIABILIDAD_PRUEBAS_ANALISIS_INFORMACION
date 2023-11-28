<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 IDES de desarrollo


    .row.align-items-center
      .col-lg-7.fondo-der-tarj1-tema10

        p.txt-tarj1-tema10.p-3 El término IDE (#[em Integrated Development Environment]) traduce al español “ambiente de desarrollo integrado” y son herramientas que ayudan en la codificación de las aplicaciones, desde la edición del código hasta compilación y ejecución de los programas. Los IDEs, en su mayoría, tienen integrados compiladores y herramientas de Debug, los IDEs modernos poseen un sinnúmero de características que ayudan a codificar de manera rápida y versátil. Mencionemos algunos ejemplos:

      .col-lg-5.fondo-izq-tarj1-tema10

        figure
            img(data-aos="fade-right")(src='@/assets/curso/temas/img1-tema10.png', alt='Texto que describa la imagen').img1-tema10




    .bg2.my-5
      .py-4

        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")

          .row(titulo="Visual Studio")
            .col-md-6.mb-4.mb-md-0
              p.txt-acord-tema10 Con este IDE se trabaja de manera general con el lenguaje de programación C# (C-sharp), aplicaciones de escritorio, aplicaciones web, videojuegos, aplicaciones móviles. Es propiedad de Microsoft, existe una versión paga y una versión gratuita.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/img1-acord-tema10.png', alt='Texto que describa la imagen').img-acord-tema10
                //figcaption Leyenda de la imagen

          .row(titulo="Visual Studio Code")
            .col-md-6.mb-4.mb-md-0
              p.txt-acord-tema10 Su sitio web oficial es: https://code.visualstudio.com/, donde se puede descargar y mirar sus características. Cuenta con un sinnúmero de complementos o plugins para múltiples propósitos.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/img2-acord-tema10.png', alt='Texto que describa la imagen').img-acord-tema10
                //figcaption Leyenda de la imagen

          .row(titulo="NetBeans")
            .col-md-5.mb-4.mb-md-0

              p.txt-acord-tema10 Principalmente usado para trabajar con lenguajes de programación Java, PHP, pero se puede trabajar con cualquier lenguaje. Su web oficial es:

              a.anexo.mb-4.mb-lg-0(href="https://netbeans.apache.org/download/index.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto.text-small
                  p Enlace web. https://netbeans.apache.org/download/index.html

            .col-md-7
              figure
                img(src='@/assets/curso/temas/img3-acord-tema10.png', alt='Texto que describa la imagen').img-acord-tema10
                //figcaption Leyenda de la imagen


          .row(titulo="Intellij IDEA")
            .col-md-6.mb-4.mb-md-0

              p.txt-acord-tema10 Su web oficial https://www.jetbrains.com/es-es/idea/, existe una versión de pago y una versión community gratuita.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/img4-acord-tema10.png', alt='Texto que describa la imagen').img-acord-tema10
                //figcaption Leyenda de la imagen



    h3.mb-4.mt-5
      i.fas.fa-square.cac
      span &nbsp;#[i DEBUG] (Detección de errores)


    p Debug o depurador, es una herramienta que analiza el código de forma controlada mientras se ejecuta. Con esta herramienta se puede identificar y eliminar la causa de un error o conocer mejor el funcionamiento del código.
    p A continuación, vamos a realizar una corta práctica para entender mejor el concepto Debug, con la herramienta Debugger de Netbeans:


    .bg2.my-5
      .py-4

        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")

          .row(titulo="Paso 1")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 1: abrir el IDE Netbeans y crear un nuevo proyecto. Puede dársele el nombre que se prefiera.

            .col-md-10
              figure
                img(src='@/assets/curso/temas/img-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen

          .row(titulo="Paso 2")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 2: se debió crear un paquete llamado “debug” y una clase principal llamada “Debug”. Ahora se debe crear en el mismo paquete “debug” una clase llamada “Prueba”, dar clic derecho sobre el paquete y seguir como se muestra en la siguiente imagen.

            .col-md-10
              figure
                img(src='@/assets/curso/temas/img2-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen

          .row(titulo="Paso 3")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 3: en la clase Prueba.java, escribir “línea a línea” el siguiente código (se pueden omitir los comentarios, que son solo para explicar cada método y en qué consiste):
              p.txt-acord2-tema2 Recuerde: línea a línea, evitar simplemente copiar y pegar.

            .col-md-10
              figure
                img(src='@/assets/curso/temas/img3-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen

          .row(titulo="Paso 4")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 4: en la clase principal “Debug.java” llamar el método “imprimir”, digitar el siguiente código para ello:

            .col-md-10
              figure
                img(src='@/assets/curso/temas/img4-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen

          .row(titulo="Paso 5")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 5: pruebe ejecutando la aplicación.

            .col-md-10
              figure
                img(src='@/assets/curso/temas/img5-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen

          .row(titulo="Paso 6")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 6: clic derecho en 1 (sobre la clase principal) y “run file” (ejecutar archivo)
              p.txt-acord2-tema2 Verá como resultado en consola:


            .col-md-10
              figure
                img(src='@/assets/curso/temas/img6-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen

          .row(titulo="Paso 7")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 7: Ahora se colocan unos puntos de interrupción (breakpoints) en el archivo “Prueba.java” y ejecutará la aplicación, pero en modo debug.
              p.txt-acord2-tema2 Simplemente es dar clic derecho en donde aparece el número de la línea para colocar su breakpoint en la línea deseada y se marcará de ese color rosado.


            .col-md-10
              figure
                img(src='@/assets/curso/temas/img7-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen

          .row(titulo="Paso 8")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 8: ejecutar con debug, en 1, hacer clic izquierdo y luego en “debug file”.

            .col-md-10
              figure
                img(src='@/assets/curso/temas/img8-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen

          .row(titulo="Paso 9")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 9: ejecute “paso a paso” la aplicación con el control que se muestra en la siguiente imagen:

            .col-md-10
              figure
                img(src='@/assets/curso/temas/img9-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen

          .row(titulo="Paso 10")
            .col-md-12.mb-4.mb-md-0
              p.txt-acord2-tema2 Paso 10: se puede ir haciendo clic a medida que quiera avanzar, hasta finalizar el programa y se detallará paso a paso lo que hace la aplicación y qué valores van tomando las variables, resultados y si quizás ocurre algún error, en qué parte exactamente está ocurriendo. En 1, se muestran los controles del debug; en 2, se va a ir resaltando en verde por dónde va la presente ejecución de la aplicación. En 3, están los valores actuales de la aplicación. Es como si viera la ejecución de programa en “cámara lenta”, pausándose a medida que desee.

            .col-md-10
              figure
                img(src='@/assets/curso/temas/img10-slider2-tema10.png', alt='Texto que describa la imagen').img-acord2-tema2
                //figcaption Leyenda de la imagen


    h3.mb-4.mt-5
      i.fas.fa-square.cac
      | &nbsp;Laboratorio


    .row.align-items-center.my-5
      .col-lg-6.fondo-izq-tarj-lab-tema10
          figure
            img(src='@/assets/curso/temas/img-lab-tema10.png', alt='Texto que describa la imagen').img-tarj-lab-tema10

      .col-lg-6.fondo-der-tarj-lab-tema10
        .txt-tarj-lab-tema10.p-4
          p.text-bold Una vez vistos estos conceptos anteriores,  procederán a crear un API REST, esta vez más completo. Vamos a usar el ambiente de ejecución de NodeJS con Javascript como lenguaje de programación. Usarán conexión a base de datos, usando el motor no relacional MongoDB y alojarán en la nube dicha base de datos con la herramienta cloud de Atlas. Como editor o IDE de desarrollo,  usarán el  Visual Studio Code.
          p.text-bold La entrega y el despliegue continuo son dos términos que vienen íntimamente ligados, expresado en uno solo como: CI/CD.


    p Para esta ocasión realizarán, lo que se llama famosamente: CRUD, que son las siglas de #[em Create, Read, Update, Delete]. Van a tener una colección (en bases de datos relacionales, tabla) de productos de aseo y van a gestionarlos. Crearán un producto, lo consultarán por el #[em ID] del producto, lo actualizarán y lo borrarán. Para las pruebas del CRUD, usarán Postman para probar los servicios del API REST.


    .row.my-5
      .col-lg-7
        p Los atributos para el producto son:
        ul.lista-ul
          li
            i.lista-ul__vineta
            | Serial: obligatorio.
          li
            i.lista-ul__vineta
            | Nombre: obligatorio
          li
            i.lista-ul__vineta
            | Precio unitario.
          li
            i.lista-ul__vineta
            | Descripción.

        p Y se debe anexar a la colección la fecha de registro del producto y fecha de actualización.
        p Veamos en el siguiente anexo, el paso a paso para construir por completo su aplicación web en el lado del <em>Back End</em>.
      
        a.anexo.mb-4(:href="obtenerLink('/downloads/pasos_construir_aplicacion_web.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. IDES de desarrollo


      .col-lg-5

        figure
          img(src='@/assets/curso/temas/img-crud-tema10.png', alt='Texto que describa la imagen').img-crud-tema10



    p.my-5 DevOps es una cultura cada vez más usada en los equipos de desarrollo de <i>software</i> para construir aplicaciones de calidad.

    .row.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/img-final-tema10.svg', alt='Texto que describa la imagen')


    .row.justify-content-center.my-5
      .col-lg-6
        .cajon.color-acento-contenido.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.



</template>

<script>
export default {
  name: 'Tema10',
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
