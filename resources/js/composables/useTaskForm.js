import { ref } from 'vue';
import { useTaskStore } from '../stores/taskStores';

export function useTaskForm() {
  const store = useTaskStore();
  const task = ref({ title: '', description: '', status: 'pending' });
  const errors = ref({});

  const submitTask = async () => {
    errors.value = {};
    
    // Validação frontend
    if (!task.value.title.trim()) {
      errors.value.title = 'O título é obrigatório';
      return;
    }

    try {
      await store.addTask({
        title: task.value.title.trim(),
        description: task.value.description.trim(),
        status: task.value.status
      });
      task.value = { title: '', description: '', status: 'pending' };
      alert("Tarefa adicionada com sucesso!");
    } catch (error) {
      if (error.response?.status === 422) {
        errors.value = { ...error.response.data.errors };
      } else {
        console.error("Erro:", error);
        errors.value.generic = 'Ocorreu um erro ao salvar a tarefa';
      }
    }
  };

  return { task, submitTask, errors };
}