"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
class Geocode {
}
exports.default = Geocode;
Geocode.addrToGeocode = (location) => {
    return axios_1.default
        .get(`/${location}.json?access_token=${process.env.MapBoxToken}`)
        .then((response) => {
        const place = response.data.features[0].place_name;
        const latitude = response.data.features[0].center[1];
        const longitude = response.data.features[0].center[0];
        // const geocode: AddrGeocode = { place, latitude, longitude };
        return { place, latitude, longitude };
    })
        .catch((error) => {
        return error;
    });
};
//# sourceMappingURL=geocode.js.map