import React, { FC, useState } from 'react'
import { Text, Box, Spacer, useInput, useApp } from 'ink'

export const Home: FC = () => {
  const { exit } = useApp()

  const currentCollectionName = 'General'
  const todoCount = 0
  const doneCount = 0
  const taskList = ['a sample task']

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
        <Text bold={true}>Collection: {currentCollectionName} (1/1)</Text>
        <Box>
          <Text>Todo: {todoCount}</Text>
          <Box marginRight={2} />
          <Text>Done: {doneCount}</Text>
        </Box>
      </Box>

      {/* Body */}
      <Box paddingX={1} marginBottom={1} flexDirection="column" borderStyle="doubleSingle">
        {taskList.map((task) => {
          return <Text key={task}>{`  ${task}`}</Text>
        })}
      </Box>

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
