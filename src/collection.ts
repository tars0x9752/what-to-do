import { CollectionConsumer } from './types/Collection'
import { Item, TodoStatus } from './types/Item'

type UpdateCollection = (items: Item[]) => void

export const collectionConsumer = (
  items: Item[],
  updateCollection: UpdateCollection
): CollectionConsumer => {
  const itemMap = new Map(items.map(({ task, status }) => [task, status]))

  const getItems = () => {
    return [...itemMap].map(([task, status]) => ({ task, status }))
  }

  const getItemMap = () => {
    return itemMap
  }

  const add = (task: string) => {
    itemMap.set(task, 'todo')
    updateCollection(getItems())
  }

  const updateStatus = (task: string, status: TodoStatus) => {
    itemMap.set(task, status)
    updateCollection(getItems())
  }

  const remove = (task: string) => {
    itemMap.delete(task)
    updateCollection(getItems())
  }

  return {
    getItems,
    getItemMap,
    add,
    updateStatus,
    remove,
  }
}
