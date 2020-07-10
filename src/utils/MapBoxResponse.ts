/* eslint-disable camelcase */
interface placeRes {
  place_name: string;
  center: Array<string>;
}

export interface MapBoxResponse {
  features: Array<placeRes>;
}
