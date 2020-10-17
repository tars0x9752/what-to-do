import { Collection } from './Collection'

export type Store = {
  currentCollectionName: string
  collections: Collection
}

export type StoreConsumer = {
  init: () => void
  getStore: () => Store
}
