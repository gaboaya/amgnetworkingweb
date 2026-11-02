// Genera las imágenes optimizadas del sitio a partir de la carpeta /fotos.
// Uso: npm run images
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const fotos = path.join(root, 'fotos');
const assets = path.join(root, 'src', 'assets');
const pub = path.join(root, 'public');

const photos = {
  'Centro de Operaciones AMG Networking.png': 'centro-operaciones',
  'Espacio futurista de AMG Networking.png': 'espacio-futurista',
  'fda1a574-7b84-496a-bbe4-734b44c69632.png': 'soluciones',
};

// Convierte el fondo oscuro del logo en transparencia (equivalente a un
// "screen" sobre negro), para que el logo luzca limpio sobre cualquier fondo oscuro.
// `erase` es un polígono (coordenadas del recorte) que se borra para quitar destellos del fondo.
async function knockOutDark(input, { left, top, width, height }, erase, blackPoint = 28) {
  const { data, info } = await sharp(input)
    .extract({ left, top, width, height })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(info.width * info.height * 4);
  const scale = 255 / (255 - blackPoint);
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const r = Math.max(0, data[i] - blackPoint) * scale;
    const g = Math.max(0, data[i + 1] - blackPoint) * scale;
    const b = Math.max(0, data[i + 2] - blackPoint) * scale;
    const a = Math.max(r, g, b);
    if (a > 0) {
      out[j] = Math.round((r / a) * 255);
      out[j + 1] = Math.round((g / a) * 255);
      out[j + 2] = Math.round((b / a) * 255);
    }
    out[j + 3] = Math.round(Math.min(255, a));
  }
  const points = erase.map(([x, y]) => `${x},${y}`).join(' ');
  const mask = `<svg width="${info.width}" height="${info.height}"><polygon points="${points}" fill="#000"/></svg>`;
  const png = await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .composite([{ input: Buffer.from(mask), blend: 'dest-out' }])
    .png()
    .toBuffer();
  return sharp(png);
}

// Destello diagonal del fondo, arriba a la izquierda del logo (coordenadas de la imagen original)
const glare = [[0, 140], [925, 140], [925, 180], [725, 225], [0, 250]];
const shift = (poly, dx, dy) => poly.map(([x, y]) => [x - dx, y - dy]);

await mkdir(assets, { recursive: true });
await mkdir(pub, { recursive: true });

for (const [file, name] of Object.entries(photos)) {
  const src = path.join(fotos, file);
  await sharp(src).resize({ width: 1600 }).webp({ quality: 80 }).toFile(path.join(assets, `${name}.webp`));
  await sharp(src).resize({ width: 800 }).webp({ quality: 78 }).toFile(path.join(assets, `${name}-800.webp`));
}

// Imagen para compartir en redes (Open Graph)
await sharp(path.join(fotos, 'Logo AMG Networking futurista en azul.png'))
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 82 })
  .toFile(path.join(pub, 'og-image.jpg'));

const logoSrc = path.join(fotos, 'Logo AMG Networking futurista en azul.png');

// Logo completo (AMG + NETWORKING), WebP con transparencia
const logo = await knockOutDark(logoSrc, { left: 225, top: 140, width: 1225, height: 510 }, shift(glare, 225, 140));
await logo.clone().resize({ width: 520 }).webp({ quality: 90, alphaQuality: 100 }).toFile(path.join(assets, 'logo.webp'));

// Isotipo (solo AMG con la órbita) sobre fondo oscuro: favicon, ícono de iPhone y logo para Google
const mark = await knockOutDark(logoSrc, { left: 280, top: 140, width: 1120, height: 420 }, shift(glare, 280, 140));
const markPng = await mark.resize({ width: 440 }).png().toBuffer();
const icon = await sharp({ create: { width: 512, height: 512, channels: 4, background: '#0a0c10' } })
  .composite([
    { input: Buffer.from('<svg width="512" height="512"><rect width="512" height="512" rx="112" fill="#0a0c10"/></svg>'), blend: 'dest-in' },
    { input: markPng, gravity: 'center' },
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

console.log('Imágenes generadas en src/assets y public/');
