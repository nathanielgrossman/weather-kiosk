import React from 'react'
import { Text, View } from 'react-native'

import { AuthContextProvider } from './contexts/AuthContext'

const Main = () => {
  return (
    <AuthContextProvider>
      <View>
        <Text>hello world</Text>
      </View>
    </AuthContextProvider>
  )
}

export default Main
