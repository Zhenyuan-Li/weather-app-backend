"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FutureWeather {
    constructor(rawData) {
        this.maxTemp = rawData.temp.max;
        this.minTemp = rawData.temp.min;
        this.date = rawData.dt;
    }
}
exports.default = FutureWeather;
//# sourceMappingURL=FutureWeather.js.map