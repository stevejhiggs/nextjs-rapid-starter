import { NextApiRequest, NextApiResponse } from 'next';
import nc, { NextConnect } from 'next-connect';
import { pinoHttp, Options } from 'pino-http';
import { pinoConfig } from '@/src/logger/serverLogger';

const logger = pinoHttp(pinoConfig as unknown as Options);

export default function handler<T = any>(): NextConnect<NextApiRequest, NextApiResponse<T>> {
  return nc<NextApiRequest, NextApiResponse<T>>().use(logger);
}
