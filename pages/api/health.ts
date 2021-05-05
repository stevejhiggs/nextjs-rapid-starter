import apiHandler from '@src/api/routeHandler';

const environment = process.env['NEXT_PUBLIC_ENVIRONMENT'] || 'local';

const handler = apiHandler().all(async (request, response) => {
  response.json({ environment });
});

export default handler;
