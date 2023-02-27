<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Lenguajes de programación de interfaz de usuario


    p Los lenguajes de programación, son un conjunto de instrucciones a través de las cuales se pueden programar funcionalidades que serán ejecutadas a través de una computadora.
    p Tim Berners Lee, inventor de la World Wide Web, fundó el consorcio W3C para estandarizar, supervisar y estar pendiente de las tecnologías a base de Internet; con esto nacen los siguientes conceptos:

    .bg--img_03.my-5
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/img-acord-tema1.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo-acord-tema1")

            .row(titulo="HTTP:")
              .col-12
                p.txt-acord-tema1.mb-0 Es el protocolo de transferencia de hipertexto y es la base que permite la comunicación entre los dispositivos conectados en la red, por ejemplo, entre computadores de usuarios y servidores.

            .row(titulo="URL:")
              .col-12
                p.txt-acord-tema1.mb-0 Es el localizador de recursos uniforme, es la más conocida como la dirección de un sitio web; es la forma como llamamos a un sitio en algún punto de la red, a través de su nombre.

            .row(titulo="HTML:")
              .col-12
                p.txt-acord-tema1.mb-0 Lenguaje de marcado de hipertexto, es el que permite escribir la estructura de una página web, dando recursos de maquetación como listas, párrafos, viñetas, etc.

            .row(titulo="Servidor web HTTP:")
              .col-12
                p.txt-acord-tema1.mb-0 Es el programa que se encarga de gestionar las peticiones con los navegadores, tanto de recibirlas como de responderlas.

            .row(titulo="Alojamiento web:")
              .col-12
                p.txt-acord-tema1.mb-0 Es a lo que se llama hosting y es un equipo conectado a la red el cual tiene una configuración específica y una serie de programas instalados, entre ellos un servidor web.



    .bg1.mb-5
      .py-4
        p.mb-4 Como se puede ver en la siguiente imagen, en el mercado se utilizan diferentes servidores, pero el más popular es Apache y por eso será el utilizado en los diferentes ejemplos:

        .row.justify-content-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/img-servi-mercado-tema1.png", alt="alt")


    p.my-4 Otro concepto importante se refiere a los navegadores, que son los programas en donde se van a correr las aplicaciones web. Un navegador es un programa encargado de interpretar el código que recibe desde el servidor y mostrarlo de forma entendible al usuario, a través de la página web con texto, imágenes, etc. A continuación, se describe su popularidad:

    .row.justify-content-center.mb-5
      .col-auto

        figure
          img(data-aos="fade-left")(src="@/assets/curso/temas/t1/navegadores_trend_sinhead.png", alt="Popularidad de los navegadores")
        figcaption Cuota de uso mensual de navegadores web. Fuente: https://www.w3counter.com/trends

    //.row.container.justify-content-around.align-items-center.my-5
      .col
        .row.justify-content-around.align-items-center
          .col-lg-6.color-izq-tarj-serv.p-1
              p.txt-der-tarj-serv.p-4 Otro concepto importante se refiere a los navegadores, que son los programas en donde se van a correr las aplicaciones web. Un navegador es un programa encargado de interpretar el código que recibe desde el servidor y mostrarlo de forma entendible al usuario, a través de la página web con texto, imágenes, etc. A continuación, se describe su popularidad:

          .col-lg-6.p-3.color-der-tarj-serv

              figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/img-tarj-color-navegad.png", alt="alt").img-tarj-color-navegad



    .slyderB_bg_01.p-5.mb-5

      SlyderA(tipo="b")

        .row.justify-content-center.align-items-center
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img1-slider-tema1.png', alt='Texto que describa la imagen').img1-slider-tema1
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p Peticiones HTTP
              p Los navegadores, cuando acceden a una página web, lo hacen a través de http como se había dicho anteriormente; en esa comunicación con el servidor se descompone la URL en diferentes partes, una parte es el host que es la dirección de la máquina y el path o la ruta del recurso al que se quiere acceder.


        .row.justify-content-center.align-items-center

            .col-md-6
              figure
                img(src='@/assets/curso/temas/img2-slider-tema1.png', alt='Texto que describa la imagen').img1-slider-tema1
                //figcaption Leyenda de la imagen

            .col-md-6
              p Cuando se crea una petición por parte del usuario existen de varios tipos, pero se van a explicar dos:

              ul.lista-ul
                li
                  i.lista-ul__vineta
                  | POST
                li
                  i.lista-ul__vineta
                  | GET

              p La petición GET es cuando se hace una solicitud al servidor y se envía la información solicitada a través de la URL como lo hace Google. Por otra parte, la petición POST es una petición donde se envían los datos ocultos a través de un objeto que será descifrado por el servidor y así se tiene seguridad de la información.


        .row.justify-content-center.align-items-center

            .col-md-6
              figure
                img(src='@/assets/curso/temas/img3-slider-tema1.png', alt='Texto que describa la imagen').img1-slider-tema1
                //figcaption Leyenda de la imagen


            .col-md-6.mb-4.mb-md-0
              p Cuando una petición se hace se pueden obtener varios mensajes de respuesta.

              ul.lista-ul
                li
                  i.lista-ul__vineta
                  | 200: La petición solicitada se encuentra con éxito.
                li
                  i.lista-ul__vineta
                  | 403: No se tiene permiso para acceder al recurso solicitado
                li
                  i.lista-ul__vineta
                  | 404: El recurso solicitado no está disponible o no se pudo encontrar.


        .row.justify-content-center.align-items-center

            .col-md-6
              figure
                img(src='@/assets/curso/temas/img4-slider-tema1.png', alt='Texto que describa la imagen').img1-slider-tema1
                //figcaption Leyenda de la imagen


            .col-md-6.mb-4.mb-md-0

              p Las primeras páginas web fueron estáticas y rígidas, lo cual no permitía la fluidez del contenido. Por esa problemática, en 1994 nace CSS (Hoja de estilos en cascada), lenguaje que se compone de una serie de reglas que permiten dar apariencia a la página web como, color de letra, márgenes, el tamaño de los elementos y también poder adaptar las páginas a las diferentes pantallas de los dispositivos, lo que se llama Responsive Design.






    #html
    .titulo-segundo.color-acento-contenido.mb-5
      h2 1.1 HTML

    p HTML 5 mejora la versión de HTML, de acuerdo con el avance en las API y en el conjunto de herramientas que conforman la tecnología web; pero aparte de esto, presenta nuevas características en el lenguaje HTML y esto se va a describir a continuación.


    p.mb-5 Algunas características nuevas de HTML5 son:

    TabsC.color-primario.mb-4
      .py-3.py-md-4(titulo="Semántica")
        .row
          .col-md-7.mb-4.mb-md-0
            p La semántica primero se define como el lenguaje o la forma de expresarse y en este caso es la forma de escribir el lenguaje.
            p En este apartado se crearon nuevas etiquetas que permiten una funcionalidad más amplia del lenguaje y ventajas en el manejo de páginas.
            p Se crearon las nuevas etiquetas que seccionan la página como lo son #[code &lt;section&gt;, &lt;article&gt;, &lt;nav&gt;, &lt;header&gt;, &lt;footer&gt; y &lt;aside&gt;]. Las nuevas etiquetas de audio y video (#[code &lt;audio&gt;, &lt;video&gt;]) permiten al desarrollador manipular audio y vídeo de forma sencilla.

            p La etiqueta #[code &lt;video&gt;] permite incrustar un vídeo en la página de manera fácil, a través de sus atributos src y controles, se agrega el video y los botones de control de su reproducción.

            p El elemento #[code &lt;audio&gt;] funciona de forma similar a la etiqueta #[code &lt;video&gt;] con la diferencia de que ocupa menos espacio en la página y no soporta los atributos de #[em width] y #[em height].

            p Otra nueva característica en semántica son los formularios en HTML5, incluyen nueva API de validación, a parte, atributos nuevos, nuevos valores para la etiqueta input con el atributo #[em type] y #[em output]. También existen nuevos elementos semánticos que permiten incluir directamente fórmulas matemáticas (MathML), las etiquetas #[code &lt;mark&gt;, &lt;figure&gt;, &lt;data&gt;, &lt;time&gt;], entre otras, y una mejora en el funcionamiento de la etiqueta #[code &lt;iframe&gt;].


          .col-md-5
            figure
              img(src='@/assets/curso/temas/img1-pestanas-tema1.png', alt='Semántica HTML')

      .py-3.py-md-4(titulo="Conectividad")
        .row
          .col-md-6
            p En la parte de conectividad se tienen unas características nuevas que se muestran a continuación:

            h4 #[em Web Sockets]
            p Es una API para abrir una sesión de manera bidireccional entre usuario y servidor, permitiendo el envío de peticiones por eventos sin tener que estar testeando el servidor en cada llamada.

            h4 #[em Server-send events]
            p Esta función se agrega cuando se necesita que la aplicación web transmita eventos desde el servidor al frontend del cliente, se hace una conexión unidireccional, es decir, el cliente no podrá responder al servidor.

            h4 WebRTC
            p WebRTC #[em (Web Real-Time Communication)] es una tecnología que permite a las aplicaciones y sitios web capturar y, opcionalmente, transmitir audio y/o video, así como intercambiar datos arbitrarios entre navegadores sin necesidad de un intermediario. El conjunto de estándares que componen WebRTC hace posible compartir datos y realizar teleconferencias #[em peer-to-peer] sin requerir que el usuario instale complementos o cualquier otro #[em software] de terceros.  (MDN, 2019)

          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/img2-pestanas-tema1.png')


    h3.mb-4.mt-5
      i.fas.fa-square.cac
      | &nbsp;Estructura del lenguaje HTML5

    p Todos los documentos HTML están estructurados de manera estricta, cada parte del documento está diferenciada uno del otro, determinada por etiquetas. Veamos en el siguiente anexo la explicación de la estructura global y para qué sirve cada una de ellas:

    .row.justify-content-center
      .col-auto
        a.anexo(href="/downloads/Estructura_del_lenguaje_HTML5.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Estructura del lenguaje HTML5

    h3.mb-4.mt-5
      i.fas.fa-square.cac
      | &nbsp;Estructura del Cuerpo

    .row.justify-content-center
      .col-lg-4
        .p-4
          figure
            img(src='@/assets/curso/temas/t1/img_1.svg')

      .col-lg-8

        p Esta parte es donde se genera todo lo visible del documento que será mostrado en el navegador y son las etiquetas que se codifican dentro de las #[code &lt;body&gt; &lt;/body&gt;].
        p HTML siempre ha tenido varias formas de organizar el cuerpo de su página, ofrece varias etiquetas. Una de las primeras fueron las etiquetas #[code &lt;table&gt;], permitiendo diseñar la información de texto, imágenes, y demás, acomodada en filas y columnas.

        p.mb-4 Las primeras páginas web creadas en la historia usaban #[code &lt;table&gt;]  para organizar todo su contenido y en ese momento fue una revolución su forma de distribuir los diferentes elementos informativos. A continuación, veamos con más detalle los diferentes elementos que componen la estructura HTML.


        .row.justify-content-center
          .col-auto
            a.anexo(href="/downloads/Elementos_que_componen_la_estructura_HTML.pdf" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Elementos que componen la estructura HTML




    separador

    #css
    .titulo-segundo.color-acento-contenido.mb-5
      h2 1.2 CSS

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img2-css-tema1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 CSS (Hoja de estilos en cascada, por sus siglas en inglés) es el encargado de darle apariencia a la página web. Esta hoja de estilos sirve para especificar al navegador cómo se deben mostrar los elementos de la página (documentos, información, imágenes, etc.) y cómo estarán organizados o diseñados. Cuando se habla de CSS se habla de reglas que se aplican a los elementos de la página o un grupo de ellos.

    p.my-5 Una regla es un código que le indica a un elemento o un grupo de ellos, cómo debe ser su diseño, es decir, qué color tendrá, si tiene fondo o color de fondo, tipografía, organización, etc.


    .bg1.mb-5
      .py-4
        p.mb-4 Las reglas de CSS pueden agregar reglas a etiquetas que estén dentro de otras de acuerdo con las especificaciones dadas en el selector, por ejemplo:

        .row.justify-content-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/img-tarj2-css-tema1.png")


    .cajon.color-acento-contenido.p-4.mb-5
      p Como se observa en la imagen anterior, cuando se colocan los estilos dentro de la misma etiqueta se llama estilos embebidos. Esto se hacía con las páginas hace varios años atrás, pero a medida que la información fue creciendo, la tecnología fue avanzando, se requirieron páginas dinámicas, lo que necesita una gran cantidad de estilos y tenerlos embebidos se vuelve una mala praxis por la confusión que puede generar al programador y por el peso dado a cada página con códigos repetitivos.
      p Por lo anterior, la #[strong hoja de estilos en cascada] es la mejor práctica y eficiente para la aplicación de estilos en una página web y es a través de un archivo externo, el cual se relaciona en la cabecera de la página.



    p Para relacionar un archivo externo: #[code href] solicita la URL de donde se encuentra el archivo externo a relacionar y se debe tener presente que esa dirección debe estar dentro de la carpeta de proyecto para que no se presente ningún error al momento de subir el proyecto al #[em hosting].

    p.mb-5 Con los conceptos anteriores, se pueden empezar a conocer los estilos CSS y a realizar un ejemplo de maquetación de páginas.

    //p Son nombres que #[strong empiezan con mayúsculas] y recuerde que por nomenclatura Java, las clases siempre inician con mayúscula. Las variables en Java tienen varios tipos de datos primitivos, como se ilustra a continuación:


    .bg1.mb-5
      .py-4
        .row.justify-content-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/img2-tarj4-css-tema1.png")


    .cajon.color-acento-botones.p-4.mb-5
      p Al observar la imagen anterior se ve la etiqueta link de HTML que es la que permite relacionar el archivo externo de CSS a través de su propiedad href. href solicita la URL donde se encuentra el archivo externo a relacionar; se debe tener presente que esa dirección debe estar dentro de la carpeta de proyecto para que no se presente ningún error al momento de subir el proyecto al hosting. Con los conceptos anteriores ya se pueden empezar a ver los estilos CSS y a hacer ejemplo de maquetación de páginas.



    h3.my-4 Hojas de Estilo CSS

    p.mb-5 Para empezar a ver las reglas de CSS y cómo se aplican, primero se aborda que cada navegador garantiza unos estilos mínimos, por defecto, para cada elemento HTML plasmado en la página. Veamos más profundamente esta información:


    .bg1.mb-5
      .py-4
        .row.justify-content-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/img-hojas-css-tema1.png")



    .slyderB_bg_01.p-5.my-5

      SlyderA(tipo="b")

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .txt-slider2-tema1
              p La otra forma de organizar es por líneas de forma horizontal uno al lado del otro hasta llenar el ancho de la página.
              p Para iniciar a personalizar los estilos por defecto del navegador se va a ver los Modelos de caja, esto quiere decir que un navegador es un grupo de cajas organizadas siguiendo las reglas CSS.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/img1-slider2-tema1.png', alt='Texto que describa la imagen').img-slider2-tema1
              //figcaption Leyenda de la imagen

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .txt-slider2-tema1
              p El modelo por trabajar es el de cajas, pero antes de empezar se verán los códigos CSS y las formas de aplicar las reglas.
              p Siempre se trabajarán los estilos desde un archivo externo y por eso se deben ver las formas de referencias, los estilos o reglas desde ese archivo a la página web que lo implemente. Existen tres formas de hacer referencia a los elementos HTML que se les quiere aplicar las reglas y son:
              ul.lista-ul.fa-ul
                li
                  i.lista-ul__vineta.fa-li
                  | Referencia por la palabra clave del elemento.
                li
                  i.lista-ul__vineta.fa-li
                  | Referencia por el atributo &nbsp;#[em id].
                li
                  i.lista-ul__vineta.fa-li
                  | Referencia por el atributo &nbsp;#[em class].


          .col-md-6
            figure
              img(src='@/assets/curso/temas/img2-slider2-tema1.png', alt='Texto que describa la imagen').img-slider2-tema1
              //figcaption Leyenda de la imagen


        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .txt-slider2-tema1
              h4 Referencia por Clave
              p Esta referencia indica que las reglas de CSS se aplicarán utilizando la palabra de cada etiqueta, por ejemplo, &lt;body&gt; para aplicarle estilos a la etiqueta &lt;body&gt; y así con todas las etiquetas.
              code p &#123; <br>&nbsp;&nbsp;&nbsp;&nbsp;color: red;<br>&nbsp;&nbsp;&nbsp;&nbsp;font-size: 20px;<br>&#125;



          .col-md-6
            figure
              img(src='@/assets/curso/temas/img3-slider2-tema1.png', alt='Texto que describa la imagen').img-slider2-tema1
              //figcaption Leyenda de la imagen

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .txt-slider2-tema1
              p En el código anterior se está aplicando un estilo por clave, es decir, por el nombre de la etiqueta y se aplicará a todas las etiquetas &lt;p&gt; que existan en la página.
              p En este caso se le está aplicando un estilo que le cambia el color y el tamaño de la letra al texto que está dentro de &lt;p&gt;.
              p Lo anterior funciona, pero, ¿qué pasa si no se necesita aplicar el estilo a todas las etiquetas &lt;p&gt; sino solamente a una o algunas en específico? Para eso es necesario usar la referencia por el atributo <em>id</em> o <em>class.</em>


          .col-md-6
            figure
              img(src='@/assets/curso/temas/img4-slider2-tema1.png', alt='Texto que describa la imagen').img-slider2-tema1
              //figcaption Leyenda de la imagen


    h3.mb-4
      i.fas.fa-square.cac
      | &nbsp;Selector Id (#)

    p El selector #[strong id] es una forma única de etiquetar un elemento HTML, es decir, que tendrá un nombre único que no se puede repetir en toda la página.
    p CSS para referenciar un elemento por su #[strong id] se hace a través del símbolo #[span.etiqueta #] y al frente el nombre con el que se va a identificar. Veamos:


    .slyderB_bg_02.p-5.my-5
      SlyderA(tipo="b")

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6
            figure
              img(src='@/assets/curso/temas/img1-slider3-tema1.png', alt='Texto que describa la imagen').img-slider3-tema1
              //figcaption Leyenda de la imagen

          .col-md-6.mb-4.mb-md-0
              p.txt-slider3-tema1 En esta imagen se observa cómo se agrega el atributo id a la etiqueta p, ahora con ese id se hace referencia desde el archivo externo CSS para aplicar las reglas necesarias.



        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6
              figure
                img(src='@/assets/curso/temas/img2-slider3-tema1.png', alt='Texto que describa la imagen').img-slider3-tema1
                //figcaption Leyenda de la imagen


          .col-md-6.mb-4.mb-md-0
            p.txt-slider3-tema1 La aplicación de las reglas CSS con id indican que solo a la etiqueta que tenga ese id llamado parrafo1 se le aplicaran las reglas de letra tamaño 15px y de color azul.



        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6
            figure
              img(src='@/assets/curso/temas/img3-slider3-tema1.png', alt='Texto que describa la imagen').img-slider3-tema1
              //figcaption Leyenda de la imagen


          .col-md-6.mb-4.mb-md-0
            h4.txt-slider3-tema1 Referencia por <em>class</em>
            p.txt-slider3-tema1 En las páginas es muy inusual necesitar aplicar estilos específicos a cada etiqueta para usar siempre el id; mientras es más común requerir aplicar unas reglas a un conjunto de elementos en particular, a esos elementos se les agrega el atributo <em>class</em> y se les asigna el mismo nombre. Serían elementos de la misma clase y cuando se apliquen reglas a esa clase se aplica a todos los elementos que la componen.


        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6
            figure
              img(src='@/assets/curso/temas/img4-slider3-tema1.png', alt='Texto que describa la imagen').img-slider3-tema1
              //Leyenda de la imagen


          .col-md-6.mb-4.mb-md-0
            p.txt-slider3-tema1 Como se ha dicho, el atributo <em>class</em> es un nombre que identifica un grupo de elementos que pertenecen a la misma clase y por ende tendrán el mismo estilo.


    p.mt-5 Aparte de estos selectores, CSS 3 agrega nuevos selectores que determinan especialmente ciertas reglas o formas de aplicar las reglas, en estos casos los selectores son #[span.etiqueta >], #[span.etiqueta +] y #[span.etiqueta ~].

    p Estos selectores se basan en la relación entre elementos y así seleccionan cuáles van a ser impactados por las reglas CSS codificadas.

    h3.mb-4.mt-5
      i.fas.fa-square.cac
      | &nbsp;Selector >

    .row.justify-content-center.my-5
      .col-auto
        figure
          img(src='@/assets/curso/temas/t1/code_css1.png')


    p El selector #[span.etiqueta >] aplicado en el código anterior indica que el elemento a ser afectado es el de la derecha del símbolo, pero siempre y cuando su elemento padre sea el de la izquierda. En otras palabras, se afectará al elemento #[span.etiqueta p] con el atributo #[em class] llamado #[span.etiqueta parrafo1], pero siempre y cuando sea hijo de un elemento #[span.etiqueta div].

    h3.mb-4.mt-5
      i.fas.fa-square.cac
      | &nbsp;Selector +


    p.mb-4 El otro selector es el #[span.etiqueta +] y referencia que el elemento de la derecha será el impactado por las reglas de estilos siempre y cuando sea el inmediatamente precedido por el elemento de la izquierda.

    .row.justify-content-center.my-5
      .col-auto
        figure
          img(src='@/assets/curso/temas/t1/code_css2.png')


    p.mb-4 Según el párrafo anterior, el código expresado indica que se impactará un elemento #[span.etiqueta p], siempre que sea el inmediatamente precedido por un elemento #[span.etiqueta p] con el atributo clase llamado #[span.etiqueta parrafo2].

    .bg1.my-5
      .py-4

        .row.justify-content-center.my-4
          .col-lg-8
            p Después de ver los conceptos básicos sobre cómo aplicar los estilos CSS a las páginas, a través de los diferentes selectores, se va a proceder a crear una plantilla HTML básica y hacer una maquetación con estilos CSS externos.

            p Para esta aplicación, se revisará lo que se llama modelo de caja tradicional, que ha sido implementado desde la primera versión de CSS y es soportado por todos los navegadores del mercado. Veamos en el siguiente documento anexo, un ejercicio de referencia para la creación de una plantilla:


            .row.justify-content-center.my-4
              .col-auto
                a.anexo(href="/downloads/plantilla.pdf" target="_blank").bg_cac
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo.  Ejercicio de referencia para la creación de una plantilla.

          .col-lg-4
            figure
              img(data-aos="flip-up")(src='@/assets/curso/temas/img-final-tema1.png', alt='Texto que describa la imagen').img-final-tema1


    separador
    #javascript
    .titulo-segundo.color-acento-contenido
      h2 1.3 JavaScript

    p.mb-5 Ahora, profundicemos sobre del lenguaje JavaScript, el cual se compila en tiempo real #[em (just-in-time)] con diferentes tipos de funcionalidades. Su uso más conocido es la programación de script aplicados en entornos web, pero es usado en muchos más entornos como AngularJS, NodeJS, Adobe Acrobat, entre otros. Para profundizar, observemos el siguiente video:

    .row.justify-content-center.mb-5
      .col-lg
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p Como se mencionó anteriormente, #[code &lt;canvas&gt;] es un elemento de HTML, el cual permite realizar gráficos aplicando JavaScript. Para conocer más acerca de este tema, revisar el anexo CANVAS.

    .row.justify-content-center.my-4
      .col-auto
        a.anexo(href="/downloads/canvas.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo.  Canvas




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
