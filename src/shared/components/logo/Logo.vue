<script>
export default {
  name: 'Logo'
}
</script>

<template>
  <div class="logo">
    <img class="logo__image" :src="require('@/assets/icons/catalog.svg')">
    <h1 class="h1 logo__title">
      NotesApp
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles";
</style>
