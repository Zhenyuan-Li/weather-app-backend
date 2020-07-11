"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
// import path from 'path';
const logger = winston_1.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    format: winston_1.format.combine(winston_1.format.colorize(), 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    winston_1.format.label({ label: 'Hello World' }), winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.format.printf((info) => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)),
    transports: [new winston_1.transports.Console()],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map