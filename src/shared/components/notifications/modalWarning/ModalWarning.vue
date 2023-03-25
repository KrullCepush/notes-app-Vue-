<script>
export default {
  name: 'ModalWarning',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    icon() {
      return require('@/assets/icons/warning.svg')
    }
  }
}
</script>

<template>
  <div class="modal__container">
    <img class="modal__img" :src="icon">
    <div class="modal__text description">{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles";
</style>
