<template>
  <div>
    <h2>Criar Nova Tarefa</h2>
    <form @submit.prevent="submitTask">
      <label>Título:</label>
      <input type="text" v-model="task.title" />

      <label>Descrição:</label>
      <textarea v-model="task.description"></textarea>

      <label>Status:</label>
      <select v-model="task.status">
        <option value="pending">Pendente</option>
        <option value="done">Concluído</option>
      </select>

      <button type="submit">Salvar Tarefa</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/taskStores';

const store = useTaskStore();
const task = ref({ title: '', description: '', status: 'pending' });

const submitTask = async () => {
  await store.addTask(task.value);
  task.value = { title: '', description: '', status: 'pending' }; // Resetar formulário
};
</script>

<style scoped>
div {
  max-width: 400px;
  margin: auto;
}
button {
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #2980b9;
}
</style>