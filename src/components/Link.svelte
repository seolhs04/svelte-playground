<script lang="ts">
  import {navigation} from '@/lib/navigation';
  export let to: string;

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    navigation(to);
  };
</script>

<main>
  <a href={to} on:click={handleClick}>
    <slot />
  </a>
</main>
