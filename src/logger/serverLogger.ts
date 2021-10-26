import pino from 'pino';
import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig();

let logger: pino.Logger;

export const pinoConfig: pino.LoggerOptions = {
  level: publicRuntimeConfig?.logLevel || process.env['NEXT_PUBLIC_LOGS_LEVEL'] || 'info'
};

export default function getLogger(): pino.Logger {
  if (!logger) {
    logger = pino(pinoConfig);
  }

  return logger;
}
