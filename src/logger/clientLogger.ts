import { pino } from 'pino';
import { pinoConfig } from './serverLogger';

let logger: pino.Logger;

export default function getLogger(): pino.Logger {
  if (!logger) {
    logger = pino({
      ...pinoConfig,
      browser: {
        asObject: true,
        transmit: {
          level: 'warn',
          send: (level, logEvent) => {
            const message = logEvent.messages[0];

            const headers = {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
              type: 'application/json'
            };

            // sendBeacon only works on secure pages
            if (window.location.protocol === 'https:') {
              const blob = new Blob([JSON.stringify({ msg: message, level })], headers);
              navigator.sendBeacon(`${window.location.protocol}//${window.location.host}/api/logs`, blob);
            }
          }
        }
      }
    });
  }

  return logger;
}
