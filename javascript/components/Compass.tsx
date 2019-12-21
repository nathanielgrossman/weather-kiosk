import React, { useRef, useState, useEffect } from 'react'
import { Animated, Easing } from 'react-native'
import Svg, { Path, G } from 'react-native-svg'

import COLORS from '../constants/colors'

type Props = {
  size?: number
  color?: string
  rotation?: number
}

const ROTATE_INTERPOLATION = {
  inputRange: [0, 360],
  outputRange: ['0deg', '360deg'],
}

const Compass = ({ size = 70, color = COLORS.tan, rotation = 0 }: Props) => {
  const rotateAnimation = useRef(new Animated.Value(0))

  const [last, setLast] = useState(rotation)

  useEffect(() => {
    if (last === rotation) return

    const timing = Math.floor((Math.abs(rotation - last) / 90) * 1000)

    Animated.timing(rotateAnimation.current, {
      toValue: rotation,
      duration: timing,
      useNativeDriver: true,
      easing: Easing.quad,
    }).start(() => setLast(rotation))
  }, [rotateAnimation, rotation, last])

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotate: rotateAnimation.current.interpolate(ROTATE_INTERPOLATION),
          },
        ],
      }}>
      <Svg viewBox="0 0 70 70" height={size} width={size}>
        <Path
          d="M29.5 4.5C15 7.1 4 19.8 4 35c0 17.1 13.9 31 31 31s31-13.9 31-31C66 19.8 55 7.1 40.5 4.5"
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeMiterlimit={10}
        />
        <G
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeMiterlimit={10}>
          <Path d="M35 26.5v-24M38.4 7.4L35 1.5l-3.4 5.9" />
        </G>
      </Svg>
    </Animated.View>
  )
}

export default Compass
