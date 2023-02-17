<script lang="ts">
  import {isMatch, isNotFound} from '@/lib/comparePath';
  import {getUrlParams, parsePath} from '@/lib/parsePath';
  import {currentPath, params, pathArr} from '@/store/path';
  import type {ComponentType} from 'svelte/internal';

  export let path: string;
  export let element: ComponentType;
  let _currentPath: string;
  let _pathArr: Array<string>;
  let _params;
  pathArr.subscribe((value) => (_pathArr = value));
  currentPath.subscribe((value) => (_currentPath = value));
  params.subscribe((value) => (_params = value));

  $: if (parsePath(path).params.length) {
    try {
      const parsedPath = parsePath(path);
      const paramsObj = getUrlParams(parsedPath, _currentPath);
      params.set(paramsObj);
    } catch (e) {
      params.set({});
    }
  }
</script>

<div id={path}>
  {#if isMatch(path, _currentPath)}
    <svelte:component this={element} />
  {/if}
  {#if isNotFound(_pathArr, _currentPath, path)}
    <svelte:component this={element} />
  {/if}
</div>
