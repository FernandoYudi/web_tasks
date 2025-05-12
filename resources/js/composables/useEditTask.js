import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTaskStore } from '../stores/taskStores';

export function useEditTask() {
  const route = useRoute();
  const router = useRouter();
  const store = useTaskStore();

  const task = ref({
    id: null,
    title: '',
    description: '',
    status: 'pending'
  });

  const errors = ref({});
  const isSubmitting = ref(false);
  const isLoading = ref(true);

  const validateForm = () => {
    errors.value = {};
    let isValid = true;

    if (!task.value.title.trim()) {
      errors.value.title = 'O título é obrigatório';
      isValid = false;
    }

    if (task.value.title.length > 255) {
      errors.value.title = 'O título não pode ter mais de 255 caracteres';
      isValid = false;
    }

    if (!['pending', 'done'].includes(task.value.status)) {
      errors.value.status = 'Status inválido';
      isValid = false;
    }

    return isValid;
  };

  onMounted(async () => {
    try {
      const taskId = route.params.id;
      if (!taskId) throw new Error('ID da tarefa não fornecido');
      
      const taskData = await store.getTaskById(taskId);
      
      if (!taskData || typeof taskData !== 'object') {
        throw new Error('Resposta inválida do servidor');
      }
      
      task.value = {
        id: taskData.id,
        title: taskData.title || '',
        description: taskData.description || '',
        status: taskData.status || 'pending'
      };
      
    } catch (error) {
      console.error("Erro ao carregar tarefa:", error);
      errors.value.generic = error.message;
      
      if (error.message.includes('HTML')) {
        errors.value.generic = 'Erro de comunicação com o servidor';
      } else if (error.response?.status === 404) {
        router.push('/not-found');
      }
    } finally {
      isLoading.value = false;
    }
  });

  const submitForm = async () => {
    // Validação frontend antes de enviar
    if (!validateForm()) return;

    isSubmitting.value = true;
    errors.value = {};
    
    try {
      if (!task.value.id) {
        throw new Error('ID da tarefa inválido');
      }
      
      await store.updateTask({
        id: task.value.id,
        title: task.value.title.trim(),
        description: task.value.description.trim(),
        status: task.value.status
      });
      
      router.push('/');
      
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      
      if (error.response) {
        if (error.response.status === 422) {
          errors.value = { ...errors.value, ...error.response.data.errors };
        } else {
          errors.value.generic = error.response.data?.message || 'Erro ao atualizar tarefa';
        }
      } else {
        errors.value.generic = error.message || 'Erro ao atualizar tarefa';
      }
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    task,
    errors,
    isSubmitting,
    isLoading,
    submitForm
  };
}