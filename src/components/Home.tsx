import React, { FC, useState } from 'react'
import { Text, Box, Spacer, useInput, useApp } from 'ink'
import { UncontrolledTextInput } from 'ink-text-input'
import { TaskInput } from './TaskInput'

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
  })

  return (
    <Box flexDirection="column" minHeight={10}>
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
        <Text>[Space]: change task status</Text>
        <Text>[Enter]: save and quit</Text>
      </Box>
    </Box>
  )
}
