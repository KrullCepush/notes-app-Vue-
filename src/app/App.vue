<script>
import {AppRouting} from '@/pages';
import {Header} from '@/widgets/header';

export default {
  name: 'App',
  components: {
    AppRouting,
    Header
  }
}
</script>

<template>
  <div id="app">
    <Header/>
    <main class="content">
      <AppRouting/>
    </main>
  </div>
</template>

<style scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  min-height: 0;
}

</style>
