import { createApp } from 'vue';
import App from './App.vue';
import SearchBox from './components/SearchBox.vue';

// Setup Instalasi Vue
const app = createApp(App);

// Global Component Registration
app.component('search-box', SearchBox);

app.mount('#app');
