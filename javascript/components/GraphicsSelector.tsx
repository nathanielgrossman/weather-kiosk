import React, { useMemo, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

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

const ONE_HOUR = 60 * 60 * 1000

const GRAPHICS = [Bob, Foxy, Hummer, Sage, Quail, Peak, Acorn, Walnut]

const GraphicsSelector = ({ size }: Props) => {
  const [random, setRandom] = useState(0)

  useEffect(() => {
    let refreshTimeout: number

    const updateRandom = () => {
      setRandom(Math.random())
      refreshTimeout = setTimeout(updateRandom, ONE_HOUR)
    }

    updateRandom()

    return () => {
      refreshTimeout && clearTimeout(refreshTimeout)
    }
  }, [])

  const Graphic = useMemo(
    () => GRAPHICS[Math.floor(random * GRAPHICS.length)],
    [random],
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
