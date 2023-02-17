<script lang="ts">
  import {params} from '@/store/path';
  let _params;
  params.subscribe((value) => (_params = value));
</script>

<h1>dynamic</h1>
<h3>{_params.test}</h3>
