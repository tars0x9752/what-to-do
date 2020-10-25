import React, { FC, useState } from 'react'
import { Text, Box, useInput, useApp } from 'ink'
import { Store } from '../store'
import { List } from './List'

type Props = {
  store: Store
}

export const Home: FC<Props> = ({ store }) => {
  const { exit } = useApp()

  const todoCount = 0 // todo
  const doneCount = 0 // todo

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
          <Text>Todo: {todoCount}</Text>
          <Box marginRight={2} />
          <Text>Done: {doneCount}</Text>
        </Box>
      </Box>

      {/* Body */}
      <List items={store.collections[0].items ?? []} />

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
