import pino, { Logger, LoggerOptions } from 'pino';
import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig();

let logger: Logger;

export const pinoConfig: LoggerOptions = {
  level: publicRuntimeConfig?.logLevel || process.env['NEXT_PUBLIC_LOGS_LEVEL'] || 'info'
};

export default function getLogger(): Logger {
  if (!logger) {
    logger = pino(pinoConfig);
  }

  return logger;
}
