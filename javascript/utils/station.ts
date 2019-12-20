import _ from 'lodash'

import {
  OutdoorModuleData,
  MainModuleData,
  RainModuleData,
  WindModuleData,
  StationData,
  MODULE_TYPES,
  ModuleDashboardData,
  ModuleData,
  IndoorModuleData,
} from '../../types/StationData'
import {
  TemperatureDashboardData,
  HumidityDashboardData,
  RainDashboardData,
  WindDashboardData,
  UniversalData,
  DashboardData,
  AuxiliaryDashboardData,
} from '../../types/DashboardData'

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

export const generateAuxiliaryDashboardData = ({
  CO2,
  Pressure,
  Noise,
}: MainModuleData): AuxiliaryDashboardData => ({
  CO2,
  Pressure,
  Noise,
})

export const generateUniversalData = (rawData: StationData): UniversalData => ({
  time_utc: rawData.time_server,
  station_name: _.get(rawData, 'body.devices[0].station_name', ''),
})

export const parseRawData = (rawData: StationData): DashboardData => {
  const output = {
    universalData: generateUniversalData(rawData),
    indoorDashboardData: null,
    outdoorDashboardData: null,
    auxiliaryDashboardData: null,
    humidityDashboardData: null,
    rainDashboardData: null,
    windDashboardData: null,
  } as DashboardData
  const modules: ModuleData[] = _.get(rawData, 'body.devices[0].modules', [])
  const mainModule: MainModuleData = _.get(
    rawData,
    'body.devices[0].dashboard_data',
    {},
  )
  modules.forEach((module: ModuleData) =>
    parseModule(module, mainModule, output),
  )
  return output
}

export const parseModule = (
  rawModuleData: ModuleData,
  rawMainData: MainModuleData,
  output: Partial<DashboardData>,
) => {
  const { type, dashboard_data } = rawModuleData
  switch (type) {
    case MODULE_TYPES.OUTDOOR:
      output.auxiliaryDashboardData = generateAuxiliaryDashboardData(
        rawMainData,
      )
      output.indoorDashboardData = generateTemperatureDashboardData(rawMainData)
      output.outdoorDashboardData = generateTemperatureDashboardData(
        dashboard_data as OutdoorModuleData,
      )
      output.humidityDashboardData = generateHumidityDashboardData(
        dashboard_data as OutdoorModuleData,
        rawMainData,
      )
      break
    case MODULE_TYPES.RAIN:
      output.rainDashboardData = generateRainDashboardData(
        dashboard_data as RainModuleData,
      )
      break
    case MODULE_TYPES.WIND:
      output.windDashboardData = generateWindDashboardData(
        dashboard_data as WindModuleData,
      )
      break
    default:
      break
  }
}
