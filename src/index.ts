#!/usr/bin/env node

import { storeProvider } from './store'
import { ui } from './ui'

export const exec = (): void => {
  const [, , userInput] = process.argv as [string, string, string | undefined]

  const { write, load } = storeProvider()

  write()

  console.log(load().collections)
}

exec()
