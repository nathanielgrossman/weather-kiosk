import _ from 'lodash'

import {
  OutdoorModuleData,
  MainModuleData,
  RainModuleData,
  WindModuleData,
  StationData,
  MODULE_TYPES,
  ModuleDashboardData,
} from 'types/StationData'
import {
  TemperatureDashboardData,
  HumidityDashboardData,
  RainDashboardData,
  WindDashboardData,
  UniversalData,
  DashboardData,
} from 'types/DashboardData'

export const generateTemperatureDashboardData = ({
  Temperature,
  min_temp,
  max_temp,
}: OutdoorModuleData | MainModuleData): TemperatureDashboardData => ({
  Temperature,
  min_temp,
  max_temp,
})

export const generateHumidityDashboardData = (
  rawOutdoorData: OutdoorModuleData,
  rawIndoorData: MainModuleData,
): HumidityDashboardData => {
  return {
    outdoor: rawOutdoorData.Humidity,
    indoor: rawIndoorData.Humidity,
  }
}

export const generateRainDashboardData = ({
  sum_rain_1,
  sum_rain_24,
}: RainModuleData): RainDashboardData => ({ sum_rain_1, sum_rain_24 })

export const generateWindDashboardData = ({
  WindStrength,
  WindAngle,
  max_wind_str,
  max_wind_angle,
}: WindModuleData): WindDashboardData => ({
  WindStrength,
  WindAngle,
  max_wind_str,
  max_wind_angle,
})

export const generateUniversalData = (rawData: StationData): UniversalData => ({
  time_utc: rawData.time_server,
  station_name: _.get(rawData, 'body.devices[0].station_name', ''),
})

export const parseRawData = (rawData: StationData): DashboardData => {
  const output = {
    universalData: generateUniversalData(rawData),
  } as DashboardData
  const modules = _.get(rawData, 'body.devices[0].modules', [])
  modules.array.forEach((module: ModuleDashboardData) => {})
  return output
}

export const parseModule = (
  rawModuleData: ModuleDashboardData,
  rawMainData: MainModuleData,
  output: Partial<DashboardData>,
) => {
  const { type } = rawModuleData
  switch (type) {
    case MODULE_TYPES.OUTDOOR:
      output.indoorDashboardData = generateTemperatureDashboardData(rawMainData)
      output.outdoorDashboardData = generateTemperatureDashboardData(
        rawModuleData as OutdoorModuleData,
      )
      output.humidityDashboardData = generateHumidityDashboardData(
        rawModuleData as OutdoorModuleData,
        rawMainData,
      )
      break
    case MODULE_TYPES.RAIN:
      output.rainDashboardData = generateRainDashboardData(
        rawModuleData as RainModuleData,
      )

      break
    case MODULE_TYPES.WIND:
      output.windDashboardData = generateWindDashboardData(
        rawModuleData as WindModuleData,
      )

      break
    default:
      break
  }
}
