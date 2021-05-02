/** @type {import('@sveltejs/kit').Config} */

const begin = require('@sveltejs/adapter-begin');

module.exports = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: begin(),
		target: '#svelte'
		
	}
};
