"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("../utils/axios"));
const CurrentWeather_1 = __importDefault(require("./CurrentWeather"));
const FutureWeather_1 = __importDefault(require("./FutureWeather"));
class Weather {
    constructor(longitude, latitude, place) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.place = place;
    }
    get getWeatherData() {
        return axios_1.default
            .get(`/onecall?lat=${this.latitude}&lon=${this.longitude}&appid=${process.env.OWMKey}&units=metric`)
            .then((response) => {
            const current = new CurrentWeather_1.default(response.data.current);
            const forecast = [];
            response.data.daily.forEach((dailyData) => {
                forecast.push(new FutureWeather_1.default(dailyData));
            });
            return { current, forecast, place: this.place };
        })
            .catch((error) => {
            return error;
        });
    }
}
exports.default = Weather;
//# sourceMappingURL=Weather.js.map