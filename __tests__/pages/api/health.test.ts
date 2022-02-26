import http from 'http';
import request from 'supertest';
import wrapApiRouteForTest from './apiRouteTestWrapper';
import health from '@/pages/api/health';

describe('api -> /api/health endpoint', () => {
  it('returns a 200 and the expected body on get', async () => {
    const server = http.createServer(wrapApiRouteForTest(health));
    const agent = await request.agent(server).post('/api/health');

    expect(agent.status).toBe(200);
    expect(JSON.parse(agent.text)).toEqual({ environment: 'local' });
  });
});
