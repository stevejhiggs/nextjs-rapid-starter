import apiHandler from '@src/api/routeHandler';

// /api/number/[id]/returnId
const handler = apiHandler().get(async (request, response) => {
  // route params come in via the query object, as do query string params
  response.json({ id: request.query.id });
});

export default handler;
