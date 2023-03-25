<script>
import {mapState, mapActions} from 'vuex'
import {ViewList} from "@/widgets/viewList";
import {texts} from "@/pages/catalog/constants";
import {createCatalogApi} from "@/pages/catalog/api/createCatalogApi";

export default {
  name: 'Catalog',
  components: {ViewList},
  computed: {
    ...mapState({
      catalogList: state => state.catalog.catalogList,
      error: state => state.catalog.error,
      errorValue: state => state.catalog.errorValue,
    }),
    headerText() {
      return this.catalogList.length > 0 ? texts.CATALOG_HEADER : texts.ACTION_TEXT
    },
  },
  methods: {
    ...mapActions([
      'getCatalogListAction',
      "createCatalogAction",
      "updateCatalogAction",
      "deleteCatalogAction",
    ]),
    async createCatalogHandler(catalogName) {
      try {
        const catalogReq = await createCatalogApi(catalogName);
        this.createCatalogAction(catalogReq);
      } catch (err) {
        throw new Error(err)
      }
    },
    saveCatalogHandler(catalog) {
      this.updateCatalogAction(catalog);
    },
    deleteCatalogHandler(catalogId) {
      this.deleteCatalogAction(catalogId)
    }
  },
  async mounted() {
    await this.getCatalogListAction();
  },
}
</script>

<template>
  <div class="catalog">
    <ViewList
        :onCreateCatalogCallback="createCatalogHandler"
        :contentText="headerText"
        :itemList="catalogList"
        @onSaveCatalogHandler="saveCatalogHandler"
        @onDeleteCatalogHandler="deleteCatalogHandler"
    />
  </div>
</template>

<style scoped lang="scss">
.catalog {
  height: 100%;
  padding: var(--spacing-xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
