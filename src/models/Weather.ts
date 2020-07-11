import { AxiosResponse } from 'axios';

import axios from '../utils/axios';
import { OWMResponse } from '../utils/OWMResponse';
import CurrentWeather from './CurrentWeather';
import FutureWeather from './FutureWeather';

interface WeatherData {
  current: CurrentWeather;
  forecast: Array<FutureWeather>;
  place: string;
}

export default class Weather {
  private longitude: string;

  private latitude: string;

  private place: string;

  constructor(longitude: string, latitude: string, place: string) {
    this.longitude = longitude;
    this.latitude = latitude;
    this.place = place;
  }

  get getWeatherData(): Promise<WeatherData | Error> {
    return axios
      .get(
        `/onecall?lat=${this.latitude}&lon=${this.longitude}&appid=${process.env.OWMKey}&units=metric`
      )
      .then((response: AxiosResponse<OWMResponse>) => {
        const current = new CurrentWeather(response.data.current);
        const forecast: Array<FutureWeather> = [];
        response.data.daily.forEach((dailyData) => {
          forecast.push(new FutureWeather(dailyData));
        });
        return { current, forecast, place: this.place };
      })
      .catch((error: Error) => {
        return error;
      });
  }
}
