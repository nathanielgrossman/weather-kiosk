import React, { useMemo } from 'react'
import { Text } from 'react-native'

import { TEXT_SIZES } from '../../constants/style'
import FONTS from '../../constants/fonts'
import COLORS from '../../constants/colors'

type Props = {
  size?: keyof typeof TEXT_SIZES
  color?: keyof typeof COLORS
  font?: keyof typeof FONTS
  children: string
}

const UIText = ({
  size = 'small',
  color = 'blue3',
  font = 'plexBold',
  children = '',
}: Props) => {

  const generatedStyle = useMemo(
    () => ({
      fontFamily: FONTS[font],
      fontSize: TEXT_SIZES[size],
      color: COLORS[color],
    }),
    [size, color, font],
  )

  return <Text style={generatedStyle}>{children}</Text>
}

export default UIText