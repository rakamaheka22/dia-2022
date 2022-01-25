import { createApp } from 'vue';
import App from './App.vue';

import mixins from './mixins';

// Setup Instalasi Vue
const app = createApp(App);
app.mixin(mixins);
app.mount('#app');
