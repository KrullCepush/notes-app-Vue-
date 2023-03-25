export const updateCatalogMutation = (state, catalogList) => {
  state.catalogList = catalogList;
  state.error = false;
  state.errorValue = null;
}

export const errorCatalogMutation = (state, error) => {
  state.error = true;
  state.errorValue = error;
}
