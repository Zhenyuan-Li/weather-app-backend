import { AxiosResponse } from 'axios';
import axios from '../utils/axios';

import { OWMResponse } from '../utils/OWMResponse';
import CurrentWeather from './CurrentWeather';
import FutureWeather from './FutureWeather';

interface WeatherData {
  current: CurrentWeather;
  forecast: Array<FutureWeather>;
  place: string;
  isAxiosError?: boolean;
}

export default class Weather {
  static getWeatherData(
    longitude: string,
    latitude: string,
    place: string
  ): Promise<WeatherData> {
    return axios
      .get(
        `/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.OWMKey}&units=metric`
      )
      .then((response: AxiosResponse<OWMResponse>) => {
        const current = new CurrentWeather(response.data.current);
        const forecast: Array<FutureWeather> = [];
        response.data.daily.forEach((dailyData) => {
          forecast.push(new FutureWeather(dailyData));
        });
        return { current, forecast, place };
      })
      .catch((error) => {
        return error;
      });
  }
}
