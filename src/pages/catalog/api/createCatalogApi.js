import {requestImitation} from "@/shared/imitationApi/utils/requestImitation";
import {createCatalogRequest} from "@/shared/imitationApi/api/catalog";

export const createCatalogApi = async (catalogName) => {
  try {
    return await requestImitation(() => createCatalogRequest(catalogName));
  } catch (err) {
    throw new Error(err)
  }
}
