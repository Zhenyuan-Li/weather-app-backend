import { FutureRes } from '../utils/OWMResponse';

class FutureWeather {
  private maxTemp: string;

  private minTemp: string;

  private date: string;

  constructor(rawData: FutureRes) {
    this.maxTemp = rawData.temp.max;
    this.minTemp = rawData.temp.min;
    this.date = rawData.dt;
  }
}

export default FutureWeather;
