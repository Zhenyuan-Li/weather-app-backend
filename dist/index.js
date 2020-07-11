"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const weather_1 = __importDefault(require("./routes/weather"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const logger_1 = __importDefault(require("./utils/logger"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
process.on('uncaughtException', (e) => {
    logger_1.default.error(e.message);
    process.exit(1);
});
process.on('unhandledRejection', (e) => {
    logger_1.default.error(e);
    process.exit(1);
});
const app = express_1.default();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan_1.default('dev'));
}
else {
    app.use(morgan_1.default('common'));
}
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(weather_1.default);
app.use(errorHandler_1.default);
app.use(notFound_1.default);
app.listen(port, () => {
    logger_1.default.info(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map