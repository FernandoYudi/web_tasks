import { defineStore } from 'pinia';
import axios from 'axios';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
    }),
    actions: {
        async fetchTasks(status = '') {
            const response = await axios.get(`/api/tasks${status ? '?status=' + status : ''}`);
            this.tasks = response.data;
        },

        async addTask(title) {
            await axios.post('/api/tasks', { title, status: 'pending' });
            this.fetchTasks();
        },

        async updateTask(task) {
            await axios.put(`/api/tasks/${task.id}`, { ...task, status: task.status === 'pending' ? 'done' : 'pending' });
            this.fetchTasks();
        },

        async deleteTask(id) {
            await axios.delete(`/api/tasks/${id}`);
            this.fetchTasks();
        }
    }
});