<script>
export default {
  name: 'ViewFieldHeader',
  emits: ['onDeleteField'],
  methods: {
    onDeleteHandler() {
      this.$emit('onDeleteField', this.name)
    }
  },
  props: {
    labelFor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },

}
</script>

<template>
  <div class="field-header__container">
    <legend class="field-header__label description" :for="labelFor">{{ name }}:</legend>
    <button class="field-header__delete-action" @click="onDeleteHandler">
      <img :src="require('@/assets/icons/reject.svg')">
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles";
</style>
