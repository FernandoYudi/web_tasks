<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Cabeçalho -->
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800 bg-gray-100 px-4 py-2 rounded-lg">
        Lista de Tarefas
      </h1>
      
      <div class="space-x-3">
        <router-link 
          to="/create-task"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Criar Nova Tarefa
        </router-link>
      </div>
    </div>

    <!-- Filtros -->
    <div class="flex space-x-4 mb-6">
      <button 
        @click="store.fetchTasks('done')"
        class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        Filtrar Concluídas
      </button>
      <button 
        @click="store.fetchTasks()"
        class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
      >
        Mostrar Todas
      </button>
    </div>

    <!-- Lista de Tarefas -->
    <div v-if="store.tasks.length" class="space-y-4">
      <TaskCard 
        v-for="task in store.tasks" 
        :key="task.id" 
        :task="task" 
        class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
      />
    </div>
    
    <!-- Mensagem quando não há tarefas -->
    <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
      <p class="text-gray-500">Nenhuma tarefa encontrada.</p>
      <p class="text-sm text-gray-400 mt-2">Verifique o console para mais informações.</p>
    </div>
  </div>
</template>

<script setup>
import TaskCard from '../components/TaskCard.vue';
import { useTasks } from '../composables/useTasks';

const { store } = useTasks();
</script>