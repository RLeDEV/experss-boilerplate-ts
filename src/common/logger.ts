import { createLogger, transports, format } from 'winston';

export const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${String(timestamp)}] ${String(level)}: ${String(message)}`;
    }),
  ),
  defaultMeta: {
    service: 'LP-SRV', // stands for launchpad server
  },
});

export default logger;
