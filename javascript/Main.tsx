import React from 'react'
import { Text, View } from 'react-native'

import { AuthContextProvider } from './contexts/AuthContext'
import { StationContextProvider } from './contexts/StationContext'
import DebugReadout from './components/DebugReadout'

const Main = () => {
  return (
    <AuthContextProvider>
      <StationContextProvider>
        <DebugReadout />
      </StationContextProvider>
    </AuthContextProvider>
  )
}

export default Main
