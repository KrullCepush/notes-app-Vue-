<script>
import {templateFields} from '@/shared/constants/templateFields'
import {ModalError} from '@/widgets/modal/modalTemplates'
import {errorText} from "@/shared/constants/errors";

export default {
  name: 'ViewListModalCreateCatalog',
  emits: ['onCloseModalHandler', 'onSaveHandler'],
  components: {
    ModalError
  },
  data() {
    return {
      title: '',
    }
  },
  props: {
    isError: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeTitle(event) {
      this.title = event.target.value;
    },
    closeModalHandler() {
      this.$emit('onCloseModalHandler');
    },
    saveCatalog() {
      this.$emit('onSaveHandler', this.title)
    }
  },
  computed: {
    errorText() {
      return errorText.ERROR_TITLE_TAKEN
    },
    optionsSelect() {
      return Object.keys(templateFields).map(field => ({text: field, value: templateFields[field]}))
    }
  },
}
</script>

<template>
  <div class="modal-body">
    <div class="modal-body__container">
      <div class="modal-body__name-field">
        <div class="modal-body__fieldset">
          <legend
              class="modal-body__legend"
              for="input-modal-name">
            Catalog Title
          </legend>
          <input
              class="modal-body__interaction description"
              @change="changeTitle($event)"
              :value="title"
              id="input-modal-name"
              type="text"
          />
        </div>
      </div>
    </div>
    <div v-if="isError">
      <ModalError :text="errorText"/>
    </div>
    <div class="modal-body__buttons-container">
      <button
          class="modal-body__buttons-container__btn modal-body__buttons-container__btn_reject"
          @click="saveCatalog"
      />
      <button
          class="modal-body__buttons-container__btn modal-body__buttons-container__btn_apply"
          @click="closeModalHandler"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles";
</style>
