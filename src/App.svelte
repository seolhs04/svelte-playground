<script lang="ts">
  import Router from '@/components/Router.svelte';
  import Detail from '@/pages/Detail.svelte';
  import Home from '@/pages/Home.svelte';
  import Route from './components/Route.svelte';
  import NotFound from './pages/NotFound.svelte';
  import Dynamic from './pages/Dynamic.svelte';
</script>

<Router>
  <Route path={'/'} element={Home} />
  <Route path={'/detail'} element={Detail} />
  <Route path={'/dynamic/:test'} element={Dynamic} />
  <Route path={'*'} element={NotFound} />
</Router>
