"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["N"] = 0] = "N";
    Direction[Direction["NE"] = 1] = "NE";
    Direction[Direction["E"] = 2] = "E";
    Direction[Direction["SE"] = 3] = "SE";
    Direction[Direction["S"] = 4] = "S";
    Direction[Direction["SW"] = 5] = "SW";
    Direction[Direction["W"] = 6] = "W";
    Direction[Direction["NW"] = 7] = "NW";
})(Direction || (Direction = {}));
class CurrentWeather {
    constructor(rawData) {
        this.temp = rawData.temp;
        this.humidity = rawData.humidity;
        this.windSpeed = rawData.wind_speed;
        this.windDirection = CurrentWeather.calculateWindDirection(+rawData.wind_deg);
    }
    static calculateWindDirection(degree) {
        return Direction[Math.floor((degree + 22.5) / 45) % 8];
    }
}
exports.default = CurrentWeather;
//# sourceMappingURL=CurrentWeather.js.map