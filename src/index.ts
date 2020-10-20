#!/usr/bin/env node

import meow from 'meow'
import { renderUI } from './ui'

const helpText = `
Usage
  $ wtd [options/args]

Options/Args
  No options/args                 Display todo list UI
  <task>                          Add a new task to the current collection
  -c, --create <collection_name>  Create a new collection 
  -h, --help                      Display this message
  -v, --version                   Display version number
`

const cli = meow(helpText, {
  flags: {
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
  const task = cli.input
  const { create: collectionName } = cli.flags

  if (collectionName !== undefined) {
    console.log(`create a new collection "${collectionName}"`)
    return
  }

  if (task.length > 0) {
    console.log(`add a new task "${task}"`)
    return
  }

  renderUI()
}

exec()
