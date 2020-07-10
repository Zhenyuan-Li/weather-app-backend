import { RequestHandler } from 'express';

import Geocode from '../models/Geocode';
import Weather from '../models/Weather';

export const welcome: RequestHandler = (req, res) => {
  res.send('<h1>Welcome. This is a weather api</h1>');
};

export const fetchWeather: RequestHandler<{
  location: string;
}> = (req, res) => {
  const { location } = req.query as { location: string };
  Geocode.addrToGeocode(location)
    .then((geoCodeRes) => {
      if (geoCodeRes.isAxiosError) {
        res.status(400).send(geoCodeRes);
      } else {
        const { longitude, latitude, place } = geoCodeRes;
        Weather.getWeatherData(longitude, latitude, place).then(
          (weatherRes) => {
            if (weatherRes.isAxiosError) {
              res.status(400).send(weatherRes);
            }
            res.status(200).send(weatherRes);
          }
        );
      }
    })
    .catch((error) => res.status(400).send(error));
};