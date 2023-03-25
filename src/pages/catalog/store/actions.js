import {
  deleteCatalogApi,
  getCatalogApi,
  updateCatalogApi
} from "@/pages/catalog/api";

export const getCatalogListAction = async ({commit}) => {
  try {
    const catalogList = await getCatalogApi();
    commit('UPDATE_CATALOG', catalogList)
  } catch (error) {
    commit('ERROR_CATALOG', error)
  }
}

export const createCatalogAction = ({commit, state}, newCatalog) => {
  const catalogList = state.catalogList;
  commit('CREATE_CATALOG', [...catalogList, newCatalog]);
};

export const updateCatalogAction = async ({commit, state}, updateCatalog) => {
  try {
    const catalogList = state.catalogList;
    const changedCatalog = await updateCatalogApi(updateCatalog);

    const changedCatalogList = catalogList.map(catalogItem => {
      if (catalogItem.id === changedCatalog.id) {
        return changedCatalog
      }

      return catalogItem;
    })

    commit('UPDATE_CATALOG', changedCatalogList)
  } catch (err) {
    commit('ERROR_CATALOG', err)
  }
}

export const deleteCatalogAction = async ({commit}, catalogId) => {
  try {
    const changedCatalog = await deleteCatalogApi(catalogId);

    commit('DELETE_CATALOG', changedCatalog);
  } catch (err) {
    commit('ERROR_CATALOG', err)
  }
};
