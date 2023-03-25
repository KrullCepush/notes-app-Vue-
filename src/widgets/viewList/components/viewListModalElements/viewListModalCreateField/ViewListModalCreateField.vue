<script>
import {templateFields} from '@/shared/constants/templateFields'
import {ModalError} from '@/widgets/modal/modalTemplates'
import {errorText} from "@/shared/constants/errors";

export default {
  name: 'ViewListModalCreateField',
  emits: ['onCloseModalHandler', 'onSaveHandler'],
  components: {
    ModalError
  },
  data() {
    return {
      type: null,
      name: '',
    }
  },
  props: {
    isError: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    switchType(event) {
      this.type = event.target.value;
    },
    changeName(event) {
      this.name = event.target.value;
    },
    closeModalHandler() {
      this.$emit('onCloseModalHandler');
    },
    saveFieldHandler() {
      this.$emit('onSaveHandler', {
        type: this.type,
        name: this.name,
        value: ''
      })
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
          <legend class="modal-body__legend" for="input-modal-name">name field:</legend>
          <input class="modal-body__interaction description" @change="changeName($event)" :value="name"
                 id="input-modal-name" type="text">
        </div>
      </div>
      <div class="modal-body__type-field">
        <div class="modal-body__fieldset">
          <legend class="modal-body__legend" for="input-modal-name">select field type:</legend>
          <select class="modal-body__interaction description" :value="this.type" @change="switchType($event)">
            <option disabled value="">Please select one</option>
            <option v-for="option in optionsSelect" :value="option.value" :key="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div v-if="isError">
      <ModalError :text="errorText"/>
    </div>
    <div class="modal-body__buttons-container">
      <button
          class="modal-body__buttons-container__btn modal-body__buttons-container__btn_reject"
          @click="saveFieldHandler"
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
