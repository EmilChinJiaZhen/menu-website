import { GlobalConfig } from 'payload'
import { revalidateTag } from 'next/cache'
import { REVALIDATE_TAGS } from '@/constants/revalidateTags'
import { snackfields } from './homepage/snack'
import { maincoursefields } from './homepage/maincourse'
import { bevaragefields } from './homepage/bevarage'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'HomePage',
  fields: [
    maincoursefields,
    snackfields,
    bevaragefields,
  ],
  hooks: {
    afterChange: [
      ({ req: { context } }) => {
        if (!context?.disableRevalidate) revalidateTag(REVALIDATE_TAGS.globals.homepage)
      },
    ],
  },
}

export default Homepage