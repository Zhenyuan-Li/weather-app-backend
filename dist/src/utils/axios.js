"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const instance = axios_1.default.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});
exports.default = instance;
//# sourceMappingURL=axios.js.map