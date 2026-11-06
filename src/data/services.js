import { inCity } from '../seo.js';
import { SOFTWARE_LINE, SOFTWARE_SERVICES } from './software.js';

// Cada servicio tiene su propia página en /servicios/<slug>/ con este contenido.
// Es lo que más ayuda a aparecer en Google.
// `seoTitle`: título en Google (se le agrega la ciudad y la marca) · `photo`: ver src/photos.js
// `national` y `heading`: ver src/data/software.js
export const SERVICES = [
  ...SOFTWARE_SERVICES,
  {
    slug: 'instalacion-de-redes',
    title: 'Instalación de redes y cableado',
    photo: 'rack',
    description: 'Cableado estructurado para empresas, oficinas y hogares, organizado y listo para crecer.',
    seoTitle: 'Instalación de Redes y Cableado',
    seoDescription: `Instalamos redes con cableado estructurado Cat 6 / 6A, fibra óptica, racks y patch panels para empresas, oficinas y hogares${inCity}. Cotice por WhatsApp.`,
    intro:
      'Una red bien instalada es la base de todo lo demás: internet estable, cámaras que no se desconectan y equipos que trabajan sin cortes. Diseñamos e instalamos el cableado estructurado de su empresa, oficina u hogar con rutas ordenadas, cada punto probado y todo etiquetado, para que crecer o hacer cambios sea fácil.',
    items: [
      'Cableado estructurado Cat 6 / 6A',
      'Fibra óptica',
      'Racks y patch panels',
      'Canaletas y ductos',
      'Pruebas de cada punto de red',
      'Etiquetado y documentación',
    ],
    idealFor: ['Oficinas nuevas o remodeladas', 'Locales comerciales', 'Bodegas y empresas en crecimiento', 'Casas y apartamentos'],
    faqs: [
      {
        question: '¿Qué diferencia hay entre el cable Cat 6 y el Cat 6A?',
        answer:
          'Los dos sirven para redes rápidas. El Cat 6A mantiene 10 Gbps hasta 100 metros, mientras que el Cat 6 lo logra solo en tramos más cortos (hasta unos 55 metros). Le recomendamos el adecuado según el tamaño del lugar y el uso que le va a dar.',
      },
      {
        question: '¿Pueden organizar el cableado que ya tengo?',
        answer:
          'Sí. Si su rack o sus cables están desordenados, los organizamos, etiquetamos y probamos. Muchas fallas de red vienen de conexiones en mal estado que no se ven a simple vista.',
      },
    ],
  },
  {
    slug: 'radioenlaces',
    national: true,
    title: 'Radioenlaces e internet rural',
    heading: 'Radioenlaces e internet rural en Colombia',
    photo: 'router',
    description: 'Enlaces punto a punto para llevar internet a fincas y sedes alejadas, sin tender cable.',
    seoTitle: 'Radioenlaces e Internet Rural en Colombia',
    seoDescription:
      'Instalamos radioenlaces punto a punto para llevar internet a fincas, sedes y bodegas alejadas, incluso desde una conexión Starlink. Cotice por WhatsApp.',
    intro:
      'Cuando tender cable no es viable, un radioenlace une dos puntos con línea de vista y lleva internet o datos de un lugar a otro. Instalamos enlaces punto a punto para conectar fincas, sedes y bodegas, y distribuimos conexiones como Starlink hacia los lugares donde se necesitan.',
    items: [
      'Enlaces punto a punto',
      'Internet para fincas y zonas rurales',
      'Conexión con Starlink',
      'Distribución de internet a otros sitios',
      'Cámaras conectadas por radioenlace',
      'Pruebas de señal y entrega documentada',
    ],
    idealFor: ['Fincas y zonas rurales', 'Sedes y bodegas cercanas', 'Cámaras lejos del punto de internet', 'Lugares sin cableado disponible'],
    faqs: [
      {
        question: '¿Qué es un radioenlace?',
        answer:
          'Es una conexión inalámbrica entre dos antenas que se ven entre sí. Permite llevar internet o datos de un punto a otro sin tender cable.',
      },
      {
        question: '¿Se puede llevar el internet de una Starlink a otra finca?',
        answer:
          'Sí, con un radioenlace punto a punto, siempre que haya línea de vista entre los dos puntos o un punto intermedio. Así lo hicimos en Timaná, Huila, donde llevamos el internet de una Starlink a dos fincas más.',
      },
    ],
  },
  {
    slug: 'redes-wifi',
    title: 'Redes WiFi',
    photo: 'router',
    description: 'Cobertura inalámbrica estable en todos sus espacios, sin zonas muertas.',
    seoTitle: 'Instalación de Redes WiFi',
    seoDescription: `WiFi estable en toda su empresa, oficina u hogar${inCity}: access points, sistemas mesh y red para invitados, sin zonas muertas. Cotice por WhatsApp.`,
    intro:
      'Si el WiFi no llega a todos los espacios o se cae a cada rato, no siempre se arregla con un router más potente. Revisamos dónde se pierde la señal y diseñamos la cobertura con access points o sistemas mesh bien ubicados, para que tenga conexión estable en cada rincón.',
    items: [
      'Estudio de cobertura',
      'Access points',
      'Sistemas mesh',
      'Red para invitados separada',
      'Configuración segura del WiFi',
      'Ajuste de canales e interferencias',
    ],
    idealFor: ['Oficinas y coworkings', 'Restaurantes y locales', 'Hoteles y conjuntos', 'Casas de varios pisos'],
    faqs: [
      {
        question: '¿Por qué el WiFi es lento en algunas partes del lugar?',
        answer:
          'Las paredes, los pisos y otros equipos debilitan la señal. Con access points o un sistema mesh bien ubicados, la cobertura llega a todos los espacios.',
      },
      {
        question: '¿Puedo tener una red WiFi para clientes o invitados?',
        answer:
          'Sí. Configuramos una red para invitados separada de su red principal, para que sus equipos y su información queden protegidos.',
      },
    ],
  },
  {
    slug: 'mantenimiento-de-redes',
    title: 'Mantenimiento de redes',
    photo: 'rack',
    description: 'Diagnóstico, orden y optimización de la red que ya tiene.',
    seoTitle: 'Mantenimiento de Redes',
    seoDescription: `Diagnóstico y mantenimiento de redes: pruebas de puntos, orden del rack y optimización de velocidad para empresas y hogares${inCity}. Cotice por WhatsApp.`,
    intro:
      'Con el tiempo, las redes se llenan de cables sin nombre, equipos que nadie recuerda y puntos que fallan de vez en cuando. Revisamos su red completa, encontramos lo que la hace lenta o inestable, la organizamos y se la entregamos documentada.',
    items: [
      'Diagnóstico de la red',
      'Pruebas de puntos de red',
      'Organización y etiquetado del rack',
      'Optimización de velocidad',
      'Actualización de equipos de red',
      'Documentación de la red',
    ],
    idealFor: [
      'Empresas con fallas de conexión',
      'Oficinas con racks desordenados',
      'Negocios que crecieron sin planear la red',
      'Hogares con internet inestable',
    ],
    faqs: [
      {
        question: '¿Cada cuánto se recomienda revisar la red?',
        answer:
          'En empresas, una revisión preventiva al año ayuda a evitar fallas. También conviene hacerla cuando agrega equipos o nota que la red está lenta.',
      },
      {
        question: '¿Pueden revisar una red que instaló otra empresa?',
        answer:
          'Sí. Hacemos el diagnóstico, corregimos lo necesario y dejamos la red organizada y documentada, sin importar quién la instaló.',
      },
    ],
  },
  {
    slug: 'camaras-de-seguridad',
    title: 'Cámaras de seguridad',
    photo: 'camara',
    description: 'Videovigilancia con grabación y acceso desde su celular, esté donde esté.',
    seoTitle: 'Instalación de Cámaras de Seguridad',
    seoDescription: `Instalamos cámaras de seguridad IP y HD con grabador DVR o NVR y visualización desde el celular para empresas y hogares${inCity}. Cotice por WhatsApp.`,
    intro:
      'Proteja su empresa o su hogar con un sistema de videovigilancia que funcione de verdad. Elegimos las cámaras según cada espacio, las instalamos con cableado ordenado y dejamos configurado el acceso desde su celular, para que vea en vivo y revise las grabaciones cuando lo necesite.',
    items: [
      'Cámaras IP y análogas HD',
      'Grabadores DVR / NVR',
      'Visualización remota en el celular',
      'Almacenamiento de video',
      'Cámaras para interior y exterior',
      'Mantenimiento de sistemas existentes',
    ],
    idealFor: ['Oficinas', 'Locales y tiendas', 'Bodegas y parqueaderos', 'Casas y conjuntos'],
    faqs: [
      {
        question: '¿Qué es mejor: cámaras IP o análogas?',
        answer:
          'Las cámaras IP ofrecen mejor resolución y más funciones; las análogas HD suelen ser más económicas y funcionan bien en muchos casos. Le recomendamos la opción adecuada según el lugar, la cantidad de cámaras y su presupuesto.',
      },
      {
        question: '¿Cuántos días de grabación puedo guardar?',
        answer:
          'Depende de la cantidad de cámaras, la resolución y la capacidad del disco del grabador. Calculamos el almacenamiento para que guarde los días de video que necesita.',
      },
    ],
  },
  {
    slug: 'configuracion-de-equipos',
    title: 'Configuración de routers y firewall',
    photo: 'router',
    description: 'Routers, switches y firewalls configurados con seguridad.',
    seoTitle: 'Configuración de Routers y Firewall',
    seoDescription: `Configuración segura de routers, switches y firewalls: VLAN, VPN, control de acceso y redes separadas para su empresa u hogar${inCity}. Cotice por WhatsApp.`,
    intro:
      'Un router o un switch con la configuración de fábrica deja su red lenta y expuesta. Configuramos sus equipos de red con buenas prácticas de seguridad: redes separadas (VLAN), acceso remoto seguro (VPN), reglas de firewall y contraseñas robustas, y le explicamos todo en lenguaje claro.',
    items: [
      'Routers y switches',
      'Firewall',
      'VLAN y redes separadas',
      'VPN para acceso remoto',
      'Control de acceso',
      'Actualización de firmware',
    ],
    idealFor: [
      'Empresas con trabajo remoto',
      'Oficinas con varias áreas',
      'Negocios con cámaras y WiFi para clientes',
      'Hogares que quieren más seguridad',
    ],
    faqs: [
      {
        question: '¿Para qué sirve una VLAN?',
        answer:
          'Permite dividir la red en partes independientes, por ejemplo: equipos de la empresa, cámaras y WiFi de invitados. Así, un problema en una parte no afecta a las demás y la red es más segura.',
      },
      {
        question: '¿Qué es una VPN y la necesito?',
        answer:
          'Una VPN le permite conectarse a la red de su empresa desde cualquier lugar de forma segura. Es útil si trabaja desde casa o necesita ver archivos o cámaras fuera de la oficina.',
      },
    ],
  },
  {
    slug: 'mantenimiento-de-servidores',
    title: 'Mantenimiento de servidores',
    photo: 'servidores',
    description: 'Preventivo y correctivo para que su información esté protegida.',
    seoTitle: 'Mantenimiento de Servidores',
    seoDescription: `Mantenimiento preventivo y correctivo de servidores, copias de seguridad, actualizaciones y monitoreo para proteger la información de su empresa${inCity}.`,
    intro:
      'El servidor guarda lo más importante de su empresa: archivos, sistemas y bases de datos. Lo mantenemos al día con revisiones preventivas, actualizaciones y copias de seguridad, y le ayudamos a resolver las fallas cuando se presentan, para que su operación no se detenga.',
    items: [
      'Mantenimiento preventivo y correctivo',
      'Copias de seguridad',
      'Actualizaciones del sistema',
      'Monitoreo de discos y recursos',
      'Revisión de hardware',
      'Atención de fallas',
    ],
    idealFor: [
      'Empresas con servidor propio',
      'Oficinas con archivos compartidos',
      'Negocios con sistemas contables o de facturación',
      'Equipos NAS',
    ],
    faqs: [
      {
        question: '¿Por qué son importantes las copias de seguridad?',
        answer:
          'Un daño en el disco, un virus o un error humano pueden borrar información valiosa. Con copias de seguridad automáticas y revisadas, puede recuperarla.',
      },
      {
        question: '¿Atienden servidores pequeños o equipos NAS?',
        answer: 'Sí. Atendemos desde equipos NAS y servidores pequeños hasta los servidores de una empresa.',
      },
    ],
  },
  {
    slug: 'mantenimiento-de-computadores',
    title: 'Mantenimiento de computadores',
    photo: 'equipo',
    description: 'PC y portátiles más rápidos, limpios y confiables.',
    seoTitle: 'Mantenimiento de Computadores',
    seoDescription: `Mantenimiento de PC y portátiles: limpieza, formateo, instalación de programas y mejoras de SSD y RAM para empresas y hogares${inCity}. Cotice por WhatsApp.`,
    intro:
      'Un computador lento o que se recalienta quita tiempo todos los días. Hacemos mantenimiento preventivo y correctivo a PC y portátiles: limpieza interna, revisión de componentes, formateo e instalación de programas, y mejoras como discos SSD o más memoria RAM para que su equipo vuelva a rendir.',
    items: [
      'Limpieza interna y cambio de pasta térmica',
      'Diagnóstico de fallas',
      'Formateo e instalación del sistema',
      'Instalación de programas',
      'Mejoras de SSD y RAM',
      'Mantenimiento para empresas',
    ],
    idealFor: [
      'Equipos de oficinas y empresas',
      'Portátiles de trabajo o estudio',
      'Computadores lentos o que se calientan',
      'PC de escritorio',
    ],
    faqs: [
      {
        question: '¿Cada cuánto se debe hacer mantenimiento a un computador?',
        answer:
          'Recomendamos una limpieza y revisión al menos una vez al año; en lugares con mucho polvo o con uso intensivo, cada seis meses.',
      },
      {
        question: '¿Cambiar a un disco SSD sí hace más rápido el computador?',
        answer:
          'En la mayoría de equipos con disco mecánico, sí: el sistema enciende y abre los programas mucho más rápido. Le decimos si su equipo lo admite.',
      },
    ],
  },
  {
    slug: 'soporte-tecnico',
    title: 'Soporte técnico',
    photo: 'soporte',
    description: 'Asistencia remota y en sitio para que su operación no se detenga.',
    seoTitle: 'Soporte Técnico Remoto y en Sitio',
    seoDescription: `Soporte técnico para empresas y hogares: asistencia remota y visitas en sitio para redes, computadores y cámaras${inCity}. Escríbanos por WhatsApp.`,
    intro: `Cuando algo deja de funcionar, usted necesita a alguien que responda y lo resuelva. Damos soporte técnico remoto para solucionar muchos problemas sin esperar una visita y, cuando hace falta, vamos a su empresa u hogar${inCity}.`,
    items: [
      'Soporte remoto',
      'Visitas en sitio',
      'Redes e internet',
      'Computadores y portátiles',
      'Cámaras de seguridad',
      'Seguimiento de cada caso',
    ],
    idealFor: ['Pequeñas y medianas empresas', 'Oficinas sin área de sistemas', 'Profesionales independientes', 'Hogares'],
    faqs: [
      {
        question: '¿Cómo funciona el soporte remoto?',
        answer:
          'Con su autorización, nos conectamos a su computador por internet con una herramienta segura y resolvemos el problema mientras lo ve en su pantalla.',
      },
      {
        question: '¿Qué necesito para pedir soporte?',
        answer:
          'Escríbanos por WhatsApp contando qué ocurre y, si puede, envíe fotos o capturas de pantalla. Le decimos si se puede resolver de forma remota o si programamos una visita.',
      },
    ],
  },
];

// Líneas de servicio: así se agrupan los servicios en el inicio, en /servicios/ y en el pie de página
export const SERVICE_LINES = [
  {
    title: 'Redes y conectividad',
    photo: 'rack',
    description: 'Cableado, WiFi, radioenlaces y redes de datos ordenadas, probadas y listas para crecer.',
    slugs: ['instalacion-de-redes', 'radioenlaces', 'redes-wifi', 'mantenimiento-de-redes'],
  },
  {
    title: 'CCTV y seguridad',
    photo: 'camara',
    description: 'Videovigilancia y equipos de red configurados para proteger sus instalaciones y su información.',
    slugs: ['camaras-de-seguridad', 'configuracion-de-equipos'],
  },
  {
    title: 'Soporte tecnológico',
    photo: 'soporte',
    description: 'Mantenimiento preventivo y correctivo, con asistencia remota y en sitio.',
    slugs: ['mantenimiento-de-servidores', 'mantenimiento-de-computadores', 'soporte-tecnico'],
  },
];

export const servicesOf = (line) => line.slugs.map((slug) => SERVICES.find((service) => service.slug === slug));

export const lineOf = (service) => [SOFTWARE_LINE, ...SERVICE_LINES].find((line) => line.slugs.includes(service.slug));

// Otros servicios de la misma familia (software o infraestructura)
export const relatedServices = (service) => SERVICES.filter((s) => s !== service && Boolean(s.base) === Boolean(service.base));
