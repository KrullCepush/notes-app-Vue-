import {getCatalog, getCatalogList} from "./getters";
import {createCatalogAction, deleteCatalogAction, getCatalogListAction, updateCatalogAction} from "./actions";
import {errorCatalogMutation, updateCatalogMutation} from './mutations';

export const CatalogStore = {

  /*
  @PARAMS:
  catalogList: [
  {
    id: number,
    title: string,
    fields: [{
      name: string,
      value: /.../,
      type: /.../,
      /.../: /.../,
    }]
  },
  ];
  */

  state: () => ({
    catalogList: [],
    error: false,
    errorValue: null,
  }),
  mutations: {
    UPDATE_CATALOG: updateCatalogMutation,
    DELETE_CATALOG: updateCatalogMutation,
    CREATE_CATALOG: updateCatalogMutation,
    ERROR_CATALOG: errorCatalogMutation,
  },
  actions: {
    createCatalogAction,
    deleteCatalogAction,
    getCatalogListAction,
    updateCatalogAction,
  },
  getters: {
    getCatalog,
    getCatalogList
  }
}
