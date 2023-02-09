<script lang="ts">
  import {pagePath} from '@/store/path';

  const handleOnpopstate = (event: PopStateEvent) => {
    pagePath.set(event.state?.path || '/');
  };

  window.addEventListener('popstate', handleOnpopstate);
</script>

<slot />
