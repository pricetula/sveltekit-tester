<script>
	import { page } from '$app/stores';
	import '../app.css';

	const routes = [
		{ name: 'Home', href: '/' },
		{ name: 'Users', href: '/users' },
		{ name: 'Todos', href: '/todos' },
		{ name: 'Posts', href: '/posts' },
		{ name: 'Photos', href: '/photos' },
		{ name: 'Comments', href: '/comments' },
		{ name: 'Albums', href: '/albums' }
	];

	$: routeId = $page?.route?.id;
</script>

<main>
	<nav class="flex justify-center items-center gap-4 text-blue-500 bg-blue-50 h-[50px]">
		{#each routes as route (route.name)}
			<a
				href={route.href}
				class="hover:text-blue-700"
				class:text-violet-700={(routeId && routeId !== '/' && route.href.includes(routeId)) ||
					(routeId === '/' && route.name === 'Home')}>{route.name}</a
			>
		{/each}
	</nav>

	<div class="container mx-auto px-4">
		<slot />
	</div>
</main>
