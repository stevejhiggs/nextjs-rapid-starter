import http from 'http';
import request from 'supertest';
import wrapApiRouteForTest from '../../apiRouteTestWrapper';
import handler from '@/pages/api/number/[id]/returnId';

describe('api -> /api/number/[id]/returnId endpoint', () => {
  it('returns a 200 and the expected body on get', async () => {
    // I've yet to figure out how to get the router to extract out the query as part of the call
    // so currently the query needs to be passed through directly.
    const server = http.createServer(wrapApiRouteForTest(handler, { id: 'fish' }));
    const agent = await request.agent(server).get('/api/number/passedId/returnId');

    expect(agent.status).toBe(200);
    expect(JSON.parse(agent.text)).toEqual({ id: 'fish' });
  });
});
