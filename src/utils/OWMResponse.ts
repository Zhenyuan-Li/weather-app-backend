/* eslint-disable camelcase */
interface DailyWeather {
  min: string;
  max: string;
}

export interface CurrentRes {
  temp: string;
  humidity: string;
  wind_speed: string;
  wind_deg: string;
}

export interface FutureRes {
  dt: string;
  temp: DailyWeather;
}

export interface OWMResponse {
  current: CurrentRes;
  daily: Array<FutureRes>;
}
