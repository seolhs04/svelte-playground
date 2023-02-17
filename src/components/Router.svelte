<script lang="ts">
  import {currentPath, pathArr} from '@/store/path';

  const handlePopState = () => {
    currentPath.set(window.location.pathname);
  };
  window.addEventListener('popstate', handlePopState);

  let routerElement: HTMLDivElement;
  $: childrenArr = routerElement && Array.from(routerElement.children);
  $: if (childrenArr) pathArr.set(getPathList(childrenArr));

  const getPathList = (childrenList: Array<Element>) => {
    const list = childrenList.reduce((a, c) => {
      if (c.id !== '*') a.push(c.id);
      return a;
    }, []);
    return list;
  };
</script>

<div bind:this={routerElement}>
  <slot />
</div>
