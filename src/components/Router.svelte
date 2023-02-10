<script lang="ts">
  import {pagePath} from '@/store/path';

  const handlePopState = () => {
    pagePath.set(window.location.pathname);
  };

  window.addEventListener('popstate', handlePopState);
</script>

<slot />
