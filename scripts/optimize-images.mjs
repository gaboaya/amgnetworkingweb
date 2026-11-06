// Genera las imágenes del sitio a partir de la carpeta /fotos.
// Uso: npm run images
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const fotos = path.join(root, 'fotos');
const assets = path.join(root, 'src', 'assets');
const pub = path.join(root, 'public');

const NAVY = '#0b2545';
const WHITE = [255, 255, 255];
const centro = path.join(fotos, 'Centro de Operaciones AMG Networking.png');
const espacio = path.join(fotos, 'Espacio futurista de AMG Networking.png');
const soluciones = path.join(fotos, 'fda1a574-7b84-496a-bbe4-734b44c69632.png');
const logoSrc = path.join(fotos, 'Logo AMG Networking futurista en azul.png');

// Recortes de los banners: solo personas y equipos, sin los textos ni el logo grande.
// `resize` amplía los recortes pequeños. Se les baja la saturación para un aspecto más sobrio.
const photos = {
  'foto-equipo': { src: centro, box: { left: 540, top: 455, width: 780, height: 486 } },
  'foto-tecnico': {
    src: centro,
    box: { left: 0, top: 200, width: 540, height: 741 },
    // Restos del banner junto al técnico (guion y letras) sobre la pared lisa
    patches: [
      { left: 462, top: 320, right: 545, bottom: 345 },
      { left: 498, top: 195, right: 545, bottom: 432 },
    ],
  },
  'foto-rack': { src: centro, box: { left: 555, top: 452, width: 320, height: 240 }, resize: 640 },
  'foto-camara': { src: centro, box: { left: 0, top: 0, width: 440, height: 330 }, resize: 660 },
  'foto-soporte': { src: centro, box: { left: 860, top: 482, width: 530, height: 398 } },
  'foto-router': { src: espacio, box: { left: 1075, top: 655, width: 380, height: 285 }, resize: 760 },
  'foto-servidores': { src: soluciones, box: { left: 1285, top: 300, width: 387, height: 290 }, resize: 774 },
  'foto-software': { src: centro, box: { left: 545, top: 503, width: 585, height: 438 }, resize: 780 },
  'foto-codigo': { src: espacio, box: { left: 0, top: 150, width: 500, height: 375 }, resize: 760 },
  'foto-portatil': { src: soluciones, box: { left: 0, top: 508, width: 500, height: 375 }, resize: 760 },
};

const LOGO_BOX = { left: 225, top: 140, width: 1225, height: 510 };
const MARK_BOX = { left: 280, top: 140, width: 1120, height: 420 };

const clamp = (value) => Math.min(1, Math.max(0, value));

// Destello del fondo, arriba a la izquierda del logo (coordenadas de la imagen original)
function isGlare(x, y) {
  const dx = x - 225;
  const dy = y - 140;
  return dx < 700 && dy < (dx < 500 ? 110 - 0.05 * dx : 85 - 0.225 * (dx - 500));
}

// El logo original es blanco y azul sobre negro con resplandor. Esto deja el fondo transparente,
// corta el resplandor y pinta las letras del color pedido; `tint` ajusta el azul del logo.
async function logoVariant(box, letters, tint) {
  const { data, info } = await sharp(logoSrc).extract(box).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 4);

  for (let i = 0, j = 0, p = 0; i < data.length; i += 3, j += 4, p++) {
    if (isGlare(box.left + (p % info.width), box.top + Math.floor(p / info.width))) continue;
    const pixel = [data[i], data[i + 1], data[i + 2]];
    const max = Math.max(...pixel);
    const saturation = max === 0 ? 0 : (max - Math.min(...pixel)) / max;
    const blueness = clamp((saturation - 0.22) / 0.28); // 0 = letras, 1 = azul del logo
    const blue = tint(pixel);
    for (let c = 0; c < 3; c++) out[j + c] = Math.round(letters[c] * (1 - blueness) + blue[c] * blueness);
    out[j + 3] = Math.round(clamp((max - 70) / 110) * 255);
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } }).trim({ threshold: 1 });
}

// Cubre zonas de la imagen repitiendo, en cada fila, el píxel que está justo a su izquierda
async function coverAreas(src, patches) {
  const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  for (const { left, top, right, bottom } of patches) {
    for (let y = top; y < bottom; y++) {
      const neighbor = (y * info.width + left - 1) * 3;
      for (let x = left; x < right; x++) data.copy(data, (y * info.width + x) * 3, neighbor, neighbor + 3);
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 3 } }).png().toBuffer();
}

await mkdir(assets, { recursive: true });
await mkdir(pub, { recursive: true });

for (const [name, { src, box, resize, patches }] of Object.entries(photos)) {
  const image = sharp(patches ? await coverAreas(src, patches) : src).extract(box).modulate({ saturation: 0.78 });
  if (resize) image.resize({ width: resize, kernel: 'lanczos3' });
  await image.webp({ quality: 86 }).toFile(path.join(assets, `${name}.webp`));
}

// Logo para fondos claros (letras azul marino y azul más profundo) y para fondos oscuros (letras blancas)
const darkBlue = ([r, g, b]) => [r * 0.45, g * 0.78, Math.min(255, b * 0.92)];
const logoLight = await (await logoVariant(LOGO_BOX, [11, 37, 69], darkBlue)).resize({ height: 180 }).webp({ quality: 90, alphaQuality: 100 }).toBuffer();
const logoDark = await (await logoVariant(LOGO_BOX, WHITE, (pixel) => pixel)).resize({ height: 180 }).webp({ quality: 90, alphaQuality: 100 }).toBuffer();
await writeFile(path.join(assets, 'logo-claro.webp'), logoLight);
await writeFile(path.join(assets, 'logo-oscuro.webp'), logoDark);
// Copia para las páginas estáticas de /public (privacidad y 404)
await writeFile(path.join(pub, 'logo-claro.webp'), logoLight);

// Isotipo (AMG con la órbita) sobre azul marino: favicon, ícono de iPhone y logo para Google
const mark = await (await logoVariant(MARK_BOX, WHITE, (pixel) => pixel)).resize({ width: 430 }).png().toBuffer();
const icon = await sharp({ create: { width: 512, height: 512, channels: 4, background: NAVY } })
  .composite([
    { input: Buffer.from(`<svg width="512" height="512"><rect width="512" height="512" rx="96" fill="${NAVY}"/></svg>`), blend: 'dest-in' },
    { input: mark, gravity: 'center' },
  ])
  .png()
  .toBuffer();
await sharp(icon).toFile(path.join(pub, 'favicon.png'));
// Google pide favicons de un tamaño múltiplo de 48 px
await sharp(icon).resize(192).png().toFile(path.join(pub, 'favicon-192.png'));
await sharp(icon).resize(180).png().toFile(path.join(pub, 'apple-touch-icon.png'));

// favicon.ico de 48×48 (navegadores y buscadores lo piden en la raíz): un PNG dentro de un contenedor ICO
const ico48 = await sharp(icon).resize(48).png().toBuffer();
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(1, 2); // tipo: ícono
icoHeader.writeUInt16LE(1, 4); // una imagen
icoHeader.writeUInt8(48, 6); // ancho
icoHeader.writeUInt8(48, 7); // alto
icoHeader.writeUInt16LE(1, 10); // planos de color
icoHeader.writeUInt16LE(32, 12); // bits por píxel
icoHeader.writeUInt32LE(ico48.length, 14); // tamaño de la imagen
icoHeader.writeUInt32LE(22, 18); // la imagen empieza después de esta cabecera
await writeFile(path.join(pub, 'favicon.ico'), Buffer.concat([icoHeader, ico48]));

// Imagen para compartir en redes (Open Graph): logo sobre azul marino y foto del equipo
const ogPhoto = await sharp(path.join(assets, 'foto-equipo.webp')).resize(680, 630, { fit: 'cover', position: 'right' }).toBuffer();
const ogLogo = await sharp(logoDark).resize({ width: 380 }).toBuffer({ resolveWithObject: true });
await sharp({ create: { width: 1200, height: 630, channels: 3, background: NAVY } })
  .composite([
    { input: ogPhoto, left: 520, top: 0 },
    { input: ogLogo.data, left: Math.round((520 - ogLogo.info.width) / 2), top: Math.round((630 - ogLogo.info.height) / 2) },
  ])
  .jpeg({ quality: 85 })
  .toFile(path.join(pub, 'og-image.jpg'));

console.log('Imágenes generadas en src/assets y public/');
