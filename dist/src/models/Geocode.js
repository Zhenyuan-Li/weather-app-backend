"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prefer-destructuring */
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
class Geocode {
    constructor(location) {
        this.location = location;
        this.geocode = {
            place: '',
            latitude: '',
            longitude: '',
        };
    }
    get getGeocode() {
        return axios_1.default
            .get(`/${this.location}.json?access_token=${process.env.MapBoxToken}`)
            .then((response) => {
            this.geocode.place = response.data.features[0].place_name;
            this.geocode.latitude = response.data.features[0].center[1];
            this.geocode.longitude = response.data.features[0].center[0];
            return { ...this.geocode };
        })
            .catch((error) => {
            return error;
        });
    }
}
exports.default = Geocode;
//# sourceMappingURL=Geocode.js.map