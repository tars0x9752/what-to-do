import React, { FC } from 'react'
import { Box } from 'ink'
import { Item } from '../types/Item'
import { ListItem } from './ListItem'

type Props = {
  items: Item[]
  cursor: number
}

export const List: FC<Props> = ({ items, cursor }) => {
  return (
    <Box padding={1} marginBottom={1} flexDirection="column">
      {items.map((item, index) => {
        const selected = cursor === index

        return <ListItem key={item.task} selected={selected} item={item} />
      })}
    </Box>
  )
}
