import { createCanvas } from '@napi-rs/canvas'
import { writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs')

const data = new Uint8Array(await (await import('node:fs/promises')).readFile('public/fk-logo.pdf'))

const loadingTask = pdfjs.getDocument({
  data,
  standardFontDataUrl: require('path').dirname(require.resolve('pdfjs-dist/package.json')) + '/standard_fonts/',
})
const doc = await loadingTask.promise
console.log('pages:', doc.numPages)

const page = await doc.getPage(1)
const scale = 6
const viewport = page.getViewport({ scale })
const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height))
const ctx = canvas.getContext('2d')

await page.render({ canvasContext: ctx, viewport }).promise
const png = canvas.toBuffer('image/png')
await writeFile('public/images/fk-logo-full.png', png)
console.log('wrote fk-logo-full.png', canvas.width, 'x', canvas.height, png.length, 'bytes')
