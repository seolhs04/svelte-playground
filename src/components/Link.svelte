<script lang="ts">
  import {pagePath} from '../store/path';
  export let to;

  const handleClick = (e) => {
    e.preventDefault();
    pagePath.set(to);
    window.history.pushState('', '', to);
  };
</script>

<main>
  <a href={to} on:click={handleClick}>
    <slot />
  </a>
</main>
