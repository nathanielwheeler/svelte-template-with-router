<script>
	import Router from 'svelte-spa-router'
	import routes from './routes.js'
	import { count } from './stores/count.js'
</script>

<main>
	<Router {routes} />
</main>