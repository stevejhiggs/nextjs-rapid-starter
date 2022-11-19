import type { GetServerSidePropsContext } from 'next';
import { createRequest, createResponse } from 'node-mocks-http';

export const gsspContext = (context?: Partial<GetServerSidePropsContext>): GetServerSidePropsContext => ({
  req: createRequest(),
  res: createResponse(),
  params: undefined,
  query: {},
  resolvedUrl: '',
  ...context
});
