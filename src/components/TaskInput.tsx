import React, { FC, useState } from 'react'
import { Text, Box, Newline } from 'ink'
import TextInput, { UncontrolledTextInput } from 'ink-text-input'

type Props = {
  onSubmit: (value: string) => void
}

export const TaskInput: FC<Props> = ({ onSubmit }) => {
  return (
    <Box borderStyle="bold" borderColor="green" paddingX={1}>
      <Box>
        <Box marginRight={1}>
          <Text>Enter your task: </Text>
        </Box>
        <UncontrolledTextInput onSubmit={onSubmit} />
      </Box>
    </Box>
  )
}
