import React, { FC, useState } from 'react'
import { Text, Box, useInput, useApp } from 'ink'
import { Store, storeConsumer } from '../store'
import { List } from './List'
import { Item } from '../types/Item'

export const Home: FC = () => {
  const { exit } = useApp()
  const [store, setStore] = useState(storeConsumer.store as Store)

  const onItemUpdate = (itemIndex: number) => {
    const items = store.collections[0].items.map((item, index) => {
      if (index === itemIndex) {
        return {
          ...item,
          status: item.status === 'done' ? 'todo' : 'done',
        }
      }
      return item
    }) as Item[]

    const collections = store.collections.map((collection, index) => {
      return {
        ...collection,
        items,
      }
    })

    const newStore = {
      collections,
    }

    setStore(newStore)
    storeConsumer.store = newStore
  }

  useInput((_, key) => {
    if (key.return) {
      exit()
    }

    if (_ === 'q') {
      exit()
    }
  })

  return (
    <Box flexDirection="column" minHeight={10} marginTop={1}>
      {/* Header */}
      <Box flexDirection="column">
        <Text bold={true}>Collection: {'COLLECTION NAME (TODO)'} (1/1)</Text>
        <Box>
          <Text>Todo: {0}</Text>
          <Box marginRight={2} />
          <Text>Done: {0}</Text>
        </Box>
      </Box>

      {/* Body */}
      <List items={store.collections[0].items ?? []} onItemUpdate={onItemUpdate} />

      {/* Guide */}
      <Box flexDirection="column">
        <Text>[ArrowUp/ArrowDown]: move cursor</Text>
        <Text>[ArrowLeft/ArrowRight]: change collection</Text>
        <Text>[Tab or Enter]: change the task status</Text>
        <Text>[Backspace]: delete the task</Text>
        <Text>[ESC]: delete the collection</Text>
        <Text>[q]: quit(auto save)</Text>
        <Text>[a]: abort(quit without save)</Text>
      </Box>
    </Box>
  )
}
