<script>
	import '../app.css';
</script>

<main>
	<nav>
		<a href="/">Home</a>
		<a href="/users">Users</a>
		<a href="/todos">Todos</a>
		<a href="/posts">Posts</a>
		<a href="/photos">Photos</a>
		<a href="/comments">Comments</a>
		<a href="/albums">Albums</a>
	</nav>

	<div class="container mx-auto px-4">
		<slot />
	</div>
</main>
