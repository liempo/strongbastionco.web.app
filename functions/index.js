const functions = require('firebase-functions')

let sveltekitSSRServer
exports.sveltekitSSR = functions
	.region('us-central1')
	.https.onRequest(async (request, response) => {
		if (!sveltekitSSRServer) {
			functions.logger.info('Initialising SvelteKit SSR entry')
			sveltekitSSRServer = require('./sveltekitSSR/index').default
			functions.logger.info('SvelteKit SSR entry initialised!')
		}
		functions.logger.info('Requested resource: ' + request.originalUrl)
		return sveltekitSSRServer(request, response)
	})
