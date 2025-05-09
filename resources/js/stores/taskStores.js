import { defineStore } from 'pinia';
import axios from 'axios';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
    }),

    actions: {
        async fetchTasks(status = '') {
            try {
                const response = await axios.get(`/api/tasks${status ? '?status=' + status : ''}`);
                console.log("Tarefas carregadas no Vue:", response.data);
                this.tasks = response.data; //Atualizando o estado
                console.log("Estado atualizado:", this.tasks);
            } catch (error) {
                console.error("🚨 Erro ao buscar tarefas:", error.response?.data || error.message);
            }
        },

        async addTask(task) {
            try {
                const response = await axios.post('/api/tasks', task);
                this.tasks.push(response.data); // Adicionando diretamente ao estado
            } catch (error) {
                console.error("Erro ao adicionar tarefa:", error.response?.data || error.message);
            }
        },

        async updateTask(task) {
            try {
                const response = await axios.put(`/api/tasks/${task.id}`, {
                    title: task.title,
                    status: task.status === 'pending' ? 'done' : 'pending'
                });
                this.tasks = this.tasks.map(t => t.id === task.id ? response.data : t);
            } catch (error) {
                console.error("Erro ao atualizar tarefa:", error.response?.data || error.message);
            }
        },

        async deleteTask(id) {
            try {
                await axios.delete(`/api/tasks/${id}`);
                this.tasks = this.tasks.filter(t => t.id !== id);
            } catch (error) {
                console.error("Erro ao excluir tarefa:", error.response?.data || error.message);
            }
        }
    }
});