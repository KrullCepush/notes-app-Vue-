import {errorText} from "@/shared/constants/errors";

export const deleteCatalogRequest = (catalogId) => {
  if (!catalogId) {
    throw new Error(errorText.ERROR_OTHER)
  }

  const catalogList = JSON.parse(localStorage.catalogs);

  const changedCatalog = catalogList.filter(catalogItem => catalogItem.id !== catalogId);
  localStorage.catalogs = JSON.stringify(changedCatalog);

  return changedCatalog;
}
