<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Criar Nova Tarefa</h2>
      <router-link 
        to="/"
        class="px-4 py-2 border border-gray-300 bg-yellow-200 text-gray-700 rounded-md hover:bg-yellow-300 transition-colors"
      >
        Voltar
      </router-link>
    </div>
    
    <form @submit.prevent="submitTask" class="space-y-4">
      <!-- Campo Título -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">Título:</label>
        <input 
          type="text" 
          v-model="task.title"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p v-if="errors.title" class="text-sm text-red-600">
          {{ Array.isArray(errors.title) ? errors.title[0] : errors.title }}
        </p>
      </div>

      <!-- Campo Descrição -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">Descrição:</label>
        <textarea 
          v-model="task.description"
          rows="3"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
        <p v-if="errors.description" class="text-sm text-red-600">
          {{ Array.isArray(errors.description) ? errors.description[0] : errors.description }}
        </p>
      </div>

      <!-- Campo Status -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">Status:</label>
        <select 
          v-model="task.status"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="pending">Pendente</option>
          <option value="done">Concluído</option>
        </select>
        <p v-if="errors.status" class="text-sm text-red-600">
          {{ Array.isArray(errors.status) ? errors.status[0] : errors.status }}
        </p>
      </div>

      <!-- Erro genérico -->
      <p v-if="errors.generic" class="text-sm text-red-600">{{ errors.generic }}</p>

      <!-- Botão de submit -->
      <button 
        type="submit"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Salvar Tarefa
      </button>
    </form>
  </div>
</template>

<script setup>
import { useTaskForm } from '../composables/useTaskForm';

const { task, submitTask, errors } = useTaskForm();
</script>