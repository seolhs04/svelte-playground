<script lang="ts">
  import Detail from './pages/Detail.svelte';
  import Home from './pages/Home.svelte';
  import Router from './components/Router.svelte';
  import Route from './components/Route.svelte';
</script>

<Router>
  <Route path="/" element={Home} />
  <Route path="/detail" element={Detail} />
</Router>
