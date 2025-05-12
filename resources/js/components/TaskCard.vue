<template>
  <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div>
      <h3 class="font-medium text-gray-800">{{ task.title }}</h3>
      <p class="text-sm text-gray-500">{{ task.description }}</p>
    </div>
    
    <div class="flex items-center space-x-2">
      <span :class="statusClass" class="px-3 py-1 rounded-full text-xs font-medium">
        {{ task.status === 'done' ? 'Concluído' : 'Pendente' }}
      </span>
      
      <button
        @click="toggleStatus"
        :class="statusButtonClass"
        class="px-3 py-1 text-white rounded-md text-sm transition-colors"
      >
        {{ task.status === 'pending' ? '✓' : '↻' }}
      </button>
      
      <router-link 
        :to="`/tasks/${task.id}/edit`"
        class="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded-md text-sm transition-colors"
      >
        Editar
      </router-link>
      
      <button
        @click="deleteTask"
        class="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors"
      >
        Excluir
      </button>
    </div>
  </div>
</template>

<script setup>
import { toRef } from 'vue';
import { useTaskCard } from '../composables/useTaskCard';

const props = defineProps(['task']);
const taskRef = toRef(props, 'task');

const { 
  statusClass, 
  statusButtonClass, 
  toggleStatus, 
  deleteTask 
} = useTaskCard(taskRef);
</script>