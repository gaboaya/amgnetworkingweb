import { inCity } from '../seo.js';

// Desarrollo de software. La página principal es /desarrollo-de-software/ y cada servicio tiene su
// página debajo de esa dirección. El formato es el mismo de src/data/services.js, más estos campos:
// `base`: dirección de la que cuelga · `national`: se ofrece en todo el país, su título no lleva la
// ciudad · `heading`: encabezado principal (H1) de la página
export const SOFTWARE_PATH = '/desarrollo-de-software/';

export const SOFTWARE_SERVICES = [
  {
    base: SOFTWARE_PATH,
    slug: 'software-empresarial',
    national: true,
    title: 'Software empresarial',
    heading: 'Software empresarial a la medida en Colombia',
    photo: 'software',
    description: 'Un sistema a la medida que reúne inventario, ventas y facturación electrónica.',
    seoTitle: 'Software Empresarial a la Medida en Colombia',
    seoDescription:
      'Software empresarial (ERP) a la medida: inventario, compras, ventas, facturación electrónica y reportes en un solo sistema. Cotice por WhatsApp.',
    intro:
      'Cuando cada área trabaja con su propio programa o con hojas de cálculo, la información se repite y se pierde tiempo cruzando datos. Desarrollamos un software empresarial a la medida, también conocido como ERP, que reúne inventario, compras, ventas y facturación electrónica en un solo sistema, adaptado a la forma de trabajar de su empresa.',
    items: [
      'Inventario por bodega y sede',
      'Compras y proveedores',
      'Ventas, cotizaciones y clientes',
      'Facturación electrónica',
      'Reportes e indicadores',
      'Usuarios y permisos por cargo',
    ],
    idealFor: [
      'Empresas con varias sedes',
      'Comercios con inventario',
      'Distribuidoras y bodegas',
      'Negocios que crecieron con hojas de cálculo',
    ],
    faqs: [
      {
        question: '¿Qué es un software ERP?',
        answer:
          'Es un sistema que reúne en un solo lugar los procesos principales de una empresa, como inventario, ventas, compras y facturación, para que todas las áreas trabajen con la misma información.',
      },
      {
        question: '¿Puedo empezar con un solo módulo?',
        answer:
          'Sí. Podemos empezar por el proceso que más tiempo le quita y agregar módulos por etapas, a medida que su empresa los necesite.',
      },
    ],
  },
  {
    base: SOFTWARE_PATH,
    slug: 'aplicaciones',
    national: true,
    title: 'Aplicaciones para empresas',
    heading: 'Desarrollo de aplicaciones para empresas en Colombia',
    photo: 'portatil',
    description: 'Aplicaciones que automatizan tareas y conectan a su equipo, en la oficina o en campo.',
    seoTitle: 'Desarrollo de Aplicaciones para Empresas',
    seoDescription:
      'Desarrollamos aplicaciones web y móviles para empresas: automatizan tareas, conectan equipos en campo y se integran con sus sistemas. Cotice por WhatsApp.',
    intro:
      'Muchas tareas de una empresa siguen dependiendo de llamadas, papeles y mensajes. Desarrollamos aplicaciones a la medida que automatizan esos procesos y conectan a su equipo, en la oficina o en campo, con la información que necesita en el momento.',
    items: [
      'Aplicaciones web',
      'Aplicaciones móviles',
      'Automatización de procesos',
      'Portales para clientes',
      'Conexión con otros sistemas',
      'Soporte y mejoras',
    ],
    idealFor: [
      'Equipos que trabajan en campo',
      'Empresas con procesos en papel',
      'Áreas de servicio al cliente',
      'Negocios con sistemas sin conectar',
    ],
    faqs: [
      {
        question: '¿Qué diferencia hay entre una aplicación web y una móvil?',
        answer:
          'Una aplicación web se usa desde el navegador en cualquier dispositivo, sin instalar nada. Una aplicación móvil se instala en el celular y puede aprovechar funciones como la cámara o la ubicación. Le recomendamos la opción adecuada según el uso.',
      },
      {
        question: '¿La aplicación se puede conectar con el software que ya tengo?',
        answer: 'En la mayoría de los casos, sí. En el diagnóstico revisamos qué sistemas usa y cómo conectarlos.',
      },
    ],
  },
  {
    base: SOFTWARE_PATH,
    slug: 'paginas-web',
    title: 'Páginas web',
    heading: `Diseño de páginas web para empresas${inCity}`,
    photo: 'codigo',
    description: 'Sitios corporativos rápidos y claros, preparados para aparecer en Google.',
    seoTitle: 'Diseño de Páginas Web para Empresas',
    seoDescription: `Diseño y desarrollo de páginas web para empresas${inCity}: sitios rápidos, optimizados para Google y conectados con WhatsApp y analítica. Cotice por WhatsApp.`,
    intro:
      'Su página web suele ser lo primero que ve un cliente. Diseñamos sitios corporativos propios, rápidos y claros, con cada servicio en su propia página, optimización para Google y botones de contacto que convierten las visitas en conversaciones por WhatsApp.',
    items: [
      'Diseño propio para su marca',
      'Sitio rápido y adaptado a celulares',
      'Optimización para Google (SEO)',
      'WhatsApp y formularios de contacto',
      'Google Analytics y Search Console',
      'Aviso de cookies y privacidad',
    ],
    idealFor: ['Empresas de servicios', 'Negocios sin página web', 'Sitios antiguos o lentos', 'Profesionales independientes'],
    faqs: [
      {
        question: '¿La página queda lista para aparecer en Google?',
        answer:
          'Sí. La entregamos con páginas bien estructuradas, títulos y descripciones propias, mapa del sitio y conexión con Search Console. La posición en los resultados depende también de la competencia, las reseñas y el tiempo, por eso le explicamos qué hacer después de publicarla.',
      },
      {
        question: '¿Puedo actualizar la página después?',
        answer: 'Sí. Acordamos cómo se harán los cambios: podemos encargarnos de ellos o dejarle las herramientas para hacerlos.',
      },
    ],
  },
  {
    base: SOFTWARE_PATH,
    slug: 'facturacion-electronica',
    national: true,
    title: 'Facturación electrónica',
    heading: 'Software de facturación electrónica para empresas en Colombia',
    photo: 'soporte',
    description: 'Facturas generadas desde cada venta, con validación previa de la DIAN.',
    seoTitle: 'Software de Facturación Electrónica DIAN',
    seoDescription:
      'Software de facturación electrónica con validación previa de la DIAN, integrado con sus ventas e inventario en un solo sistema. Cotice por WhatsApp.',
    intro:
      'Facturar en un programa aparte obliga a digitar dos veces y abre la puerta a errores. Integramos la facturación electrónica con sus ventas y su inventario: cada venta genera su factura, que se envía para validación previa de la DIAN, y el inventario y los reportes quedan al día.',
    items: [
      'Factura desde cada venta',
      'Validación previa de la DIAN',
      'Notas crédito y débito',
      'Envío de la factura al cliente',
      'Inventario actualizado',
      'Reportes de ventas',
    ],
    idealFor: [
      'Comercios con inventario',
      'Empresas de servicios',
      'Empresas con varias sedes',
      'Negocios que facturan en un programa aparte',
    ],
    faqs: [
      {
        question: '¿Qué es la validación previa de la DIAN?',
        answer:
          'Es el proceso por el que la DIAN revisa cada factura electrónica antes de que llegue a su cliente. Si la factura cumple los requisitos, queda validada y puede entregarse.',
      },
      {
        question: '¿Qué se necesita para empezar a facturar electrónicamente?',
        answer:
          'La empresa debe estar habilitada como facturador electrónico y el sistema debe superar las pruebas de habilitación de la DIAN. Le acompañamos en ese proceso.',
      },
    ],
  },
];

// Se usa en el inicio, en /servicios/ y en el pie de página
export const SOFTWARE_LINE = {
  title: 'Desarrollo de software',
  description: 'Software empresarial, aplicaciones y páginas web a la medida de su empresa.',
  slugs: SOFTWARE_SERVICES.map((service) => service.slug),
};

export const SOFTWARE_PROCESS = {
  eyebrow: 'Cómo trabajamos',
  title: 'Cómo desarrollamos su software',
  lead: 'Antes de escribir la primera línea de código, usted conoce el alcance, los tiempos y el costo.',
  steps: [
    { title: 'Diagnóstico', text: 'Conocemos cómo trabaja su empresa y qué conviene automatizar.' },
    { title: 'Propuesta', text: 'Definimos módulos, alcance, tiempos y costo antes de empezar.' },
    { title: 'Desarrollo por etapas', text: 'Entregamos por partes para que pueda probar y ajustar.' },
    { title: 'Puesta en marcha', text: 'Trasladamos su información y capacitamos a su equipo.' },
    { title: 'Soporte', text: 'Acompañamos el sistema y agregamos lo que su empresa necesite.' },
  ],
};

// Preguntas de la página principal de software (también se entregan a los buscadores)
export const SOFTWARE_FAQ = [
  {
    question: '¿Cuánto cuesta desarrollar un software a la medida?',
    answer:
      'Depende de los módulos que necesite y de la complejidad de sus procesos. Después del diagnóstico recibe una cotización detallada, con alcance, tiempos y costo.',
  },
  {
    question: '¿Cuánto tiempo toma el desarrollo?',
    answer:
      'Depende del alcance. Trabajamos por etapas, de modo que los primeros módulos pueden entrar en uso mientras se desarrollan los siguientes. Los tiempos quedan definidos en la propuesta.',
  },
  {
    question: '¿El software incluye facturación electrónica para la DIAN?',
    answer:
      'Sí. La facturación electrónica se integra con sus ventas y su inventario, y las facturas se emiten con validación previa de la DIAN.',
  },
  {
    question: '¿Se puede usar en varias sedes?',
    answer:
      'Sí. Varias sedes pueden trabajar en el mismo sistema, con usuarios y permisos por cargo. Si hace falta, también instalamos la red que las conecta.',
  },
  {
    question: '¿Qué pasa con la información que ya tengo en Excel u otros programas?',
    answer: 'La revisamos en el diagnóstico y definimos cómo trasladarla al nuevo sistema, para que no empiece de cero.',
  },
  {
    question: '¿También hacen páginas web y aplicaciones?',
    answer:
      'Sí. Creamos páginas web corporativas preparadas para aparecer en Google y aplicaciones que automatizan tareas de su empresa, conectadas con su software cuando lo necesite.',
  },
];

// Textos del formulario de contacto en las páginas de software
export const SOFTWARE_CONTACT = {
  title: 'Cuéntenos qué desea automatizar',
  text: 'Le responderemos directamente por WhatsApp para programar el diagnóstico.',
  note: 'Si nos describe sus procesos y los programas que usa hoy, la cotización será más rápida y precisa.',
  greeting: 'Hola AMG Networking, quiero cotizar un proyecto de software.',
  serviceLabel: 'Qué necesita',
  placeholder: 'Qué procesos desea automatizar, cuántas sedes o usuarios tiene, qué programas usa hoy…',
  services: SOFTWARE_SERVICES,
};
