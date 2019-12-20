import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

import OutdoorModule from './OutdoorModule'
import IndoorModule from './IndoorModule'
import WindModule from './WindModule'
import RainModule from './RainModule'
import AuxiliaryModule from './AuxiliaryModule'
import HumidityModule from './HumidityModule'

const Dashboard = () => {

  return (
    <View style={STYLES.flex}>
      <StatusBar hidden={true} />
      <View style={STYLES.row}>
        <OutdoorModule />
        <WindModule />
        <RainModule />
      </View>
      <View style={STYLES.row}>
        <IndoorModule />
        <AuxiliaryModule />
        <HumidityModule />
      </View>
    </View>
  )
}

const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default Dashboard
