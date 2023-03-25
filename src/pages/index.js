import {RouteNames} from '@/shared/constants/routes';
import AppRouting from './AppRouting.vue';
import {Catalog} from "./catalog";

export const routes = [
  {
    name: RouteNames.CATALOG,
    path: '/',
    component: Catalog,
  },
];

export {AppRouting};
