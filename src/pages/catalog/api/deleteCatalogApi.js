import {deleteCatalogRequest} from "@/shared/imitationApi/api/catalog";
import {requestImitation} from "@/shared/imitationApi/utils/requestImitation";

export const deleteCatalogApi = async (catalogId) => {
  try {
    return await requestImitation(() => deleteCatalogRequest(catalogId));
  } catch (err) {
    throw new Error(err)
  }
};
