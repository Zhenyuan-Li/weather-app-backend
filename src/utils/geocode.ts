import axios from 'axios';

axios.defaults.baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

interface addrGeocode {
  place: string;
  latitude: string;
  longitude: string;
  isAxiosError?: boolean;
}

const addrToGeocode = (location: string): Promise<addrGeocode> => {
  return axios
    .get(`/${location}.json?access_token=${process.env.MapBoxToken}`)
    .then((response) => {
      const place = response.data.features[0].place_name;
      const latitude = response.data.features[0].center[0].toString();
      const longitude = response.data.features[0].center[1].toString();

      const geocode: addrGeocode = { place, latitude, longitude };
      return geocode;
    })
    .catch((error) => {
      return error;
    });
};

export default addrToGeocode;
