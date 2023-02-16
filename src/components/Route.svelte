<script>
  import {pagePath, routePathArr} from '@/store/path';
  export let path;
  export let element;

  let currentPath;
  let routeList;
  const isGeneralPath = path === '*';
  $: isIncludePathList = routeList.find((item) => item === currentPath);

  routePathArr.subscribe((value) => (routeList = value));
  pagePath.subscribe((value) => (currentPath = value));
</script>

<div id={path}>
  {#if path === currentPath}
    <svelte:component this={element} />
  {/if}
</div>

{#if isGeneralPath && !isIncludePathList}
  <h1>not found</h1>
{/if}
