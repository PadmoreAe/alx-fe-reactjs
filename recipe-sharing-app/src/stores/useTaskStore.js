import {create} from "zustand"
import {persist} from 'zustand/middleware'
import {notify} from "./notify"

const useTaskStore = create(
  persist((set) => ({
    tasks: [],
    addTask: (task) => {
      set((state) => ({ tasks: [...state.tasks, task] }));
    },
    removeTask: (id) => {
      set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
    },
    toggleTask: (id) => {
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task,
        ),
      }));
    },
    fetchTasks: async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
          console.log("Fetching tasks...")
        );
        const data = await response.json();
        set({ tasks: data.slice(0, 5) });

        notify("Tasks fetched successfully", "success");
      } catch (error) {
        notify("Error fetching tasks", "error");
      }
    },
  })),
);

export default useTaskStore;
