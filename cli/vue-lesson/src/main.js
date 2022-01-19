import Vue from 'vue';
import App from './App.vue';

// Global Component Registration
Vue.component('SearchBox', () => import('./components/SearchBox.vue'));

// Setup Instalasi Vue
Vue.createApp(App).mount('#app');
