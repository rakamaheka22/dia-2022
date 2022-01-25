import { createApp } from 'vue';
import App from './App.vue';

import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

import mixins from './mixins';

// Setup Instalasi Vue
const app = createApp(App);
app.mixin(mixins);
app.use(moshaToast);
app.mount('#app');
