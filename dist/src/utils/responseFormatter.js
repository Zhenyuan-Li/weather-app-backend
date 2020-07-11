"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseFormatter = (res, code, message, data) => {
    res.status(code).send({
        status: code === 200 ? 'success' : 'error',
        message,
        data,
    });
};
exports.default = responseFormatter;
//# sourceMappingURL=responseFormatter.js.map