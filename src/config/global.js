export default {
  global: {
    componenteFormativo: 'Confiabilidad, pruebas y análisis de la información',
    descripcionCurso:
      'El objetivo de este componente formativo, se fundamenta en que el aprendiz adquiera los conocimientos necesarios sobre conceptos que le ayudarán en su formación, tales como: <i>frameworks</i> y librerías para programación, algunas nociones de <i>DevOps</i>, herramientas para llevar a cabo la codificación con algunos lenguajes de programación y las pruebas respectivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/img-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/img-decor1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/img-decor2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/img-decor3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/img-decor4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flechas-blancas-vert.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Lenguajes de programación de interfaz de usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'HTML',
            hash: 'html',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'CSS',
            hash: 'css',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'JavaScript ',
            hash: 'javascript',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tecnologías de programación de interfaz de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Frameworks</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Librerías',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Codificación en lenguajes de programación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Protocolos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Accesos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Get',
            hash: 'get',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Post',
            hash: 'post',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Estrategias DEVOPS',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Pruebas de servicio web',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Herramientas para realizar pruebas de servicios web',
            hash:
              'tipos-y-caracteristicas-de-tecnologias-para-probar-servicios',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Manejo de formatos de intercambio de información',
            hash: 'manejo-de-formatos-de-intercambio-de-informacion',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'IDEs de desarrollo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Principios SOLID',
      referencia:
        'Legorreta, N. (2021b,diciembre 12). <em>Principios SOLID: Qué son y para qué sirven - Nandy Legorreta.</em> Medium.',
      tipo: 'Artículo',
      link:
        'https://medium.com/@nandy_x/principios-solid-que-son-y-para-que-sirven-1e4799daebf5#:~:text=Conclusi%C3%B3n,interfaces%20e%20Inyecci%C3%B3n%20de%20dependencias',
    },
    {
      tema: 'Patrones de diseño',
      referencia:
        '<em>Just a moment. . . (s. f.).</em> Recuperado 19 de octubre de 2022, de',
      tipo: 'Artículo',
      link: 'https://refactoring.guru/es',
    },
    {
      tema: 'DevOps',
      referencia:
        'G, E. (2021, 14 diciembre). Qué es DevOps y por qué es tan Importante - DotTech. Medium.',
      tipo: 'Artículo',
      link:
        'https://medium.com/dottech/qu%C3%A9-es-devops-y-por-qu%C3%A9-es-tan-importante-427fbfc81136',
    },
    {
      tema: 'Spring boot',
      referencia:
        'Pulga, G. (2021, 14 diciembre). <em>Building a CRUD RESTful API/Web Service with Spring Boot.</em>',
      tipo: 'Manual',
      link:
        'https://medium.com/swlh/building-a-crud-restful-api-web-service-with-spring-boot-a4f29edfbcd3',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        'las API son mecanismos que permiten a dos componentes de software comunicarse entre sí mediante un conjunto de definiciones y protocolos.',
    },
    {
      termino: 'Compilación',
      significado:
        'proceso de transformar un programa informático escrito en un lenguaje en un programa equivalente en otro formato.',
    },
    {
      termino: 'Dirección IP',
      significado:
        'una dirección IP es una representación numérica del punto de Internet donde está conectado un dispositivo. Se usa para identificar dónde hay algo y, en cierto modo, qué es.',
    },
    {
      termino: '<em>Endpoint</em>',
      significado:
        'es la URL de un API que responde a una petición. Punto final.',
    },
    {
      termino: 'IDE',
      significado:
        'herramientas que  ayudan en la codificación de las aplicaciones, desde la edición del código, hasta compilación y ejecución de los programas que se realizan.',
    },
    {
      termino: 'Librería',
      significado:
        'conjuntos de archivos de código que se utilizan para desarrollar <em>software</em>. Su objetivo es facilitar la programación al proporcionar funcionalidades comunes, que ya han sido resueltas previamente por otros programadores.',
    },
    {
      termino: 'Máscara de red',
      significado:
        'combinación de <em>bits</em> que funcionan para delimitar una red de ordenadores y dividir esta red en subredes. Este código de números es usado para realizar correctamente el proceso de transferencia de mensajes entre dispositivos en la misma subred.',
    },
    {
      termino: 'Palabra reservada',
      significado:
        'son identificadores reservados por un lenguaje de programación, para uso propio, que no pueden usarse como nombres de variables.',
    },
    {
      termino: 'Pruebas unitarias',
      significado:
        'una prueba unitaria solo valida la unidad más pequeña de un proceso computacional. Eso podría significar una prueba de un solo método o un solo componente en una aplicación.',
    },
    {
      termino: '<em>Refactoring</em>',
      significado:
        'proceso sistemático de mejora del código sin crear nuevas funcionalidades. La refactorización transforma el desorden en código limpio y diseño simple.',
    },
  ],
  referencias: [
    {
      referencia: 'Principios Solid. (2022). Recuperado de',
      link: 'https://www.enmilocalfunciona.io/principios-solid/',
    },
    {
      referencia: 'AWS (2022). Recuperado de:',
      link: 'https://aws.amazon.com/es/what-is/restful-api/',
    },
    {
      referencia: 'Node (2022). Recuperado de:',
      link: 'https://nodejs.org/es/',
    },
    {
      referencia: 'Avast (2022). Dirección IP. Recuperado de:',
      link:
        'https://www.avast.com/es-es/c-what-is-an-ip-address#:~:text=%C2%ABDirecci%C3%B3n%20IP%C2%BB%20significa%20%C2%ABdirecci%C3%B3n,red%20o%20dispositivo%20en%20Internet',
    },
    {
      referencia: 'Medium (2022). DevOps. Recuperado de',
      link:
        'https://medium.com/dottech/qu%C3%A9-es-devops-y-por-qu%C3%A9-es-tan-importante-427fbfc81136',
    },
    {
      referencia: 'Mozilla (2022). Compilación. Recuperado',
      link: 'https://developer.mozilla.org/es/docs/Glossary/Compile',
    },
    {
      referencia: 'Keepcoding (2022). Máscara de red. Recuperado de',
      link: 'https://keepcoding.io/blog/que-es-una-mascara-de-red/',
    },
    {
      referencia: 'Refactoring.guru (2022). Refactoring. Recuperado de:',
      link: 'https://refactoring.guru/es',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
