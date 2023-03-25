import Vue from 'vue';
import {router} from "@/app/providers";
import {store} from '@/app/store'
import {switchTheme} from "@/shared/utils/switchTheme";

import App from './app/App.vue';

import '@/assets/theme/dark-theme.scss';
import '@/app/styles/styles.css';

new Vue({
  render: h => h(App),
  store,
  router,
  mounted() {
    switchTheme('theme-dark');

    if (!localStorage.catalogs) {
      localStorage.setItem('catalogs', "[]");
    }
  }
}).$mount('#app')

