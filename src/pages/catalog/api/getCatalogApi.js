import {requestImitation} from "@/shared/imitationApi/utils/requestImitation";
import {getCatalogRequest} from "@/shared/imitationApi/api/catalog";

export const getCatalogApi = async () => {
  try {
    return await requestImitation(getCatalogRequest);
  } catch (err) {
    throw new Error(err)
  }
}
