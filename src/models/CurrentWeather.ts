import { CurrentRes } from '../utils/OWMResponse';

enum Direction {
  N,
  NE,
  E,
  SE,
  S,
  SW,
  W,
  NW,
}

class CurrentWeather {
  private temp: string;

  private humidity: string;

  private windSpeed: string;

  private windDirection: string;

  constructor(rawData: CurrentRes) {
    this.temp = rawData.temp;
    this.humidity = rawData.humidity;
    this.windSpeed = rawData.wind_speed;
    this.windDirection = CurrentWeather.calculateWindDirection(
      +rawData.wind_deg
    );
  }

  private static calculateWindDirection(degree: number): string {
    return Direction[Math.floor((degree + 22.5) / 45) % 8];
  }
}

export default CurrentWeather;
