"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_1 = require("../controllers/weather");
const router = express_1.default();
router.get('/', weather_1.welcome);
router.get('/weather', weather_1.fetchWeather);
exports.default = router;
//# sourceMappingURL=weather.js.map