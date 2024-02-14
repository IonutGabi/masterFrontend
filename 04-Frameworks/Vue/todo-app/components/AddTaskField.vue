<template>
  <section>
    <input aria-describedby="Field for write a task" type="text" @keydown="onKeyDown" v-model="task" />
    <button aria-describedby="For add the task" @click="onClick">Agregar tarea</button>
  </section>
</template>

<script setup lang="ts">
import { useTaskList } from "@/composables/TaskList";

const task = ref<string>("");

const { addNewTask } = useTaskList();

const isEnterPresed = ref(false);

const onClick = (event: MouseEvent) => {
  event.preventDefault();
  addNewTask(task.value);
  task.value = "";
}


const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    isEnterPresed.value = true
    addNewTask(task.value)
    task.value = "";
  }
}
</script>

<style scoped>
section {
  display: flex;
  align-items: baseline;
}

input {
  margin: 0 0 50px 110px;
  padding: 10px;
  border-radius: 8px;
  border: none;
}

button {
  margin-left: 10px;
  padding: 15px;
  border: 1px solid;
  border-radius: 8px;
  background-color: transparent;
  color: #ffff;
  cursor: pointer;
}
</style>
