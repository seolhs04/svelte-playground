<script lang="ts">
  import Router from '@/components/Router.svelte';
  import Detail from '@/pages/Detail.svelte';
  import Home from '@/pages/Home.svelte';
  import NotFound from '@/pages/NotFound.svelte';
  import Routes from './components/Routes.svelte';

  const routes = [
    {path: '/', page: Home},
    {path: '/detail', page: Detail},
    {path: '*', page: NotFound},
  ];
</script>

<Router>
  <Routes routes={routes} />
</Router>
