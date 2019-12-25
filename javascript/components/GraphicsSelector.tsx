import React, { useContext, useMemo } from 'react'
import { View, StyleSheet } from 'react-native'

import AuthContext from '../contexts/AuthContext'

import Bob from './graphics/Bob'
import Foxy from './graphics/Foxy'
import Hummer from './graphics/Hummer'
import Sage from './graphics/Sage'
import Quail from './graphics/Quail'
import Peak from './graphics/Peak'
import Acorn from './graphics/Acorn'
import Walnut from './graphics/Walnut'

type Props = {
  size: number
}

const graphics = [Bob, Foxy, Hummer, Sage, Quail, Peak, Acorn, Walnut]

const GraphicsSelector = ({ size }: Props) => {
  const { accessToken } = useContext(AuthContext)

  const Graphic = useMemo(
    () => graphics[Math.floor(Math.random() * graphics.length)],
    [accessToken],
  )

  return (
    <View style={STYLES.container}>
      <Graphic size={size} />
    </View>
  )
}

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
})

export default GraphicsSelector
