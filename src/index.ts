#!/usr/bin/env node

import meow from 'meow'
import { renderUI } from './ui'

const helpText = `
Usage
  $ wtd [options]

Options
  No args/options                 Display todo list UI
  <task>                          Add a new task to the current collection
  -a, --add <task>                Add a new task to the current collection
  -c, --create <collection_name>  Create a new collection 
  -h, --help                      Display this message
  -v, --version                   Display version number
`

const cli = meow(helpText, {
  flags: {
    add: {
      type: 'string',
      alias: 'a',
    },
    create: {
      type: 'string',
      alias: 'c',
    },
    version: {
      type: 'boolean',
      alias: 'v',
    },
    help: {
      type: 'boolean',
      alias: 'h',
    },
  },
})

const handleCreateOption = (collectionName: string | undefined) => {
  if (collectionName === undefined) {
    return
  }

  if (collectionName.length <= 0) {
    console.log('collection name required')
    return
  }

  // invoke create collection
  return true
}

export const exec = (): void => {
  // renderUI()

  const { add, create } = cli.flags
  const task = cli.input
}

exec()
