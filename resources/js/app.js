import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import TaskList from './views/TaskList.vue';

const app = createApp(TaskList);
app.use(createPinia());
app.mount('#app'); 
