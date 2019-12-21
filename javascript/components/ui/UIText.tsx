import React, { useMemo } from 'react'
import { Text, StyleProp, TextStyle } from 'react-native'

import { TEXT_SIZES } from '../../constants/style'
import FONTS from '../../constants/fonts'
import COLORS from '../../constants/colors'

type Props = {
  size?: keyof typeof TEXT_SIZES
  color?: keyof typeof COLORS
  font?: keyof typeof FONTS
  style?: StyleProp<TextStyle>
  children: React.ReactNode
}

const UIText = ({
  size = 'small',
  color = 'blue3',
  font = 'plexBold',
  style={},
  children = '',
}: Props) => {

  const generatedStyle = useMemo(
    () => ({
      fontFamily: FONTS[font],
      fontSize: TEXT_SIZES[size],
      color: COLORS[color],
      lineHeight: TEXT_SIZES[size],
    }),
    [size, color, font, style],
  )

  return <Text style={[generatedStyle, style]}>{children}</Text>
}

export default UIText