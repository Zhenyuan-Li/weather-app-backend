import { RequestHandler } from 'express';

import Geocode from '../models/Geocode';
import Weather from '../models/Weather';
import responseFormatter from '../utils/responseFormatter';

export const welcome: RequestHandler = (req, res) => {
  res.send('<h1>Welcome. This is a weather api</h1>');
};

export const fetchWeather: RequestHandler<{
  location: string;
}> = (req, res, next) => {
  const { location } = req.query as { location: string };

  const geocode = new Geocode(location);
  geocode.getGeocode
    .then((geoCodeRes) => {
      if (geoCodeRes instanceof Error) {
        next(geoCodeRes);
      } else {
        const { longitude, latitude, place } = geoCodeRes;

        const weather = new Weather(longitude, latitude, place);
        weather.getWeatherData.then((weatherRes) => {
          if (weatherRes instanceof Error) {
            next(weatherRes);
          }
          responseFormatter(res, 200, 'Fetch successfully!', weatherRes);
        });
      }
    })
    .catch((error) => next(error));
};
