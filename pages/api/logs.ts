import apiHandler from '@/src/api/routeHandler';

const handler = apiHandler().post(async (request, response) => {
  try {
    const { msg, level = 'info' } = request.body;
    (request.log as any)[level as string](msg);
  } catch {
    return response.status(500).end();
  }
  return response.status(200).end();
});

export default handler;
