<script>
import Vue from 'vue'
import vco from 'v-click-outside'

Vue.use(vco);
export default {
  name: "CircleOptionsList",
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
      default: "default",
    },
    styles: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleDisplay() {
      this.isOpen = !this.isOpen;
    },
    onClickOutside() {
      if (this.isOpen) {
        this.isOpen = false;
      }
    }
  },
}
</script>

<template>
  <div class="dropdown circle" v-click-outside="onClickOutside">
    <button class="circle__container" @click="toggleDisplay">
      <img class="circle__image" v-if="icon" :src="this.icon">
    </button>
    <div class="dropdown__navigation" v-if="this.isOpen">
      <ul>
        <li v-for="item in list" :key="item.name" class="dropdown__item" @click="item.action">
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './styles.scss';
</style>
