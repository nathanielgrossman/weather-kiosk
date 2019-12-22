import React from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
  children: React.ReactChild | React.ReactChildren
  color: string
}

const DashboardModule = ({ children, color }: Props) => (
  <View style={[STYLES.flex, { backgroundColor: color }]}>{children}</View>
)

const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: 30,
    paddingBottom: 30,
    paddingTop: 30,
  },
})

export default DashboardModule
