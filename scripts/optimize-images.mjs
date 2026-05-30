import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public')
const sourceDir = path.join(root, 'references', 'source-images')
const outputDir = path.join(root, 'public', 'images', 'optimized')

const jobs = [
  ['Perahu_Sandeq.png', 'perahu-sandeq', [640, 1024], 82],
  ["lipa_sa'be.png", 'lipa-saqbe', [640, 1024], 82],
  ['Sayyang_Pattudu.png', 'sayyang-pattudu', [640, 1024], 82],
  ['pandai_bessi.png', 'pande-bassi', [640, 1024], 82],
  ['screen.png', 'tradisi-lisan', [640, 1024], 82],
  ['QR_Code.png', 'qr-code', [640, 1024], 80],
  ['LogoDM.png', 'logo-dm', [96, 192], 86],
  ['hero.png', 'hero', [512], 82],
]

const iconJobs = [
  ['LogoDM.png', 'favicon-16x16.png', 16],
  ['LogoDM.png', 'favicon-32x32.png', 32],
  ['LogoDM.png', 'apple-touch-icon.png', 180],
  ['LogoDM.png', 'icon-192.png', 192],
  ['LogoDM.png', 'icon-512.png', 512],
]

await mkdir(outputDir, { recursive: true })

const results = []

function faviconPng(inputPath, size) {
  return sharp(inputPath)
    .resize({
      width: size,
      height: size,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
}

async function writePngIco(inputPath, outputPath, sizes) {
  const pngBuffers = await Promise.all(
    sizes.map((size) => faviconPng(inputPath, size).toBuffer()),
  )
  const header = Buffer.alloc(6 + pngBuffers.length * 16)
  let offset = header.length

  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(pngBuffers.length, 4)

  pngBuffers.forEach((buffer, index) => {
    const size = sizes[index]
    const entryOffset = 6 + index * 16

    header[entryOffset] = size === 256 ? 0 : size
    header[entryOffset + 1] = size === 256 ? 0 : size
    header[entryOffset + 2] = 0
    header[entryOffset + 3] = 0
    header.writeUInt16LE(1, entryOffset + 4)
    header.writeUInt16LE(32, entryOffset + 6)
    header.writeUInt32LE(buffer.length, entryOffset + 8)
    header.writeUInt32LE(offset, entryOffset + 12)

    offset += buffer.length
  })

  await writeFile(outputPath, Buffer.concat([header, ...pngBuffers]))
}

for (const [inputName, outputName, widths, quality] of jobs) {
  const inputPath = path.join(sourceDir, inputName)

  for (const width of widths) {
    const outputPath = path.join(outputDir, `${outputName}-${width}.webp`)

    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(outputPath)

    const metadata = await sharp(outputPath).metadata()
    results.push({
      file: path.relative(root, outputPath),
      width: metadata.width,
      height: metadata.height,
    })
  }
}

for (const [inputName, outputName, size] of iconJobs) {
  const inputPath = path.join(sourceDir, inputName)
  const outputPath = path.join(publicDir, outputName)

  await faviconPng(inputPath, size).toFile(outputPath)

  const metadata = await sharp(outputPath).metadata()
  results.push({
    file: path.relative(root, outputPath),
    width: metadata.width,
    height: metadata.height,
  })
}

await writePngIco(
  path.join(sourceDir, 'LogoDM.png'),
  path.join(publicDir, 'favicon.ico'),
  [16, 32, 48],
)
results.push({
  file: path.relative(root, path.join(publicDir, 'favicon.ico')),
  width: '16/32/48',
  height: '16/32/48',
})

console.table(results)
