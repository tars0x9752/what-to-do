import React, { FC, useState } from 'react'
import { Text, Box, useInput } from 'ink'
import { UncontrolledTextInput } from 'ink-text-input'
import { TaskInput } from './TaskInput'

export const Home: FC = () => {
  const [taskList, setTaskList] = useState<string[]>([])
  const [enterMode, setEnterMode] = useState(false)

  useInput((input, key) => {
    if (key.return) {
      setEnterMode(true)
    }
  })

  return (
    <Box flexDirection="column" minHeight={10}>
      <Box justifyContent="center">
        <Text>What To Do</Text>
      </Box>
      {enterMode && (
        <TaskInput
          onSubmit={(value) => {
            setTaskList([...taskList, value])
            setEnterMode(false)
          }}
        />
      )}
      <Box paddingX={1} flexDirection="column" borderStyle="round">
        {taskList.map((task) => {
          return <Text key={task}>{`  ${task}`}</Text>
        })}
      </Box>
      <Box>
        <Text>Enter: Save, Arrow keys: Move, Space: change task status</Text>
      </Box>
    </Box>
  )
}
