import React, { useEffect } from 'react'
// @ts-ignore
import RNLockTask from 'react-native-lock-task'

import Main from './javascript/Main'

const App = () => {
  useEffect(() => RNLockTask.startLockTask(), [])
  return <Main />
}

export default App
