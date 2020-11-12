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

  const toggleTaskStatus = (itemIndex: number) => {
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

  const removeTask = (itemIndex: number) => {
    const items = store.items.filter((_, index) => index !== itemIndex)

    const newStore = {
      items,
    }

    setStore(newStore)
  }

  useInput((input, key) => {
    /** cursor */
    if (key.downArrow) {
      setCursor((i) => Math.min(i + 1, maxcursor))
    }

    if (key.upArrow) {
      setCursor((i) => Math.max(i - 1, 0))
    }

    /** toggle status */
    if (key.return || input === ' ' || key.tab) {
      toggleTaskStatus(cursor)
    }

    /** remove */
    if (input === 'r' || key.backspace || key.delete) {
      removeTask(cursor)
    }

    /** quit */
    if (input === 'q' || key.escape) {
      storeConsumer.store = store
      exit()
    }

    /** abort */
    if (input === 'Q') {
      exit()
    }
  })

  return (
    <>
      <Box flexDirection="column" minHeight={10} marginTop={1}>
        {/* Body */}
        <List items={store.items ?? []} cursor={cursor} />

        {/* Guide */}
        <Box flexDirection="column">
          <Text>[ENTER]: toggle task status</Text>
          <Text>[r or BACKSPACE]: remove task</Text>
          <Text>[q or ESC]: save and quit</Text>
          <Text>[Q]: abort(quit without save)</Text>
        </Box>
      </Box>
    </>
  )
}
