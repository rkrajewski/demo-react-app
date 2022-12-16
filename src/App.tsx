import React from 'react'
import { Provider } from 'react-redux'

import GithubUsersRoot from 'github-users/components/GithubUsersRoot'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GithubUsersRoot />
    </Provider>
  )
}

export default App
