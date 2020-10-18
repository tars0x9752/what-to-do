import { Item, TodoStatus } from './Item'

export type Collection = {
  name: string // uniq key
  items: Item[]
}

export type CollectionConsumer = {
  getItems: () => Item[]
  getItemMap: () => Map<string, TodoStatus>
  add: (task: string) => void
  updateStatus: (task: string, status: TodoStatus) => void
  remove: (task: string) => void
}
