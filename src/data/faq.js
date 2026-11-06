import { BUSINESS } from '../config.js';

// Preguntas frecuentes: se muestran en el sitio y también se entregan a los buscadores
// como datos estructurados (FAQPage). Responda aquí lo que más preguntan sus clientes.
export const FAQ = [
  {
    question: '¿Qué servicios ofrece AMG Networking?',
    answer:
      'Desarrollo de software, aplicaciones y páginas web para empresas; instalación de redes, radioenlaces y cámaras de seguridad (CCTV); mantenimiento de redes, servidores y computadores, y soporte técnico remoto y en sitio.',
  },
  {
    question: '¿Desarrollan software a la medida para empresas?',
    answer:
      'Sí. Desarrollamos software empresarial que reúne inventario, ventas y facturación electrónica en un mismo sistema, además de aplicaciones y páginas web.',
  },
  {
    question: `¿Trabajan fuera de ${BUSINESS.city}?`,
    answer:
      'Sí. Hemos ejecutado proyectos en Bucaramanga y en Timaná, Huila. Escríbanos por WhatsApp con la ubicación del lugar y coordinamos la visita o el soporte remoto.',
  },
  {
    question: '¿Atienden solo a empresas?',
    answer:
      'Atendemos empresas, oficinas, comercios, fincas y hogares. Cada trabajo se define según el espacio, la cantidad de equipos y su necesidad.',
  },
  {
    question: '¿Puedo ver las cámaras de seguridad desde el celular?',
    answer:
      'Sí. Instalamos cámaras IP y HD con grabador DVR o NVR y dejamos configurada la visualización remota, para que vea sus cámaras en vivo y revise las grabaciones desde su celular.',
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer: `Escríbanos por WhatsApp al ${BUSINESS.phoneDisplay} o diligencie el formulario de contacto. Si nos envía fotos, videos o una descripción de sus procesos, la cotización será más rápida y precisa.`,
  },
];
