#!/usr/bin/env node

import { storeConsumer } from './store'

export const exec = (): void => {
  const {
    init,
    switchCollection,
    createCollection,
    getCollectionNames,
    getCurrentCollection,
  } = storeConsumer()

  createCollection('ご飯')

  const { add, getItems, getItemMap, remove, updateStatus } = getCurrentCollection()

  console.log(getCollectionNames())
}

exec()
