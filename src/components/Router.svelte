<script lang="ts">
  import {getPathListByElement} from '@/lib/path';
  import {currentPath, pathArr} from '@/store/path';

  const handlePopState = () => {
    currentPath.set(window.location.pathname);
  };
  window.addEventListener('popstate', handlePopState);

  let routerElement: HTMLDivElement;

  $: childrenArr = routerElement && Array.from(routerElement.children);
  $: if (childrenArr) pathArr.set(getPathListByElement(childrenArr));
</script>

<div bind:this={routerElement}>
  <slot />
</div>
