import React from 'react'
import { render } from 'ink'
import { Home } from './components/Home'
import { Store } from './store'

export const renderUI = (store: Store): void => {
  render(<Home store={store} />)
}
