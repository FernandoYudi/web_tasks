<template>
  <div>
    <h1>Lista de Tarefas</h1>
    <router-link to="/create-task">
      <button>Criar Nova Tarefa</button>
    </router-link>
    <button @click="store.fetchTasks('done')">Filtrar Concluídas</button>
    <button @click="store.fetchTasks()">Mostrar Todas</button>

    <div v-if="store.tasks.length">
      <TaskCard v-for="task in store.tasks" :key="task.id" :task="task" />
    </div>
    <p v-else>Tarefas não carregadas. Verifique o console!</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTaskStore } from '../stores/taskStores'; 
import TaskCard from '../components/TaskCard.vue';

const store = useTaskStore();

onMounted(() => {
    // console.log("fetchTasks()");
    store.fetchTasks();
});
</script>