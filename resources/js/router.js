import { createRouter, createWebHistory } from 'vue-router';
import TaskList from './views/TaskList.vue';
import TaskForm from './views/TaskForm.vue';

const routes = [
    { path: '/', component: TaskList },
    { path: '/create-task', component: TaskForm },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;