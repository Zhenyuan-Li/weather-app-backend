import { createLogger, format, transports } from 'winston';
import path from 'path';

const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: format.combine(
    format.colorize(),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    format.label({ label: 'Hello World' }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(
      (info) =>
        `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
    )
  ),
  transports: [new transports.Console()],
});

export default logger;
