import React, { useContext, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import UIText from './ui/UIText'

import StationContext from '../contexts/StationContext'
import { utcToTime, utcToDate } from '../utils/conversions'

import COLORS from '../constants/colors'

const TopBar = () => {
  const { universalData } = useContext(StationContext)
  const { time_utc, station_name } = universalData || {}

  const time = useMemo(() => utcToTime(time_utc), [time_utc])

  const date = useMemo(() => utcToDate(time_utc), [time_utc])

  return (
    <View style={STYLES.row}>
      <View style={STYLES.subRow}>
        <UIText
          color="tan"
          size="small"
          font="eczar"
          style={STYLES.universalText}>
          {station_name}
        </UIText>
      </View>
      <View style={[STYLES.subRow, STYLES.center]}>
        <UIText
          color="tan"
          size="small"
          font="eczar"
          style={STYLES.universalText}>
          {date}
        </UIText>
      </View>
      <View style={[STYLES.subRow, STYLES.end]}>
        <UIText
          color="tan"
          size="small"
          font="eczar"
          style={STYLES.universalText}>
          {time}
        </UIText>
      </View>
    </View>
  )
}

const STYLES = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: COLORS.blue0,
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 30,
  },
  subRow: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  universalText: {
    lineHeight: 36,
    marginRight: 30,
    marginBottom: -6,
  },
})

export default TopBar
