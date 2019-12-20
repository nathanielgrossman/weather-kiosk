export interface TemperatureDashboardData {
  Temperature: number
  min_temp: number
  max_temp: number
}

export interface AuxiliaryDashboardData {
  CO2: number
  Noise: number
  Pressure: number
}

export interface HumidityDashboardData {
  outdoor: number
  indoor: number
}

export interface RainDashboardData {
  sum_rain_1: number
  sum_rain_24: number
}

export interface WindDashboardData {
  WindStrength: number
  WindAngle: number
  max_wind_str: number
  max_wind_angle: number
}

export interface UniversalData {
  time_utc: string
  station_name: string
}

export interface DashboardData {
  indoorDashboardData: TemperatureDashboardData | null
  outdoorDashboardData: TemperatureDashboardData | null
  auxiliaryDashboardData: AuxiliaryDashboardData | null
  humidityDashboardData: HumidityDashboardData | null
  rainDashboardData: RainDashboardData | null
  windDashboardData: WindDashboardData | null
  universalData: UniversalData | null
}