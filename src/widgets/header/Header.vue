<script>
import {Logo} from "@/shared/components/logo";


export default {
  name: 'Header',
  components: {Logo},
}
</script>

<template>
  <header class="header">
    <Logo/>
  </header>
</template>

<style lang="scss" scoped>
@import "./styles";
</style>
