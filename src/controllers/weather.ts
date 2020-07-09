import { RequestHandler } from 'express';

import axios from '../utils/axios';
import addrToGeocode from '../utils/geocode';

export const welcome: RequestHandler = (req, res) => {
  res.send('<h1>Welcome. This is a weather api</h1>');
};

export const fetchWeather: RequestHandler<{
  location: string;
}> = (req, res) => {
  const { location } = req.query as { location: string };
  addrToGeocode(location).then((response) => {
    console.log(response);
    if (response.isAxiosError) {
      res.status(400).send(response);
    } else {
      axios
        .get(
          `/onecall?lat=${response.longitude}&lon=${response.latitude}&appid=${process.env.OWMKey}&exclude=minutely,daily`
        )
        .then((weather) => {
          res.status(200).send(weather.data);
        })
        .catch((e) => res.status(400).send(e));
    }
  });
};
