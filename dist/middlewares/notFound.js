"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseFormatter_1 = __importDefault(require("../utils/responseFormatter"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFound = (req, res, next) => {
    return responseFormatter_1.default(res, 404, 'api end points not found', null);
};
exports.default = notFound;
//# sourceMappingURL=notFound.js.map