import Conf from 'conf'
import { Item } from './types/Item'

export type Store = {
  collections: Item[]
}

const store: Store = {
  collections: [
    {
      task: 'a sample task',
      status: 'todo',
    },
  ],
}

export const storeConsumer = new Conf({
  configName: 'store',
})

storeConsumer.store = store
