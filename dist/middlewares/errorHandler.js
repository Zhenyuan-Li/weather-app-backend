"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseFormatter_1 = __importDefault(require("../utils/responseFormatter"));
const logger_1 = __importDefault(require("../utils/logger"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (error, req, res, next) => {
    if (error.response) {
        if (error.response.status === '429') {
            return responseFormatter_1.default(res, 503, 'The server is busy at the moment, please try again later', null);
        }
        return responseFormatter_1.default(res, Number.parseInt(error.response.status, 10), error.response.data.message, null);
    }
    if (error.request) {
        logger_1.default.warn(error.request);
    }
    logger_1.default.error(error.message);
    logger_1.default.error(error.stack);
    return responseFormatter_1.default(res, 500, 'Something failed, we are investigating!', null);
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map