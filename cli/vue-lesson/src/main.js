import { createApp } from 'vue';
import App from './App.vue';

import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

import mixins from './mixins';
import router from './router';
import store from './store';

import './firebase';

// Setup Instalasi Vue
const app = createApp(App);
app.mixin(mixins);
app.use(store);
app.use(router);
app.use(moshaToast);
app.use(VueAxios, axios);
app.mount('#app');
