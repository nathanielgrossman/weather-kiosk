import React from 'react'
import { Text, View } from 'react-native'

import { AuthContextProvider } from './contexts/AuthContext'
import { StationContextProvider } from './contexts/StationContext'
import Dashboard from './components/Dashboard'

const Main = () => {
  return (
    <AuthContextProvider>
      <StationContextProvider>
        <Dashboard />
      </StationContextProvider>
    </AuthContextProvider>
  )
}

export default Main
