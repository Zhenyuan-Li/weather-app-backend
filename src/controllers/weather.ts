import { RequestHandler } from 'express';
import { AxiosResponse } from 'axios';

import axios from '../utils/axios';
import addrToGeocode from '../utils/geocode';
import CurrentWeather from '../models/CurrentWeather';
import FutureWeather from '../models/FutureWeather';
import { OWMResponse } from '../utils/OWMResponse';

export const welcome: RequestHandler = (req, res) => {
  res.send('<h1>Welcome. This is a weather api</h1>');
};

export const fetchWeather: RequestHandler<{
  location: string;
}> = (req, res) => {
  const { location } = req.query as { location: string };
  addrToGeocode(location)
    .then((response) => {
      if (response.isAxiosError) {
        res.status(400).send(response);
      } else {
        axios
          .get(
            `/onecall?lat=${response.longitude}&lon=${response.latitude}&appid=${process.env.OWMKey}&units=metric`
          )
          .then((weather: AxiosResponse<OWMResponse>) => {
            const currentWeather = new CurrentWeather(weather.data.current);
            const futureWeathers: Array<FutureWeather> = [];
            weather.data.daily.forEach((forecast) => {
              futureWeathers.push(new FutureWeather(forecast));
            });
            res
              .status(200)
              .send({ currentWeather, futureWeathers, place: response.place });
          })
          .catch((e) => res.status(400).send(e));
      }
    })
    .catch((error) => res.status(400).send(error));
};
