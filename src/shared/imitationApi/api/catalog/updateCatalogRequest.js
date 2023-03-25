import {errorText} from "@/shared/constants/errors";

export const updateCatalogRequest = (catalog) => {
  if (!catalog?.title || !catalog?.id) {
    throw new Error(errorText.ERROR_OTHER)
  }

  const catalogList = JSON.parse(localStorage.catalogs);

  const changedCatalog = catalogList.map(catalogItem => {
    if (catalogItem.id === catalog.id) {
      return catalog
    }

    return catalogItem
  })

  localStorage.catalogs = JSON.stringify(changedCatalog);

  return catalog
}
