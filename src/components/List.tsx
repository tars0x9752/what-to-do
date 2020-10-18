import React, { FC, useState } from 'react'
import { Text, Box, Newline, useInput } from 'ink'
import { Item } from '../types/Item'

type Props = {
  items: Item[]
}

export const List: FC<Props> = ({ items }) => {
  const maxCursorIndex = items.length - 1

  const [cursorIndex, setCursorIndex] = useState(0)

  useInput((_, key) => {
    if (key.downArrow) {
      setCursorIndex((i) => Math.min(i + 1, maxCursorIndex))
    }

    if (key.upArrow) {
      setCursorIndex((i) => Math.max(i - 1, 0))
    }
  })

  return (
    <Box flexDirection="column">
      {items.map((todo, i) => {
        const selected = cursorIndex === i

        return (
          <Box key={todo.task}>
            <Text color="cyanBright" bold={selected}>
              {selected ? '> ' : '  '}
            </Text>
            <Text color={'cyan'} bold={selected}>
              {todo}
            </Text>
          </Box>
        )
      })}
      <Newline />
    </Box>
  )
}
