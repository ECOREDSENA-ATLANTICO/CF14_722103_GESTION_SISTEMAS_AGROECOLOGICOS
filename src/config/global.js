export default {
  global: {
    componenteFormativo: 'Producción pecuaria agroecológica',
    descripcionCurso:
      'Este componente permite entender los principios de la ganadería agroecológica,  asimilando conceptos y prácticas de alojamiento de las especies pecuarias de interés zootécnico, tipos,  condiciones de seguridad y habitabilidad, ubicación, orientación, áreas, dimensiones, instalaciones, capacidad instalada, equipos, bienestar animal y   buenas prácticas pecuarias, para el cuidado de los animales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Principios de la ganadería agroecológica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normatividad de la producción agropecuaria ecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Bienestar animal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Buenas prácticas pecuarias',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Alojamiento de las especies pecuarias de interés zootécnico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Etapas productivas de las especies pecuarias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Equipos, insumos y herramientas de manejo animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Programa de alimentación agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Principios de anatomía y fisiología digestiva',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Sistema digestivo en rumiantes',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Sistema digestivo en monogástrico',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Nutrición y alimentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Materias primas en la alimentación agroecológica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Sistemas de pastoreo',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CFA14_DU.pdf',
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
      tema: 'Principios de la ganadería agroecológica',
      referencia:
        'Ecología Verde (3 jun 2018) Qué es la AGROECOLOGÍA - Agroecología CARACTERÍSTICAS. Youtube. [Video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NJ1CBZ34WyQ',
    },
    {
      tema: 'Alojamiento de las especies pecuarias de interés zootécnico',
      referencia:
        'El Mundo del Campo (23 mayo 2020) SENA CLEM ESPECIES MENORES. Youtube. [Video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZnjNP9HOs_g&t=1625s',
    },
    {
      tema: 'Sistemas de pastoreo',
      referencia:
        'Ganadería Colombiana Sostenible (12 jul 2018) Manejo de praderas y sistemas de pastoreo. Youtube. [Video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jmeXgBzCoGI',
    },
    {
      tema: 'Conservación de forrajes',
      referencia:
        'Ganadería Colombiana Sostenible. (7 ago. 2021) Conservación de forrajes (Ensilado y henificación) Youtube. [Video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vcx6Lj8sFbE',
    },
    {
      tema: 'Programa de Alimentación Agroecológica',
      referencia:
        'TvAgro (s.f.) Cómo implementar un Sistema de Agroecología - TvAgro por Juan Gonzalo Angel Youtube. [Video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kKiAKTSUkwQ',
    },
  ],
  glosario: [
    {
      termino: 'Agroecología',
      significado:
        'Ciencia que estudia cómo los diferentes componentes del agroecosistema interactúan entre sí para beneficio de la comunidad.',
    },
    {
      termino: 'Biodigestor',
      significado:
        'Tanque que se carga con residuos orgánicos, allí se produce la descomposición de la materia orgánica y como resultado genera un gas utilizado para otras actividades.',
    },
    {
      termino: 'Grasa',
      significado:
        'Sustancias orgánicas, formada por átomos de carbono, oxígeno e hidrógeno y estos hacen parte de procesos en el cuerpo.',
    },
    {
      termino: 'Melaza',
      significado:
        'Subproducto del proceso de la caña de azúcar y utilizada como fuente de energía.',
    },
    {
      termino: 'Monogástrico',
      significado:
        'Son animales que tienen un estómago y su catabolismo y anabolismo se realiza por medio de enzimas y ácidos.',
    },
    {
      termino: 'Nutrición',
      significado:
        'Todo el proceso mediante el cual el animal ingiere y utiliza todos los componentes requeridos para su mantenimiento, crecimiento, producción o reproducción.',
    },
    {
      termino: 'Palatabilidad',
      significado:
        'Es la característica de un alimento que estimula una respuesta selectiva de un animal que pastorea y es un factor determinante en el consumo de las especies vegetales, lo cual tiene implicaciones importantes en la elección de alimentos para venados en confinamiento.',
    },
    {
      termino: 'Poligástrico',
      significado:
        'Animal que posee un estómago dividido en cuatro compartimentos de los cuales cada uno cumple una función.',
    },
    {
      termino: 'Proteína',
      significado:
        'Moléculas formadas por cadena de aminoácidos y cumplen muchas funciones en el cuerpo.',
    },
    {
      termino: 'Rumiante',
      significado:
        'Animal que realiza el proceso de la rumia, proceso por el cual el animal expulsa por medio del eructo el CO2.',
    },
    {
      termino: 'RUV',
      significado: 'Registro único de vacunación implementado por FEDEGAN.',
    },
  ],
  referencias: [
    {
      referencia:
        'ABC Rural (2022). La Red BPA presentó la Guía de Buenas Prácticas Ganaderas.',
      link:
        'https://redbpa.org.ar/wp-content/uploads/2020/01/EP-BuenasPracticasGanaderas.pdf',
    },
    {
      referencia:
        'Cardona, J. (2011) Implementación de buenas prácticas ganaderas en hacienda yerbabuena SA. Corporación universitaria lasallista.',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/363/1/Buenas_practicas_ganaderas.pdf',
    },
    {
      referencia:
        'Duarte, J. (2010,14 MAYO) Ganadería Ecológica y Protocolos para su implementación. Uniamazonia.',
      link:
        'https://www.uniamazonia.edu.co/documentos/docs/Programas%20Academicos/Ingenieria%20Agroecologica/Memorias/I%20Simposio%20Internacional%20de%20Agroecologia/Ganaderia%20ecologica%20y%20protocolos%20para%20su%20implementacion.pdf',
    },
    {
      referencia:
        'Engordmix (2022). Instalaciones para un criadero de cerdos dedicado a la explotación semi-intensiva.',
      link:
        'https://www.engormix.com/porcicultura/articulos/instalaciones-criadero-cerdos-dedicado-t25910.htm',
    },
    {
      referencia:
        'Franco, Q. (2007) Alternativas para la conservación de forrajes. Universidad Nacional.',
      link:
        'https://www.researchgate.net/publication/353046808_Alternativas_para_la_Conservacion_de_Forrajes',
    },
    {
      referencia:
        'López, N. (2016) Fortalecimiento de Unidades Productivas Integrales Rurales. Universidad Santo Tomas.',
      link: 'https://repository.usta.edu.co/handle/11634/1290',
    },
    {
      referencia:
        'Osorio, A. (2012) Agroecología aplicada a condiciones del trópico húmedo. Convenio SENA-Tropenbos.',
      link: 'downloads/Agroecologia.pdf',
    },
    {
      referencia:
        'Contexto ganadero (2021) ¿Qué tipos de leguminosas hay disponibles para clima cálido?',
      link:
        'https://www.contextoganadero.com/ganaderia-sostenible/que-tipos-de-leguminosas-hay-disponibles-para-clima-calido',
    },
    {
      referencia:
        'Wattiaux M(s/f) Digestión de la vaca lechera. Instituto Babcock.',
      link:
        'https://1library.co/document/y4kk3k5q-guia-tecnica-basica-de-lecheria-universidad-de-wisconsin-madison.html',
    },
    {
      referencia: 'Zoovetesmipasion  (2018). Galpón para pollos de engorde.',
      link:
        'https://zoovetesmipasion.com/avicultura/pollos/estructura-del-galpon-pollos-engorde/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Liborio de Jesús Castañeda Valencia',
          cargo: 'Desarrollo <em>full stack</em> junior',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
