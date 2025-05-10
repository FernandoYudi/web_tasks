import { ref, onMounted } from 'vue';
import { useTaskStore } from '../stores/taskStores';

export function useTasks() {
    const store = useTaskStore();
    
    onMounted(() => {
        // console.log("fetchTasks()");
        store.fetchTasks();
    });

    return { store };
}
