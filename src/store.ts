import fs from 'fs'
import os from 'os'
import path from 'path'

const data = {
  collections: [
    {
      name: 'デフォルトコレクション',
      todos: ['エディタを起動する', 'コードを書く'],
    },
  ],
}

type Store = {
  collections: [
    {
      name: string
      todos: string[]
    }
  ]
}

type StoreProvider = {
  load: () => Store
  write: () => void
}

export const storeProvider = (): StoreProvider => {
  const homedir = os.homedir()

  const storePath = path.join(homedir, '.wtd-store')

  const load = () => {
    const jsonString = fs.readFileSync(storePath, 'utf8')

    return JSON.parse(jsonString)
  }

  const write = () => {
    fs.writeFileSync(storePath, JSON.stringify(data))
  }

  return {
    load,
    write,
  }
}
