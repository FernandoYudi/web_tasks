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
                // console.log("Tarefas carregadas no Vue:", response.data);
                this.tasks = response.data; //Atualizando o estado
                // console.log("Estado atualizado:", this.tasks);
            } catch (error) {
                console.error("Erro ao buscar tarefas:", error.response?.data || error.message);
            }
        },

        async getTaskById(id) {
        this.isLoading = true
        this.error = null
        try {
            const response = await axios.get(`/api/tasks/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            transformResponse: [function (data) {
                if (typeof data === 'string' && data.includes('<!DOCTYPE html>')) {
                throw new Error('Servidor retornou HTML em vez de JSON')
                }
                return JSON.parse(data)
            }]
            })
            return response.data
        } catch (error) {
            console.error("Erro ao buscar tarefa:", error)
            if (error.response?.status === 404) {
            throw new Error('Tarefa não encontrada')
            }
            throw error
        } finally {
            this.isLoading = false
        }
        },

        async updateTask(task) {
        this.isLoading = true
        this.error = null
        try {
            const response = await axios.put(`/api/tasks/${task.id}`, task, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            // Atualiza a lista local
            this.tasks = this.tasks.map(t => 
            t.id === task.id ? response.data : t
            )
            return response.data
        } catch (error) {
            console.error("Erro ao atualizar tarefa:", error)
            if (error.response?.status === 422) {
            throw error // Para ser tratado no formulário
            }
            throw error
        } finally {
            this.isLoading = false
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

        async toggleTaskStatus(task) {
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

        async updateTask(task) {
            try {
                const response = await axios.put(`/api/tasks/${task.id}`, {
                    title: task.title,
                    description: task.description,
                    status: task.status
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                
                this.tasks = this.tasks.map(t => t.id === task.id ? response.data : t);
                return response.data;
            } catch (error) {
                console.error("Erro ao atualizar tarefa:", error);
                throw error;
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