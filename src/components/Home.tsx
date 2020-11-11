import React, { FC, useState } from 'react'
import { Text, Box, useInput, useApp } from 'ink'
import { Store, storeConsumer } from '../store'
import { List } from './List'
import { Item } from '../types/Item'

export const Home: FC = () => {
  const { exit } = useApp()
  const [store, setStore] = useState(storeConsumer.store as Store)
  const maxcursor = store.items.length - 1
  const [cursor, setCursor] = useState(0)

  const handleItemUpdate = (itemIndex: number) => {
    const items = store.items.map((item, index) => {
      if (index === itemIndex) {
        return {
          ...item,
          status: item.status === 'done' ? 'todo' : 'done',
        }
      }
      return item
    }) as Item[]

    const newStore = {
      items,
    }

    setStore(newStore)
  }

  useInput((_, key) => {
    if (key.downArrow) {
      setCursor((i) => Math.min(i + 1, maxcursor))
    }

    if (key.upArrow) {
      setCursor((i) => Math.max(i - 1, 0))
    }

    if (key.return) {
      storeConsumer.store = store
      exit()
    }

    if (_ === 'q') {
      storeConsumer.store = store
      exit()
    }

    if (key.tab) {
      handleItemUpdate(cursor)
    }
  })

  return (
    <>
      <Box flexDirection="column" minHeight={10} marginTop={1}>
        {/* Header */}
        <Box></Box>

        {/* Body */}
        <List items={store.items ?? []} cursor={cursor} />

        {/* Guide */}
        <Box flexDirection="column">
          <Text>[q or Enter(Return)]: save and quit</Text>
        </Box>
      </Box>
    </>
  )
}
