import { computed } from 'vue';
import { useTaskStore } from '../stores/taskStores';

export function useTaskCard(task) {
  const store = useTaskStore();

  const statusClass = computed(() => ({
    'bg-green-100 text-green-800': task.value.status === 'done',
    'bg-yellow-100 text-yellow-800': task.value.status === 'pending'
  }));

  const statusButtonClass = computed(() => ({
    'bg-green-600 hover:bg-green-700': task.value.status === 'pending',
    'bg-yellow-600 hover:bg-yellow-700': task.value.status === 'done'
  }));

  const toggleStatus = async () => {
    try {
      await store.toggleTaskStatus(task.value);
    } catch (error) {
      console.error("Falha ao alterar status:", error);
    }
  };

  const deleteTask = async () => {
    try {
      await store.deleteTask(task.value.id);
    } catch (error) {
      console.error("Falha ao excluir tarefa:", error);
    }
  };

  return {
    statusClass,
    statusButtonClass,
    toggleStatus,
    deleteTask,
    store
  };
}