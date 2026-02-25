import { Media } from '@/payload-types'

export function isValidMedia(
  value: number | Media | null | undefined,
): value is Media & { url: string } {
  return typeof value === 'object' && !!value?.url
}
