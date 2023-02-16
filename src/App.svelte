<script lang="ts">
  import Router from '@/components/Router.svelte';
  import Detail from '@/pages/Detail.svelte';
  import Home from '@/pages/Home.svelte';
  import Route from './components/Route.svelte';
  import NotFound from './pages/NotFound.svelte';
</script>

<Router>
  <Route path={'/'} element={Home} />
  <Route path={'/detail'} element={Detail} />
  <Route path={'*'} element={NotFound} />
</Router>
