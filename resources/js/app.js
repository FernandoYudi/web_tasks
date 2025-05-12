import '../css/app.css'
// import Swal from 'sweetalert2'
// import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './views/App.vue'; //Componente index

const app = createApp(App);
app.use(createPinia());
app.use(router); //Vue Router
// app.use(VueSweetalert2);
app.mount('#app'); //Montando na div id app
router.replace('/');