<script setup>
import { onMounted } from 'vue';
import { useTaskStore } from '../stores/taskStores';
import TaskCard from '../components/TaskCard.vue';

const store = useTaskStore();

onMounted(() => {
    store.fetchTasks(); // Carregar as tarefas ao iniciar
});
</script>

<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <button @click="store.fetchTasks('done')">Filtrar Concluídas</button>
    <button @click="store.fetchTasks()">Mostrar Todas</button>
    
    <div v-if="store.tasks.length">
      <TaskCard v-for="task in store.tasks" :key="task.id" :task="task" />
    </div>
    <p v-else>Nenhuma tarefa encontrada.</p>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
}
</style>