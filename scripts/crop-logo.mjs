import { createCanvas, loadImage } from '@napi-rs/canvas'
import { writeFile } from 'node:fs/promises'

const src = await loadImage('public/images/fk-logo-full.png')
const W = src.width
const H = src.height

// Full logo, downscaled to a reasonable, crisp size
{
  const target = 1000
  const c = createCanvas(target, Math.round((H / W) * target))
  const ctx = c.getContext('2d')
  ctx.drawImage(src, 0, 0, c.width, c.height)
  await writeFile('public/images/fk-logo.png', c.toBuffer('image/png'))
  console.log('fk-logo.png', c.width, 'x', c.height)
}

// Emblem crop: crown + laurel wreath + circular frame (no wordmark/tagline)
{
  const sx = Math.round(0.245 * W)
  const sy = Math.round(0.12 * H)
  const sw = Math.round(0.51 * W)
  const sh = Math.round(0.59 * H)
  const target = 720
  const c = createCanvas(target, Math.round((sh / sw) * target))
  const ctx = c.getContext('2d')
  ctx.drawImage(src, sx, sy, sw, sh, 0, 0, c.width, c.height)
  await writeFile('public/images/fk-emblem.png', c.toBuffer('image/png'))
  console.log('fk-emblem.png', c.width, 'x', c.height)
}
