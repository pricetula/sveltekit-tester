<script lang="ts">
    export let data;
</script>

<h1>Users</h1>

<ul>
    {#each data?.props?.users as user (user.id)}
        <li>{user.name}</li>
    {/each}
</ul>