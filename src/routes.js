import Home from './views/Home.svelte';
import NotFound from './views/NotFound.svelte'

const routes = {
	'/': Home,

	// Must be included last
	'/*': NotFound



	// Using named parameters, with last being optional
	//'/author/:first/:last?': Author,

	// Wildcard parameter
	//'/book/*': Book,
}
export default routes