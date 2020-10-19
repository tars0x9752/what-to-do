import React, { FC, useState } from 'react'
import { Text, Box, Newline, useInput } from 'ink'
import { Item } from '../types/Item'

type Props = {
  item: Item
  selected?: boolean
}

export const ListItem: FC<Props> = ({ item, selected = false }) => {
  return (
    <Box>
      <Text color={'cyan'} bold={selected}>
        {item.task}
      </Text>
    </Box>
  )
}
