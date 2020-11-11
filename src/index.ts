#!/usr/bin/env node

import meow from 'meow'
import { Store, storeConsumer } from './store'
import { renderUI } from './ui'

const helpText = `
Usage
  $ wtd [options/args]

Options/Args
  No options/args                 Display todo list UI
  <task>                          Add a new task
  -p, --path                      Display store file path
  -h, --help                      Display this message
  -v, --version                   Display version number
`

const cli = meow(helpText, {
  flags: {
    path: {
      type: 'boolean',
      alias: 'p',
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

export const exec = (): void => {
  const task = cli.input
  const store = storeConsumer.store as Store

  /** handle path flag */
  if (cli.flags.path) {
    console.log(storeConsumer.path)
    return
  }

  /** handle task input */
  if (task.length > 0) {
    storeConsumer.store = {
      items: [
        ...store.items,
        {
          status: 'todo',
          task,
        },
      ],
    } as Store
  }

  /** display ui */
  renderUI()
}

exec()
