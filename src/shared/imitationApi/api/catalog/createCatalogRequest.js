// {
//   id: number,    !unique
//   title: string, !unique
//   fields: [
//   {
//     name: string,
//     type: string,
//     value: string,
//    },
//   ]
// }
import {v4 as uuidv4} from 'uuid';
import {errorText} from "@/shared/constants/errors";

export const createCatalogRequest = (catalogName) => {
  if (!catalogName || typeof catalogName !== "string") {
    throw new Error(errorText.ERROR_TITLE)
  }

  const catalogList = JSON.parse(localStorage.catalogs);
  const titlePresence = catalogList.some(catalog => catalog.title === catalogName);

  if (titlePresence) {
    throw new Error(errorText.ERROR_TITLE_TAKEN)
  }

  const newCatalog = {
    title: catalogName,
    id: uuidv4(),
    fields: []
  }

  localStorage.catalogs = JSON.stringify([...catalogList, newCatalog]);

  return newCatalog;
}
