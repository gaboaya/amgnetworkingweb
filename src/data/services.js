import { inCity } from '../seo.js';

// Cada servicio es un "puerto" del panel de la página de inicio y tiene su propia página
// en /servicios/<slug>/ con este contenido. Es lo que más ayuda a aparecer en Google.
// `short`: etiqueta bajo el puerto · `seoTitle`: título en Google (se le agrega la ciudad y la marca)
export const SERVICES = [
  {
    slug: 'instalacion-de-redes',
    short: 'REDES',
    title: 'Instalación de redes',
    description: 'Cableado estructurado para hogares, oficinas y empresas, organizado y listo para crecer.',
    seoTitle: 'Instalación de Redes y Cableado',
    seoDescription: `Instalamos redes con cableado estructurado Cat 6 / 6A, fibra óptica, racks y patch panels para hogares, oficinas y empresas${inCity}. Cotiza por WhatsApp.`,
    intro:
      'Una red bien instalada es la base de todo lo demás: internet estable, cámaras que no se desconectan y equipos que trabajan sin cortes. Diseñamos e instalamos el cableado estructurado de tu hogar, oficina o empresa con rutas ordenadas, cada punto probado y todo etiquetado, para que crecer o hacer cambios sea fácil.',
    items: [
      'Cableado estructurado Cat 6 / 6A',
      'Fibra óptica',
      'Racks y patch panels',
      'Canaletas y ductos',
      'Pruebas de cada punto de red',
      'Etiquetado y documentación',
    ],
    idealFor: ['Oficinas nuevas o remodeladas', 'Locales comerciales', 'Casas y apartamentos', 'Bodegas y empresas en crecimiento'],
    faqs: [
      {
        question: '¿Qué diferencia hay entre el cable Cat 6 y el Cat 6A?',
        answer:
          'Los dos sirven para redes rápidas. El Cat 6A mantiene 10 Gbps hasta 100 metros, mientras que el Cat 6 lo logra solo en tramos más cortos (hasta unos 55 metros). Te recomendamos el adecuado según el tamaño del lugar y el uso que le vas a dar.',
      },
      {
        question: '¿Pueden organizar el cableado que ya tengo?',
        answer:
          'Sí. Si tu rack o tus cables están desordenados, los organizamos, etiquetamos y probamos. Muchas fallas de red vienen de conexiones en mal estado que no se ven a simple vista.',
      },
    ],
  },
  {
    slug: 'camaras-de-seguridad',
    short: 'CCTV',
    title: 'Cámaras de seguridad',
    description: 'Videovigilancia con grabación y acceso desde tu celular, estés donde estés.',
    seoTitle: 'Instalación de Cámaras de Seguridad',
    seoDescription: `Instalamos cámaras de seguridad IP y HD con grabador DVR o NVR y visualización desde el celular para hogares y negocios${inCity}. Cotiza por WhatsApp.`,
    intro:
      'Protege tu casa o tu negocio con un sistema de videovigilancia que funcione de verdad. Elegimos las cámaras según cada espacio, las instalamos con cableado ordenado y dejamos configurado el acceso desde tu celular, para que veas en vivo y revises las grabaciones cuando lo necesites.',
    items: [
      'Cámaras IP y análogas HD',
      'Grabadores DVR / NVR',
      'Visualización remota en el celular',
      'Almacenamiento de video',
      'Cámaras para interior y exterior',
      'Mantenimiento de sistemas existentes',
    ],
    idealFor: ['Casas y conjuntos', 'Locales y tiendas', 'Oficinas', 'Bodegas y parqueaderos'],
    faqs: [
      {
        question: '¿Qué es mejor: cámaras IP o análogas?',
        answer:
          'Las cámaras IP ofrecen mejor resolución y más funciones; las análogas HD suelen ser más económicas y funcionan bien en muchos casos. Te recomendamos la opción adecuada según el lugar, la cantidad de cámaras y tu presupuesto.',
      },
      {
        question: '¿Cuántos días de grabación puedo guardar?',
        answer:
          'Depende de la cantidad de cámaras, la resolución y la capacidad del disco del grabador. Calculamos el almacenamiento para que guardes los días de video que necesitas.',
      },
    ],
  },
  {
    slug: 'redes-wifi',
    short: 'WIFI',
    title: 'Redes WiFi',
    description: 'Cobertura inalámbrica estable en todos tus espacios, sin zonas muertas.',
    seoTitle: 'Instalación de Redes WiFi',
    seoDescription: `WiFi estable en toda tu casa, oficina o negocio${inCity}: access points, sistemas mesh y red para invitados, sin zonas muertas. Cotiza por WhatsApp.`,
    intro:
      'Si el WiFi no llega a todos los espacios o se cae a cada rato, no siempre se arregla con un router más potente. Revisamos dónde se pierde la señal y diseñamos la cobertura con access points o sistemas mesh bien ubicados, para que tengas conexión estable en cada rincón.',
    items: [
      'Estudio de cobertura',
      'Access points',
      'Sistemas mesh',
      'Red para invitados separada',
      'Configuración segura del WiFi',
      'Ajuste de canales e interferencias',
    ],
    idealFor: ['Casas de varios pisos', 'Oficinas y coworkings', 'Restaurantes y locales', 'Hoteles y conjuntos'],
    faqs: [
      {
        question: '¿Por qué mi WiFi es lento en algunas partes de la casa?',
        answer:
          'Las paredes, los pisos y otros equipos debilitan la señal. Con access points o un sistema mesh bien ubicados, la cobertura llega a todos los espacios.',
      },
      {
        question: '¿Puedo tener una red WiFi para clientes o invitados?',
        answer:
          'Sí. Configuramos una red para invitados separada de tu red principal, para que tus equipos y tu información queden protegidos.',
      },
    ],
  },
  {
    slug: 'mantenimiento-de-redes',
    short: 'MANT. RED',
    title: 'Mantenimiento de redes',
    description: 'Diagnóstico, orden y optimización de la red que ya tienes.',
    seoTitle: 'Mantenimiento de Redes',
    seoDescription: `Diagnóstico y mantenimiento de redes: pruebas de puntos, orden del rack y optimización de velocidad para empresas y hogares${inCity}. Cotiza por WhatsApp.`,
    intro:
      'Con el tiempo, las redes se llenan de cables sin nombre, equipos que nadie recuerda y puntos que fallan de vez en cuando. Revisamos tu red completa, encontramos lo que la hace lenta o inestable, la organizamos y te la entregamos documentada.',
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
          'En empresas, una revisión preventiva al año ayuda a evitar fallas. También conviene hacerla cuando agregas equipos o notas que la red está lenta.',
      },
      {
        question: '¿Pueden revisar una red que instaló otra empresa?',
        answer:
          'Sí. Hacemos el diagnóstico, corregimos lo necesario y dejamos la red organizada y documentada, sin importar quién la instaló.',
      },
    ],
  },
  {
    slug: 'mantenimiento-de-servidores',
    short: 'SERVIDOR',
    title: 'Mantenimiento de servidores',
    description: 'Preventivo y correctivo para que tu información esté protegida.',
    seoTitle: 'Mantenimiento de Servidores',
    seoDescription: `Mantenimiento preventivo y correctivo de servidores, copias de seguridad, actualizaciones y monitoreo para proteger la información de tu empresa${inCity}.`,
    intro:
      'El servidor guarda lo más importante de tu empresa: archivos, sistemas y bases de datos. Lo mantenemos al día con revisiones preventivas, actualizaciones y copias de seguridad, y te ayudamos a resolver las fallas cuando se presentan, para que tu operación no se detenga.',
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
          'Un daño en el disco, un virus o un error humano pueden borrar información valiosa. Con copias de seguridad automáticas y revisadas, puedes recuperarla.',
      },
      {
        question: '¿Atienden servidores pequeños o equipos NAS?',
        answer: 'Sí. Atendemos desde equipos NAS y servidores pequeños hasta los servidores de una empresa.',
      },
    ],
  },
  {
    slug: 'mantenimiento-de-computadores',
    short: 'PC',
    title: 'Mantenimiento de computadores',
    description: 'PC y portátiles más rápidos, limpios y confiables.',
    seoTitle: 'Mantenimiento de Computadores',
    seoDescription: `Mantenimiento de PC y portátiles: limpieza, formateo, instalación de programas y mejoras de SSD y RAM para hogares y empresas${inCity}. Cotiza por WhatsApp.`,
    intro:
      'Un computador lento o que se recalienta te quita tiempo todos los días. Hacemos mantenimiento preventivo y correctivo a PC y portátiles: limpieza interna, revisión de componentes, formateo e instalación de programas, y mejoras como discos SSD o más memoria RAM para que tu equipo vuelva a rendir.',
    items: [
      'Limpieza interna y cambio de pasta térmica',
      'Diagnóstico de fallas',
      'Formateo e instalación del sistema',
      'Instalación de programas',
      'Mejoras de SSD y RAM',
      'Mantenimiento para empresas',
    ],
    idealFor: [
      'Computadores lentos o que se calientan',
      'Portátiles de trabajo o estudio',
      'Equipos de oficinas y empresas',
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
          'En la mayoría de equipos con disco mecánico, sí: el sistema enciende y abre los programas mucho más rápido. Te decimos si tu equipo lo admite.',
      },
    ],
  },
  {
    slug: 'configuracion-de-equipos',
    short: 'EQUIPOS',
    title: 'Configuración de equipos',
    description: 'Routers, switches y firewalls configurados con seguridad.',
    seoTitle: 'Configuración de Routers y Firewall',
    seoDescription: `Configuración segura de routers, switches y firewalls: VLAN, VPN, control de acceso y redes separadas para tu empresa u hogar${inCity}. Cotiza por WhatsApp.`,
    intro:
      'Un router o un switch con la configuración de fábrica deja tu red lenta y expuesta. Configuramos tus equipos de red con buenas prácticas de seguridad: redes separadas (VLAN), acceso remoto seguro (VPN), reglas de firewall y contraseñas robustas, y te explicamos todo en lenguaje claro.',
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
          'Una VPN te deja conectarte a la red de tu empresa desde cualquier lugar de forma segura. Es útil si trabajas desde casa o necesitas ver archivos o cámaras fuera de la oficina.',
      },
    ],
  },
  {
    slug: 'soporte-tecnico',
    short: 'SOPORTE',
    title: 'Soporte técnico',
    description: 'Asistencia remota y en sitio para que tu negocio no se detenga.',
    seoTitle: 'Soporte Técnico Remoto y en Sitio',
    seoDescription: `Soporte técnico para hogares y empresas: asistencia remota y visitas en sitio para redes, computadores y cámaras${inCity}. Escríbenos por WhatsApp.`,
    intro: `Cuando algo deja de funcionar, necesitas a alguien que responda y lo resuelva. Te damos soporte técnico remoto para solucionar muchos problemas sin esperar una visita y, cuando hace falta, vamos a tu hogar u oficina${inCity}.`,
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
          'Con tu autorización, nos conectamos a tu computador por internet con una herramienta segura y resolvemos el problema mientras lo ves en tu pantalla.',
      },
      {
        question: '¿Qué necesito para pedir soporte?',
        answer:
          'Escríbenos por WhatsApp contando qué pasa y, si puedes, envía fotos o capturas de pantalla. Te decimos si se puede resolver de forma remota o si programamos una visita.',
      },
    ],
  },
];
