import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'
// import { headerData } from './globals/header'
// import { seedSocialPlatforms } from './collections/socialPlatforms'
import { homepageData } from './globals/homepage'
// import { footerData } from './globals/footer'
// import { seedLucideIcons } from './collections/lucideIcons'
import { seedMedia } from './collections/media'
// import { footerData } from './globals/footer'

try {
  const payload = await getPayload({ config })
  const globals = [homepageData]

  await seedMedia(payload)
  // await seedSocialPlatforms(payload)
  // await seedLucideIcons(payload)
  console.log('✅ Collection seeded successfully!')

  // Seed Globals
  await Promise.all(
    globals.map((g) => payload.updateGlobal({ ...g, context: { disableRevalidate: true } })),
  )
  console.log('✅ Globals seeded successfully!')
  process.exit(0)
} catch (error) {
  console.error('❌ Error seeding data:', error)
  process.exit(1)
}
