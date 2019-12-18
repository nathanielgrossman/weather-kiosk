export interface StationData {
  body: Body
  status: string
  time_exec: string
  time_server: string
}

export interface Body {
  devices: Device[]
  user: User
}

export interface Device {
  _id: string
  date_setup: number
  last_setup: number
  type: string
  last_status_store: number
  module_name: string
  firmware: number
  last_upgrade: number
  wifi_status: number
  reachable: boolean
  co2_calibrating: boolean
  station_name: string
  data_type: string[]
  place: Place
  read_only: boolean
  dashboard_data: DeviceDashboardData
  modules: ModuleData[]
}

export interface DeviceDashboardData {
  time_utc: number
  Temperature: number
  CO2: number
  Humidity: number
  Noise: number
  Pressure: number
  AbsolutePressure: number
  min_temp: number
  max_temp: number
  date_min_temp: number
  date_max_temp: number
  temp_trend: Trend
  pressure_trend: Trend
}

export type ModuleData = IndoorData | OutdoorData | RainData | WindData

export interface ModuleDataCommon {
  _id: string
  type: string
  module_name: string
  last_setup: number
  reachable: boolean
  firmware: number
  last_message: number
  last_seen: number
  rf_status: number
  battery_vp: number
  battery_percent: number
}

export interface IndoorData extends ModuleDataCommon {
  data_type: ['Temperature, Humidity, CO2']
  dashboard_data: IndoorDashboardData
}

export interface OutdoorData extends ModuleDataCommon {
  data_type: ['Temperature, Humidity']
  dashboard_data: OutdoorDashboardData
}

export interface RainData extends ModuleDataCommon {
  data_type: ['Rain']
  dashboard_data: RainDashboardData
}

export interface WindData extends ModuleDataCommon {
  data_type: ['Wind']
  dashboard_data: WindDashboardData
}

export interface IndoorDashboardData {
  time_utc: number
  Temperature: number
  CO2: number
  Humidity: number
  Pressure: number
  AbsolutePressure: number
  min_temp: number
  max_temp: number
  date_min_temp: number
  date_max_temp: number
  temp_trend: Trend
}

export interface OutdoorDashboardData {
  time_utc: number
  Temperature: number
  Humidity: number
  min_temp: number
  max_temp: number
  date_min_temp: number
  date_max_temp: number
  temp_trend: Trend
}

export interface RainDashboardData {
  time_utc: number
  Rain: number
  sum_rain_24: number
  sum_rain_1: number
}

export interface WindDashboardData {
  time_utc: number
  WindStrength: number
  WindAngle: number
  GustStrength: number
  GustAngle: number
  max_wind_str: number
  max_wind_angle: number
  date_max_wind_str: number
}

export interface Place {
  timezone: string
  country: string
  altitude: number
  location: string[]
}

export interface User {
  mail: string
  administrative: Administrative
}

export interface Administrative {
  reg_locale: string
  lang: string
  country: string
  unit: number
  windunit: number
  pressureunit: number
  feel_like_algo: number
}

export type Trend = 'up' | 'down' | 'stable'
