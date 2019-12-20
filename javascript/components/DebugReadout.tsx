import React, { useContext } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import StationContext from '../contexts/StationContext'

const DebugReadout = () => {
  const contextData = useContext(StationContext)

  return (
    <ScrollView contentContainerStyle={STYLES.container} style={STYLES.flex}>
      <Text style={STYLES.debug}>{JSON.stringify(contextData, null, 2)}</Text>
    </ScrollView>
  )
}

const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: 'black',
  },
  debug: {
    color: 'white',
    backgroundColor: 'black',
  },
})

export default DebugReadout
