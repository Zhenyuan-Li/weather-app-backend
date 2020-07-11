/* eslint-disable prefer-destructuring */
import axios, { AxiosResponse } from 'axios';

import { MapBoxResponse } from '../utils/MapBoxResponse';

axios.defaults.baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

interface GeocodeData {
  place: string;
  latitude: string;
  longitude: string;
}

export default class Geocode {
  private geocode: GeocodeData;

  private location: string;

  constructor(location: string) {
    this.location = location;
    this.geocode = {
      place: '',
      latitude: '',
      longitude: '',
    };
  }

  get getGeocode(): Promise<GeocodeData | Error> {
    return axios
      .get(`/${this.location}.json?access_token=${process.env.MapBoxToken}`)
      .then((response: AxiosResponse<MapBoxResponse>) => {
        this.geocode.place = response.data.features[0].place_name;
        this.geocode.latitude = response.data.features[0].center[1];
        this.geocode.longitude = response.data.features[0].center[0];

        return { ...this.geocode };
      })
      .catch((error: Error) => {
        return error;
      });
  }
}
