<template>
  <div class="border border-gray-200 rounded-lg p-4 mb-3 bg-white shadow-sm hover:shadow-md transition-shadow">
    <div class="flex justify-between items-start mb-2">
      <h3 class="text-lg font-semibold text-gray-800">{{ task.title }}</h3>
      <span 
        :class="{
          'bg-green-100 text-green-800': task.status === 'done',
          'bg-yellow-100 text-yellow-800': task.status === 'pending'
        }"
        class="px-2 py-1 rounded-full text-xs font-medium"
      >
        {{ task.status === 'done' ? 'Concluído' : 'Pendente' }}
      </span>
    </div>
    
    <p class="text-gray-600 mb-4">{{ task.description }}</p>
    
    <div class="flex space-x-2">
      <button
        @click="store.updateTask(task)"
        :class="{
          'bg-green-600 hover:bg-green-700': task.status === 'pending',
          'bg-yellow-600 hover:bg-yellow-700': task.status === 'done'
        }"
        class="px-3 py-1 text-white rounded-md text-sm transition-colors"
      >
        {{ task.status === 'pending' ? '✓ Concluir' : '↻ Reabrir' }}
      </button>
      
      <button
        @click="store.deleteTask(task.id)"
        class="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors"
      >
        Excluir
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStores';

defineProps(['task']);
const store = useTaskStore();
</script>