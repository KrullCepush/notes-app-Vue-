export const getCatalog = (state) => (id) => {
  return state.catalogList.find(catalog => catalog.id === id) || null;
}

export const getCatalogList = state => {
  return state
}
