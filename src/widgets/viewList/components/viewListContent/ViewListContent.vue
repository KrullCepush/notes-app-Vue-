<script>
import {templateFields} from "@/shared/constants/templateFields";
import {AddButton} from '@/shared/components/addButton';

import {
  FieldTextAreaTemplate,
  FieldInputTemplate
} from './fieldTemplates'

export default {
  name: 'ViewListContent',
  emits: [
    'onAddFieldHandler',
    'onChangeFieldHandler',
    'onDeleteFieldHandler',
    'onSaveCatalogHandler',
  ],
  components: {
    FieldTextAreaTemplate,
    FieldInputTemplate,
    AddButton
  },
  methods: {
    addFieldHandler(field) {
      this.$emit('onAddFieldHandler', field)
    },
    typeTextarea(type) {
      return type === templateFields.TEXT_AREA;
    },
    typeInput(type) {
      return type === templateFields.INPUT
    },
    changeFieldHandler(field) {
      this.$emit('onChangeFieldHandler', field)
    },
    deleteFieldHandler(nameField) {
      this.$emit('onDeleteFieldHandler', nameField)
    },
    saveCatalogHandler() {
      this.$emit('onSaveCatalogHandler')
    }
  },
  props: {
    selectedItemName: {
      type: String,
      default: '',
    },
    selectedItemFields: {
      type: Array,
      default: () => []
    }
  },

}
</script>

<template>
  <div class="content">
    <div class="content__header">
      <div class="content__header__title description">{{selectedItemName}}</div>
      <button class="content__header__save" @click="saveCatalogHandler"/>
    </div>
    <div class="content__container">
      <div class="content__item" v-for="item in selectedItemFields" :key="item.name">
        <FieldTextAreaTemplate
            v-if="typeTextarea(item.type)"
            :value="item.value"
            :name="item.name"
            @onChangeEvent="changeFieldHandler"
            @onDeleteField="deleteFieldHandler"
        />
        <FieldInputTemplate
            v-if="typeInput(item.type)"
            :value="item.value"
            :name="item.name"
            @onChangeEvent="changeFieldHandler"
            @onDeleteField="deleteFieldHandler"
        />
      </div>
    </div>
    <AddButton @onClickEvent="addFieldHandler"/>
  </div>
</template>

<style lang="scss" scoped>
@import 'styles';
</style>
