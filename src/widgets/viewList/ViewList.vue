<script>
import {
  ViewListSidebar,
  ViewListContent,
  ViewListModalCreateField,
  ViewListModalCreateCatalog
} from './components'
import {Modal} from '@/widgets/modal'
import {cloneDeep} from 'lodash';


export default {
  name: 'ViewList',
  emits: ["onSaveCatalogHandler", "onDeleteCatalogHandler"],
  components: {
    Modal,
    ViewListSidebar,
    ViewListContent,
    ViewListModalCreateCatalog,
    ViewListModalCreateField
  },
  props: {
    contentText: {
      type: Array,
      default: () => []
    },
    itemList: {
      type: Array,
      default: () => []
    },
    onCreateCatalogCallback: {
      type: Function,
      default: function () {
      }
    }
  },
  data() {
    return {
      selectedItem: null,
      isOpenModal: false,
      errorModal: false,
    }
  },
  methods: {
    selectCatalogHandler(item) {
      if (this.selectedItem?.id !== item.id) {
        this.selectedItem = cloneDeep(item);
      }
    },
    selectNewCatalogHandler() {
      this.selectedItem = null;
      this.isOpenModal = true;
    },
    addFieldHandler() {
      this.isOpenModal = true;
    },
    async createCatalogHandler(catalogName) {
      if (catalogName && !this.itemList.some(item => item.title === catalogName)) {
        try {
          await this.onCreateCatalogCallback(catalogName);
          this.isOpenModal = false;
        } catch (err) {
          this.errorModal = true
        }
      } else {
        this.errorModal = true
      }
    },
    saveCatalogHandler() {
      this.$emit('onSaveCatalogHandler', this.selectedItem)
    },
    deleteCatalogHandler(catalog) {
      this.selectedItem = null;
      this.isOpenModal = false;
      this.errorModal = false;
      this.$emit('onDeleteCatalogHandler', catalog);
    },
    saveFieldHandler(field) {
      if (field?.name?.length > 0 && field?.type) {
        if (!this.selectedItem.fields.some(item => item.name === field.name)) {
          this.selectedItem = {
            ...this.selectedItem,
            fields: [...this.selectedItem.fields, field]
          };
          this.isOpenModal = false;
          this.errorModal = false;
        } else {
          this.errorModal = true
        }
      } else {
        this.errorModal = true
      }
    },
    closeModalHandler() {
      this.isOpenModal = false;
      this.errorModal = false;
    },
    deleteFieldHandler(fieldName) {
      this.selectedItem = {
        ...this.selectedItem,
        fields: this.selectedItem.fields.filter(field => field.name !== fieldName)
      }
    },
    fieldOnChangeHandler(field) {
      if (this.selectedItem !== null) {
        this.selectedItem.fields.map(item => {
          if (item.name === field.name) {
            return item.value = field.value
          }
          return item
        })
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <Modal :isOpen="isOpenModal" @onCloseModalHandler="closeModalHandler">
      <template v-slot:modal-content>
        <ViewListModalCreateField
            v-if="selectedItem"
            :isError="errorModal"
            @onCloseModalHandler="closeModalHandler"
            @onSaveHandler="saveFieldHandler"
        />
        <ViewListModalCreateCatalog
            v-else
            :isError="errorModal"
            @onCloseModalHandler="closeModalHandler"
            @onSaveHandler="createCatalogHandler"
        />
      </template>
    </Modal>
    <ViewListSidebar
        :itemList="itemList"
        :actionSelect="selectCatalogHandler"
        @onCreateCatalogHandler="selectNewCatalogHandler"
        @onDeleteCatalogHandler="deleteCatalogHandler"
    />
    <template v-if="selectedItem">
      <div class="divide">
        <img :src="require('@/assets/icons/arrow.svg')">
      </div>
      <ViewListContent
          :selectedItemName="selectedItem.title"
          :selectedItemFields="selectedItem.fields"
          @onChangeFieldHandler="fieldOnChangeHandler"
          @onAddFieldHandler="addFieldHandler"
          @onDeleteFieldHandler="deleteFieldHandler"
          @onSaveCatalogHandler="saveCatalogHandler"
      />
    </template>
    <h3 class="h3 text-content" v-else>
      <p v-for="(text, i) in contentText" :key="text + i">
        {{ text }}
      </p>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
