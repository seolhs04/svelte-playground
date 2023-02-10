<script lang="ts">
  import {pagePath} from '@/store/path';

  export let routes;
  let currentPath;
  $: isExistRoute = routes.map((route) => route.path).includes(currentPath);
  let generalPage = routes.find((route) => route.path === '*')?.page;

  pagePath.subscribe((value) => (currentPath = value));
</script>

{#if !isExistRoute}
  {#if generalPage}
    <svelte:component this={generalPage} />
  {:else}<p>Not found</p>
  {/if}
{/if}

{#each routes as route}
  {#if currentPath === route.path}
    <svelte:component this={route.page} />
  {/if}
{/each}
