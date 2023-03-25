<script>
import {ViewFieldHeader} from './viewFieldHeader'

export default {
  name: 'FieldTextAreaTemplates',
  components: {
    ViewFieldHeader
  },
  emits: ['onChangeEvent', 'onDeleteField'],
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
  },
  methods: {
    onDeleteField(name) {
      this.$emit('onDeleteField', name)
    }
  },
  computed: {
    inputProp: {
      get: function () {
        return this.value;
      },
      set: function (value) {
        this.$emit('onChangeEvent', {value, name: this.name})
      }
    },
    idInput() {
      return `inputField-${this.name}`
    }
  }
}
</script>

<template>
  <fieldset class="field">
    <ViewFieldHeader :labelFor="idInput" :name="name" @onDeleteField="onDeleteField"/>
    <textarea
        rows="10"
        :id="idInput"
        class="field__text-area description"
        v-model="inputProp"
        type="text"
        autocomplete="off"
    />
  </fieldset>
</template>

<style lang="scss" scoped>
.field {
  border-radius: 8px;
  padding: var(--spacing-lg);
  box-sizing: border-box;

  &__text-area {
    width: 100%;
    border: 1px solid var(--color-text);
    border-radius: 8px;
    padding: var(--spacing);
    box-sizing: border-box;
    background-color: var(--background-color_inverse);
    color: var(--color-text);
    resize: none;

    &:focus {
      background-color: var(--color-text);
      color: var(--background-color);
    }
  }
}
</style>
