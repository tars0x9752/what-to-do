import { Item, TodoStatus } from './Item'

export type Collection = {
  name: string // uniq key
  items: Item[]
}

export type CollectionConsumer = {
  getTodoItems: () => string[]
  getWIPItems: () => string[]
  getDoneItems: () => string[]
  add: (task: string) => void
  update: (task: string, status: TodoStatus) => void
  remove: (task: string) => void
  // flush
  // archive
}
