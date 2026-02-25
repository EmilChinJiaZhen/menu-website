import path from 'path'
import fs from 'fs'
import { BasePayload } from 'payload'
import { Media } from '@/payload-types'
import mime from 'mime-types'

const fileFromPath = (relativePath: string) => {
  const absolutePath = path.resolve(process.cwd(), relativePath)

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`)
  }

  const buffer = fs.readFileSync(absolutePath)

  return {
    data: buffer,
    name: path.basename(absolutePath),
    size: buffer.length,
    mimetype: mime.lookup(absolutePath) || 'application/octet-stream',
  }
}

/**
 * Uploads the hero image and intro photos for the homepage.
 * Returns a map of filenames → created media docs so you can reference IDs.
 */
export async function seedMedia(payload: BasePayload): Promise<Record<string, Media>> {
  const assets = [
    'blackpepperchickenchop.png',
    'grilledsalmon.webp',
    'bolognesepasta.webp',
    'steamfish.png',
    'friednoodle.webp',
    'friedrice.jpg',
    'mushroomsoup.jpg',
    'xiancai.webp',
    'rousuicorn.jpg',
    'tomatoegg.webp',
    'cabbageegg.jpg',
    'radishsoup.jpg',
    'tomatosoup.jpg',
    'frenchfries.jpg',
    'minisausages.jpg',
    'friedchickenstrips.jpg',
    'tudoubing.jpg',
    'icedlemontea.jpg',
    'cola.jpg',
    'orangejuice.jpg',
    'water.jpg',
    'greentea.webp',
    'milktea.webp',
    'coffee.jpg',
  ]

  const results: Record<string, Media> = {}

  for (const fileName of assets) {
    try {
      console.log(`⏳ Uploading media: ${fileName}`)
      const mediaDoc = await payload.create({
        collection: 'media',
        data: {
          alt: fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        },
        file: fileFromPath('src/seeders/assets/' + fileName),
      })
      results[fileName] = mediaDoc as Media
      console.log(`☑️ Uploaded: ${fileName} (id=${mediaDoc.id})`)
    } catch (err) {
      console.error(`❌ Failed to upload: ${fileName}`, err)
    }
  }

  console.log('✅ Homepage media seeded successfully!')
  return results
}
