import { CollectionSlug, GlobalSlug } from 'payload'

export type GlobalSeed<T> = {
  slug: GlobalSlug
  data: Omit<T, 'id'>
}

export type CollectionSeed<T> = {
  collection: CollectionSlug
  data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>[]
}
