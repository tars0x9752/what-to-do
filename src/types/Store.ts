import { Collection, CollectionConsumer } from './Collection'

export type Store = {
  currentCollectionName: string
  collections: Collection[]
}

export type StoreConsumer = {
  /** operations */
  init: () => void
  switchCollection: (collectionName: string) => void
  createCollection: (collectionName: string) => void

  /** data fetchers */
  getCollectionNames: () => string[]
  getCurrentCollection: () => CollectionConsumer
}
