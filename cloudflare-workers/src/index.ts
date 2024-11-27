/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

let _env: Env;

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    _env = env;

		const url = new URL(request.url);

		switch (url.pathname) {
      case '/api/services':
        return getAllServices(request);
      case '/api/another-route':
        return getAllProjects(request);
      default:
        return new Response('Not Found', { status: 404 });
    }
	},
} satisfies ExportedHandler<Env>;

async function getAllServices(request: Request): Promise<Response> {
	const servicesJson = await _env.KV_STORAGE.get('services');
	
	if (!servicesJson) {
		return asJsonResponse([]);
	}

	const services: Service[] = JSON.parse(servicesJson);

	return asJsonResponse(services);
}

async function getAllProjects(request: Request): Promise<Response> {
	return new Response(JSON.stringify({ projects: ['p1', 'p2', 'p3'] }), {
		headers: { 'Content-Type': 'application/json' },
	});
}

async function asJsonResponse<T>(data: T): Promise<Response> {
	return new Response(JSON.stringify(data), {
		headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': _env.LOCAL_ACCEPTED_ORIGIN,
       'Access-Control-Allow-Methods': 'POST, GET',
       },
	});
}


async function queryCommentsTable(env: Env) {
  try {
    // Execute SQL query to fetch all rows
    const query = 'SELECT * FROM service INNER JOIN service_package on service_package.service_id = service.id';
    const results = await env.DB.prepare(query).all();

    // Check and log results
    if (results.success) {
      console.log('Comments:', results.results);
    } else {
      console.error('Query failed:', results.error);
    }
  } catch (error) {
    console.error('Database error:', error);
  }
}
