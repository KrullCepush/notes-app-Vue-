<script>
import Vue from "vue";
import vco from "v-click-outside";

import {Logo} from '@/shared/components/logo';

Vue.use(vco);

export default {
  name: 'Modal',
  emits: ['onCloseModalHandler'],
  components: {
    Logo
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    allowClose: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    closeModalHandler() {
      this.$emit('onCloseModalHandler');
    }
  },
  computed: {
    closeImage() {
      return require('@/assets/icons/reject.svg');
    },
  },
}

</script>

<template>
  <div class="modal" v-if="isOpen">
    <div class="modal__background">
      <div class="modal__container" v-click-outside="closeModalHandler">
        <div class="modal__header">
          <Logo/>
          <button v-if="allowClose" class="modal__close" @click="closeModalHandler">
            <img class="modal__close__image" :src="closeImage" alt="X">
          </button>
        </div>
        <slot name="modal-content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles";
</style>
