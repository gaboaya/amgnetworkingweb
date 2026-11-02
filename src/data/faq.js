import { BUSINESS } from '../config.js';

// Preguntas frecuentes: se muestran en el sitio y también se entregan a los buscadores
// como datos estructurados (FAQPage). Responde aquí lo que más te preguntan tus clientes.
export const FAQ = [
  {
    question: '¿Qué servicios ofrece AMG Networking?',
    answer:
      'Instalación de redes y cableado estructurado, cámaras de seguridad (CCTV), redes WiFi, mantenimiento de redes, servidores y computadores, configuración de routers, switches y firewalls, y soporte técnico remoto y en sitio.',
  },
  {
    question: '¿Puedo ver mis cámaras de seguridad desde el celular?',
    answer:
      'Sí. Instalamos cámaras IP y HD con grabador DVR o NVR y dejamos configurada la visualización remota, para que veas tus cámaras en vivo y revises las grabaciones desde tu celular.',
  },
  {
    question: '¿Atienden hogares o solo empresas?',
    answer:
      'Atendemos hogares, oficinas y empresas. Cada trabajo se define según el espacio, la cantidad de equipos y lo que necesitas.',
  },
  ...(BUSINESS.city
    ? [
        {
          question: `¿Prestan servicio en ${BUSINESS.city}?`,
          answer: `Sí, trabajamos en ${BUSINESS.city}. Escríbenos por WhatsApp con la dirección del lugar y coordinamos la visita o el soporte remoto.`,
        },
      ]
    : []),
  {
    question: '¿Hacen mantenimiento a la red y a los computadores que ya tengo?',
    answer:
      'Sí. Diagnosticamos y optimizamos redes existentes, organizamos racks y hacemos mantenimiento preventivo y correctivo a computadores, portátiles y servidores.',
  },
  {
    question: '¿Ofrecen soporte técnico remoto?',
    answer:
      'Sí. Damos soporte remoto y, cuando el problema lo requiere, programamos una visita en sitio.',
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer: `Escríbenos por WhatsApp al ${BUSINESS.phoneDisplay} o llena el formulario de contacto. Si nos envías fotos o videos del lugar o del equipo, la cotización sale más rápida y precisa.`,
  },
];
