import React, { FC, useState } from 'react'
import { Box, useInput } from 'ink'
import { Item } from '../types/Item'
import { ListItem } from './ListItem'
import { Store, storeConsumer } from '../store'

type Props = {
  items: Item[]
  onItemUpdate: (cursorIndex: number) => void
}

export const List: FC<Props> = ({ items, onItemUpdate }) => {
  const maxCursorIndex = items.length - 1

  const [cursorIndex, setCursorIndex] = useState(0)

  useInput((_, key) => {
    if (key.downArrow) {
      setCursorIndex((i) => Math.min(i + 1, maxCursorIndex))
    }

    if (key.upArrow) {
      setCursorIndex((i) => Math.max(i - 1, 0))
    }

    if (key.tab) {
      onItemUpdate(cursorIndex)
    }
  })

  return (
    <Box padding={1} marginBottom={1} flexDirection="column">
      {items.map((item, index) => {
        const selected = cursorIndex === index

        return <ListItem key={item.task} selected={selected} item={item} />
      })}
    </Box>
  )
}
