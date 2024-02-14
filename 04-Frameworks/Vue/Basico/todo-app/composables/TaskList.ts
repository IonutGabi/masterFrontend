import { defineStore } from "pinia";
import type { Task } from "~/types/task";

export const useTaskList = defineStore(
  "taskList",
  () => {
    const tasks = ref<Task[]>([]);

    const addNewTask = (title: string) => {
      isTaskInList(title)
        ? console.error("Está tarea ya existe en la lista")
        : tasks.value.push({ title, completed: false });
    };

    const isTaskInList = (title: string) =>
      tasks.value.some((task) => task.title === title);

    const editTask = (task: string, index: number) =>
      (tasks.value[index].title = task);

    return { tasks, addNewTask, editTask };
  },
  {
    persist: true,
  }
);
