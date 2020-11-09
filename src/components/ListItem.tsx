import React, { FC } from 'react'
import { Text, Box } from 'ink'
import fig from 'figures'
import { Item } from '../types/Item'

type Props = {
  item: Item
  selected?: boolean
}

export const ListItem: FC<Props> = ({ item, selected = false }) => {
  const cursor = selected ? fig.pointer : ' '
  const isDone = item.status === 'done'
  const status = isDone ? fig.tick : '_'

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
