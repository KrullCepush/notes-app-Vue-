import VueRouter from "vue-router";
import {routes} from '@/pages';
import Vue from "vue";

Vue.use(VueRouter)

export const router = new VueRouter({
  routes
})
