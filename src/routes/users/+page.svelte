<script lang="ts">
	import { Mail } from 'lucide-svelte';

	export let data;
</script>

<svelte:head>
	<title>Users list</title>
	<meta name="description" content="This is an example page for user listing" />
</svelte:head>

<h1>Users</h1>

<ul class="flex flex-wrap">
	{#each data?.props?.users as user, i (user.id)}
    {@const noMargin = i > 0 && i%5 === 0}
		<li class="w-[15.78%] mb-8" class:mr-0={noMargin} class:mr-4={!noMargin}>
			<div class="bg-white shadow-md rounded-lg overflow-hidden">
				<img
					class="w-full h-48 object-cover"
					src={user.image}
					alt={user.name}
				/>
				<div class="p-4">
					<h5 class="text-xl font-bold tracking-tight text-gray-900">
						{user.name}
					</h5>
					<p class="text-gray-700 mb-3">
						@{user.username}
					</p>
					<div class="flex items-center space-x-2">
						<Mail size={16}/>
						<span class="text-gray-500">
							{user.email}
						</span>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
