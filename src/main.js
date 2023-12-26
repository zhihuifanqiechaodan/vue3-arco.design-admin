import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/router/index';

const app = createApp(App);

app.use(createPinia()).use(router).mount('#app');
