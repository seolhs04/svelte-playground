<script lang="ts">
  import {pagePath, routePathArr} from '@/store/path';

  const handlePopState = () => {
    pagePath.set(window.location.pathname);
  };
  window.addEventListener('popstate', handlePopState);

  let routerElement: HTMLDivElement;
  $: childrenArr = routerElement && Array.from(routerElement.children);
  $: if (childrenArr) routePathArr.set(getPathList(childrenArr));

  const getPathList = (childrenList) => {
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
