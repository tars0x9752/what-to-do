import React, { useState } from 'react'
import { render, Text, Box, useInput } from 'ink'

const todos = ['ご飯食べる', '歯を磨く', '寝る']
const maxCursorIndex = todos.length - 1

const Test = () => {
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
      {todos.map((todo, i) => {
        const selected = cursorIndex === i

        return (
          <Box key={todo}>
            <Text color="cyanBright" bold={selected}>
              {selected ? '> ' : '  '}
            </Text>
            <Text color={'cyan'} bold={selected}>
              {todo}
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}

render(<Test />)
