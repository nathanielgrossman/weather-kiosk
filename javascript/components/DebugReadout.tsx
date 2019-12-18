import React, { useContext } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import StationContext from '../contexts/StationContext'

const DebugReadout = () => {
  const {data} = useContext(StationContext)

  return (
    <ScrollView>
      <Text style={STYLES.debug}>{JSON.stringify(data, null, 2)}</Text>
    </ScrollView>
  )
}

const STYLES = StyleSheet.create({
  debug: {
    color: 'white',
    backgroundColor: 'black'
  }
})

export default DebugReadout