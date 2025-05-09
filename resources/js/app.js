import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './views/App.vue'; //Componente index

const app = createApp(App);
app.use(createPinia());
app.use(router); //Vue Router
app.mount('#app'); //Montando na div id app
router.replace('/');