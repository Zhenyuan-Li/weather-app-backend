import { RequestHandler } from 'express';
import axios from '../utils/axios';

export const welcome: RequestHandler = (req, res) => {
  res.send('<h1>Welcome. This is a weather api</h1>');
};

export const fetchWeather: RequestHandler<{
  latitude: string;
  longitude: string;
}> = (req, res) => {
  const { latitude, longitude } = req.query;

  const url = `/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.OWMKey}&exclude=minutely, daily`;
  axios
    .get(url)
    .then((response) => res.status(200).send(response.data))
    .catch((error) => res.status(400).send(error));
};
