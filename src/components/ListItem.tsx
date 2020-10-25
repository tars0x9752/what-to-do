import React, { FC, useState } from 'react'
import { Text, Box, Newline, useInput } from 'ink'
import fig from 'figures'
import { Item } from '../types/Item'

type Props = {
  item: Item
  selected?: boolean
}

export const ListItem: FC<Props> = ({ item, selected = false }) => {
  const cursor = selected ? fig.pointer : ' '
  const status = item.status === 'todo' ? '_' : fig.tick
  const isDone = item.status === 'done'

  return (
    <Box>
      <Text>
        <Text color={'cyan'}>{`${cursor}  `}</Text>
        <Text color={isDone ? 'green' : 'gray'}>{`${status}  `}</Text>
        <Text color={selected ? 'cyan' : isDone ? 'gray' : ''} strikethrough={isDone}>
          {item.task}
        </Text>
      </Text>
    </Box>
  )
}
