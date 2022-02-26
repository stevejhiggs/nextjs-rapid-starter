import { NextApiRequest, NextApiResponse } from 'next';
import nc, { NextConnect } from 'next-connect';
import pinoHttp from 'pino-http';
import { pinoConfig } from '@/src/logger/serverLogger';

const logger = pinoHttp(pinoConfig);

export default function handler<T = any>(): NextConnect<NextApiRequest, NextApiResponse<T>> {
  return nc<NextApiRequest, NextApiResponse<T>>().use(logger);
}
