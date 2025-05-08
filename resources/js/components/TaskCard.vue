<script setup>
import { useTaskStore } from '../stores/taskStores';

defineProps(['task']);
const store = useTaskStore();
</script>

<template>
  <div class="task-card">
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
    <p>Status: {{ task.status }}</p>
    <button @click="store.updateTask(task)">
      {{ task.status === 'pending' ? 'Marcar como Done' : 'Marcar como Pending' }}
    </button>
    <button @click="store.deleteTask(task.id)">Excluir</button>
  </div>
</template>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
}
</style>