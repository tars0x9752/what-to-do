import fs from 'fs'
import os from 'os'
import path from 'path'
import { collectionConsumer } from './collection'
import { STORE_FILE_NAME } from './constants'
import { Item } from './types/Item'
import { Store, StoreConsumer } from './types/Store'

const defaultStore: Store = {
  currentCollectionName: 'General',
  collections: [
    {
      name: 'General',
      items: [
        {
          task: 'a sample task',
          status: 'todo',
        },
      ],
    },
  ],
}

export const storeConsumer = (): StoreConsumer => {
  const homedir = os.homedir()
  const storePath = path.join(homedir, STORE_FILE_NAME)

  const load = () => {
    const jsonString = fs.readFileSync(storePath, 'utf8')

    return JSON.parse(jsonString) as Store
  }

  const store = load()
  const { collections, currentCollectionName } = store
  const collectionMap = new Map(collections.map(({ name, items }) => [name, items]))

  const save = (nextStore: Store) => {
    fs.writeFileSync(storePath, JSON.stringify(nextStore))
  }

  const init = () => {
    save(defaultStore)
  }

  const switchCollection = (collectionName: string) => {
    const nextStore = {
      ...store,
      currentCollectionName: collectionName,
    }

    save(nextStore)
  }

  const updateCollection = (nextItems: Item[]) => {
    collectionMap.set(currentCollectionName, nextItems)

    const nextCollections = [...collectionMap].map(([name, items]) => ({ name, items }))

    const nextStore: Store = {
      ...store,
      collections: nextCollections,
    }

    save(nextStore)
  }

  const createCollection = (name: string) => {
    if (collectionMap.has(name)) {
      return
    }

    collectionMap.set(name, [])

    const nextCollections = [...collectionMap].map(([name, items]) => ({ name, items }))

    const nextStore: Store = {
      ...store,
      collections: nextCollections,
    }

    save(nextStore)
  }

  const getCollectionNames = () => {
    return store.collections.map(({ name }) => name)
  }

  const getCurrentCollection = () => {
    return collectionConsumer(collectionMap.get(currentCollectionName) ?? [], updateCollection)
  }

  return {
    init,
    switchCollection,
    createCollection,
    getCollectionNames,
    getCurrentCollection,
  }
}
