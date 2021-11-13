import { ServerResponse, IncomingMessage } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextConnect } from 'next-connect';
import { apiResolver } from 'next/dist/server/api-utils';

// mock for `apiResolver`'s 5th parameter to please TS
const apiPreviewPropertiesMock = {
  previewModeId: 'id',
  previewModeEncryptionKey: 'key',
  previewModeSigningKey: 'key'
};

// This wraps the next connect function with next's special sauce, allowing us access to things like res.status
export default function wrapApiRouteForTest(
  handler: NextConnect<NextApiRequest, NextApiResponse>,
  query?: any
): (request: any, response: any) => void {
  const requestListener = (request: IncomingMessage, response: ServerResponse) => {
    apiResolver(request, response, query, handler, apiPreviewPropertiesMock, false);
  };

  return requestListener;
}
