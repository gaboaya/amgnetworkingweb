// Proyectos ejecutados: se muestran en el inicio y en /proyectos/, y cada uno tiene su página en
// /proyectos/<slug>/.
//
// `count` y `unit`: la cifra grande de la tarjeta · `art`: dibujo de la tarjeta ('sedes' o 'fincas')
// `scheme`: esquema de la solución (opcional) · `guide`: orientación general relacionada con el proyecto
//
// Datos que aparecen solos cuando se llenan (mientras estén vacíos, esa parte no se muestra):
// `specs`: ficha técnica, ej. [['Cámaras instaladas', '24'], ['Año del proyecto', '2025']]
// `photos`: fotos reales del proyecto, ej. ['timana1'], con la foto agregada en src/photos.js
export const PROJECTS = [
  {
    slug: 'camaras-y-redes-6-sedes-bucaramanga',
    count: 6,
    unit: 'sedes',
    art: 'sedes',
    place: 'Bucaramanga, Santander',
    crumb: 'Empresa con 6 sedes en Bucaramanga',
    title: 'Cámaras de seguridad y redes en 6 sedes',
    heading: 'Cámaras de seguridad y redes para una empresa con 6 sedes en Bucaramanga',
    summary: 'Instalamos las cámaras de seguridad y la red de datos en las seis sedes de una misma empresa.',
    seoTitle: 'Cámaras y Redes para 6 Sedes en Bucaramanga',
    seoDescription:
      'Instalación de cámaras de seguridad y red de datos en las 6 sedes de una empresa en Bucaramanga, Santander. Conozca el proyecto y cotice el suyo.',
    tags: ['CCTV', 'Redes'],
    facts: [
      ['Ubicación', 'Bucaramanga, Santander'],
      ['Servicios', 'CCTV y redes de datos'],
      ['Alcance', '6 sedes de una misma empresa'],
    ],
    includes: ['Instalación de cámaras de seguridad (CCTV) en las 6 sedes', 'Instalación de la red de datos en cada sede'],
    specs: [],
    photos: [],
    guide: {
      eyebrow: 'Varias sedes',
      title: 'Qué conviene al instalar en varias sedes',
      text: 'Cuando una empresa tiene varias sedes, lo importante es que todas se instalen con el mismo criterio. Así el soporte es más simple y cada ampliación parte de una base conocida.',
      items: [
        { title: 'Un mismo estándar', text: 'Mismas marcas, rutas de cableado y nombres de equipos en todas las sedes.' },
        { title: 'Documentación por sede', text: 'Puntos de red y ubicación de cámaras registrados para cada lugar.' },
        { title: 'Acceso para cada responsable', text: 'Cada administrador ve las cámaras de la sede que le corresponde.' },
      ],
      link: { label: 'Ver cámaras de seguridad', href: '/servicios/camaras-de-seguridad/' },
    },
    cta: {
      title: '¿Su empresa tiene varias sedes?',
      text: 'Cuéntenos cuántas son y qué necesita instalar. Revisamos cada lugar y le enviamos una propuesta clara.',
      message: 'Hola AMG Networking, quiero cotizar cámaras y redes para varias sedes.',
    },
  },
  {
    slug: 'camaras-y-redes-2-sedes-bucaramanga',
    count: 2,
    unit: 'sedes',
    art: 'sedes',
    place: 'Bucaramanga, Santander',
    crumb: 'Empresa con 2 sedes en Bucaramanga',
    title: 'Cámaras de seguridad y redes en 2 sedes',
    heading: 'Cámaras de seguridad y redes para una empresa con 2 sedes en Bucaramanga',
    summary: 'Instalación de cámaras de seguridad y red de datos en las dos sedes de la empresa.',
    seoTitle: 'Instalación de Cámaras y Redes en Bucaramanga',
    seoDescription:
      'Instalamos cámaras de seguridad y red de datos en las 2 sedes de una empresa en Bucaramanga. Conozca el proyecto de AMG Networking y cotice el suyo.',
    tags: ['CCTV', 'Redes'],
    facts: [
      ['Ubicación', 'Bucaramanga, Santander'],
      ['Servicios', 'CCTV y redes de datos'],
      ['Alcance', '2 sedes de una misma empresa'],
    ],
    includes: ['Instalación de cámaras de seguridad (CCTV) en las 2 sedes', 'Instalación de la red de datos en cada sede'],
    specs: [],
    photos: [],
    guide: {
      eyebrow: 'Nueva sede',
      title: 'Qué revisar cuando su empresa abre otra sede',
      text: 'Una nueva sede es el mejor momento para dejar la tecnología en orden. Planear la red y las cámaras antes de ocupar el lugar evita cableado improvisado y costos adicionales.',
      items: [
        { title: 'Puntos de red', text: 'Definir cuántos equipos, impresoras y cámaras tendrá el lugar antes de instalar.' },
        { title: 'Ubicación de cámaras', text: 'Cubrir accesos, cajas y bodegas con la resolución adecuada.' },
        { title: 'Conexión entre sedes', text: 'Evaluar si conviene compartir archivos o sistemas entre los dos lugares.' },
      ],
      link: { label: 'Ver instalación de redes', href: '/servicios/instalacion-de-redes/' },
    },
    cta: {
      title: '¿Va a abrir o adecuar una sede?',
      text: 'Cuéntenos dónde está y qué necesita. Revisamos el lugar y le enviamos una propuesta clara.',
      message: 'Hola AMG Networking, quiero cotizar cámaras y redes para una sede.',
    },
  },
  {
    slug: 'radioenlace-starlink-fincas-timana-huila',
    count: 2,
    unit: 'fincas conectadas',
    art: 'fincas',
    place: 'Timaná, Huila',
    crumb: 'Fincas en Timaná, Huila',
    title: 'Cámaras, radioenlace e internet Starlink para fincas',
    heading: 'Cámaras, radioenlace e internet Starlink para fincas en Timaná, Huila',
    summary: 'Instalamos CCTV y redes punto a punto por radioenlace para llevar el internet de una Starlink a dos fincas más.',
    seoTitle: 'Radioenlace y Starlink para Fincas en Huila',
    seoDescription:
      'CCTV y redes punto a punto por radioenlace en Timaná, Huila: llevamos internet de una Starlink a dos fincas más. Conozca el proyecto y cotice el suyo.',
    tags: ['CCTV', 'Radioenlace', 'Starlink'],
    facts: [
      ['Ubicación', 'Timaná, Huila'],
      ['Servicios', 'CCTV y redes punto a punto'],
      ['Internet', 'Starlink y radioenlace'],
      ['Alcance', '2 fincas más conectadas'],
    ],
    scheme: {
      text: 'Una conexión Starlink entrega internet a la finca principal. Desde allí, radioenlaces punto a punto lo llevan a dos fincas más.',
      source: { name: 'Starlink', detail: 'Internet satelital' },
      hub: { name: 'Finca principal', detail: 'Conexión Starlink, red local y cámaras de seguridad (CCTV)' },
      sites: [
        { name: 'Segunda finca', detail: 'Internet por radioenlace' },
        { name: 'Tercera finca', detail: 'Internet por radioenlace' },
      ],
    },
    includes: [
      'Instalación de cámaras de seguridad (CCTV)',
      'Redes punto a punto por radioenlace',
      'Conexión a internet por medio de una Starlink',
      'Internet llevado a dos fincas más',
    ],
    specs: [],
    photos: [],
    guide: {
      eyebrow: 'Radioenlaces',
      title: 'Cuándo conviene un radioenlace',
      text: 'Un radioenlace une dos puntos con línea de vista, sin tender cable entre ellos. Junto con una conexión como Starlink, permite llevar internet a lugares alejados.',
      items: [
        { title: 'Fincas y zonas rurales', text: 'Cuando no hay cableado disponible o tenderlo no es viable.' },
        { title: 'Sedes o bodegas cercanas', text: 'Para compartir una misma conexión y una misma red entre edificios.' },
        { title: 'Cámaras lejos del punto de internet', text: 'Para llevar el video hasta el lugar donde se hace el monitoreo.' },
      ],
      link: { label: 'Ver radioenlaces e internet rural', href: '/servicios/radioenlaces/' },
    },
    cta: {
      title: '¿Necesita llevar internet a una finca o a otra sede?',
      text: 'Cuéntenos dónde está y qué desea conectar. Revisamos el lugar y le enviamos una propuesta clara.',
      message: 'Hola AMG Networking, quiero cotizar: Radioenlaces e internet rural.',
    },
  },
];
