import http from 'http';
import { agent } from 'supertest';
import handler from '@/pages/api/number/[id]/returnId';
import wrapApiRouteForTest from '../../apiRouteTestWrapper';

describe('api -> /api/number/[id]/returnId endpoint', () => {
  it('returns a 200 and the expected body on get', async () => {
    // I've yet to figure out how to get the router to extract out the query as part of the call
    // so currently the query needs to be passed through directly.
    const server = http.createServer(wrapApiRouteForTest(handler, { id: 'fish' }));
    const response = await agent(server).get('/api/number/passedId/returnId');

    expect(response.status).toBe(200);
    expect(JSON.parse(response.text)).toEqual({ id: 'fish' });
  });
});
