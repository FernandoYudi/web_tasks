import { createRouter, createWebHistory } from 'vue-router';
import TaskList from './views/TaskList.vue';
import TaskForm from './views/TaskForm.vue';
import EditTask from './views/EditTask.vue';

const routes = [
    { path: '/', component: TaskList },
    { path: '/create-task', component: TaskForm },
    {
        path: '/tasks/:id/edit',
        name: 'edit-task',
        component: EditTask,
        props: true
      }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;