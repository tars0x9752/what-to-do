#!/usr/bin/env node

import meow from 'meow'
import { Store, storeConsumer } from './store'
import { TodoStatus } from './types/Item'
import { renderUI } from './ui'

const helpText = `
Usage
  $ wtd [options/args]

Options/Args
  No options/args                 Display todo list UI
  [task...]                       Add new tasks
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
  const inputTasks = cli.input
  const store = storeConsumer.store as Store

  /** handle path flag */
  if (cli.flags.path) {
    console.log(storeConsumer.path)
    return
  }

  /** handle task input */
  if (inputTasks.length > 0) {
    const itemMap = new Map<string, TodoStatus>(
      store.items.map(({ task, status }) => [task, status])
    )

    inputTasks.map((inputTask) => {
      itemMap.set(inputTask, 'todo')
    })

    storeConsumer.store = {
      items: [...itemMap].map(([task, status]) => ({ task, status })),
    } as Store
  }

  /** display ui */
  renderUI()
}

exec()
