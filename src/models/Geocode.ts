import axios, { AxiosResponse } from 'axios';

import { MapBoxResponse } from '../utils/MapBoxResponse';

axios.defaults.baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

interface AddrGeocode {
  place: string;
  latitude: string;
  longitude: string;
  isAxiosError?: boolean;
}

export default class Geocode {
  static addrToGeocode = (location: string): Promise<AddrGeocode> => {
    return axios
      .get(`/${location}.json?access_token=${process.env.MapBoxToken}`)
      .then((response: AxiosResponse<MapBoxResponse>) => {
        const place = response.data.features[0].place_name;
        const latitude = response.data.features[0].center[1];
        const longitude = response.data.features[0].center[0];

        return { place, latitude, longitude };
      })
      .catch((error) => {
        return error;
      });
  };
}
