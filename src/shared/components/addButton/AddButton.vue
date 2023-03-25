<script>
export default {
  name: 'AddButton',
  emits: ['onClickEvent'],
  methods: {
    clickHandler() {
      this.$emit('onClickEvent');
    }
  }
}
</script>

<template>
  <button
      class="button-add"
      @click="clickHandler"
  >
    <img :src="require('@/assets/icons/add.svg')" alt="add +">
  </button>
</template>

<style scoped lang="scss">
@import "./styles";
</style>
