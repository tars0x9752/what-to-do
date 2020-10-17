#!/usr/bin/env node

import { ui } from './ui'

export const exec = (): void => {
  const [, , userInput] = process.argv

  console.log(userInput ?? 'no user input')
}

exec()
