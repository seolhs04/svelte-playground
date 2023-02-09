<script>
  import {pagePath} from '@/store/path';
  export let path;
  export let element;

  let currentPath;
  pagePath.subscribe((value) => (currentPath = value));
</script>

<main>
  {#if currentPath === path}
    <svelte:component this={element} />
  {/if}
</main>
