import { createApp } from 'vue';
import App from './App.vue';

import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = 'https://api.steinhq.com/v1/storages/61f180428d29ba2379165adb/';

import mixins from './mixins';
import router from './router';

// Setup Instalasi Vue
const app = createApp(App);
app.mixin(mixins);
app.use(router);
app.use(moshaToast);
app.use(VueAxios, axios);
app.mount('#app');
