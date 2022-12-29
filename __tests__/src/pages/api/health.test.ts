import http from 'http';
import { agent } from 'supertest';
import health from '@/pages/api/health';
import wrapApiRouteForTest from './apiRouteTestWrapper';

describe('api -> /api/health endpoint', () => {
  it('returns a 200 and the expected body on get', async () => {
    const server = http.createServer(wrapApiRouteForTest(health));
    const response = await agent(server).post('/api/health');

    expect(response.status).toBe(200);
    expect(JSON.parse(response.text)).toEqual({ environment: 'local' });
  });
});
