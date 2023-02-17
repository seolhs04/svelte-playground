<script lang="ts">
  import {currentPath, pathArr} from '@/store/path';
  import type {ComponentType} from 'svelte/internal';
  export let path: string;
  export let element: ComponentType;

  let _currentPath: string;
  let _pathArr: Array<string>;
  const isGeneralPath = path === '*';
  $: isIncludePathList = _pathArr.find((item) => item === _currentPath);

  pathArr.subscribe((value) => (_pathArr = value));
  currentPath.subscribe((value) => (_currentPath = value));
</script>

<!-- normal page -->
<div id={path}>
  {#if path === _currentPath}
    <svelte:component this={element} />
  {/if}
</div>

<!-- general path page -->
{#if isGeneralPath && !isIncludePathList}
  <svelte:component this={element} />
{/if}
