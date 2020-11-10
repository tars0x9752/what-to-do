import Conf from 'conf'
import { Item } from './types/Item'

export type Store = {
  items: Item[]
}

const store: Store = {
  items: [
    {
      task: 'sample task 1',
      status: 'todo',
    },
    {
      task: 'sample task 2',
      status: 'done',
    },
  ],
}

export const storeConsumer = new Conf({
  configName: 'store',
})

// storeConsumer.store = store
