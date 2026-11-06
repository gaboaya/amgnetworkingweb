import camara from './assets/foto-camara.webp';
import codigo from './assets/foto-codigo.webp';
import equipo from './assets/foto-equipo.webp';
import portatil from './assets/foto-portatil.webp';
import rack from './assets/foto-rack.webp';
import router from './assets/foto-router.webp';
import servidores from './assets/foto-servidores.webp';
import software from './assets/foto-software.webp';
import soporte from './assets/foto-soporte.webp';
import tecnico from './assets/foto-tecnico.webp';

// Fotos del sitio (se generan con `npm run images`). Uso: <img {...PHOTOS.rack} />
export const PHOTOS = {
  camara: { src: camara, width: 660, height: 495, alt: 'Cámara de seguridad domo y monitores de videovigilancia' },
  codigo: { src: codigo, width: 760, height: 570, alt: 'Editor de código con un proyecto web en desarrollo' },
  equipo: { src: equipo, width: 780, height: 486, alt: 'Técnica de AMG Networking trabajando junto a un rack de red' },
  portatil: { src: portatil, width: 760, height: 570, alt: 'Portátil con un símbolo de código en la pantalla sobre un escritorio' },
  rack: { src: rack, width: 640, height: 480, alt: 'Rack de red con cableado estructurado' },
  router: { src: router, width: 760, height: 570, alt: 'Router con antenas sobre un escritorio de oficina' },
  servidores: { src: servidores, width: 774, height: 580, alt: 'Servidores en un centro de datos' },
  software: { src: software, width: 780, height: 584, alt: 'Desarrolladora de AMG Networking programando en un portátil junto a un rack de red' },
  soporte: { src: soporte, width: 530, height: 398, alt: 'Técnica de soporte de AMG Networking trabajando en un portátil' },
  tecnico: { src: tecnico, width: 540, height: 741, alt: 'Técnico de AMG Networking revisando el monitoreo de cámaras' },
};
