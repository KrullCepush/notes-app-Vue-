<script>
import {AddButton} from "@/shared/components/addButton";
import {texts} from "@/shared/constants/texts";

export default {
  name: 'ViewListSidebar',
  emits: ['onCreateCatalogHandler', 'onDeleteCatalogHandler'],
  components: {
    AddButton
  },
  props: {
    actionSelect: {
      type: Function,
      default: () => {
      }
    },
    itemList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    itemListEmpty() {
      return !(this.itemList.length > 0);
    },
    emptyText() {
      return texts.TEXT_EMPTY;
    },
  },
  methods: {
    createCatalogHandler() {
      this.$emit('onCreateCatalogHandler')
    },
    deleteCatalogHandler(id) {
      this.$emit('onDeleteCatalogHandler', id)
    }
  }
}
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__empty description" v-if="itemListEmpty">
      {{ emptyText }}
    </div>
    <div class="sidebar__container" v-else>
      <button class="sidebar__item" v-for="item in itemList" :key="item.id" @click="actionSelect(item)">
        <div class="sidebar__item__title h3">
          <h3 class="sidebar__item__title_text">{{ item.title }}</h3>
        </div>
        <button class="sidebar__item__delete" @click.stop="deleteCatalogHandler(item.id)"/>
      </button>
    </div>
    <AddButton @onClickEvent="createCatalogHandler"/>
  </div>

</template>

<style lang="scss" scoped>
@import './styles';
</style>
