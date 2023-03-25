import {updateCatalogRequest} from "@/shared/imitationApi/api/catalog";
import {requestImitation} from "@/shared/imitationApi/utils/requestImitation";

export const updateCatalogApi = async (catalog) => {
  try {
    return await requestImitation(() => updateCatalogRequest(catalog));
  } catch (err) {
    throw new Error(err)
  }
};
