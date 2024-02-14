<template>
  <div role="presentation">
    <div role="list" v-for="(task, index) in tasks" :key="index">
      <input aria-describedby="Put a task with status completed" type="checkbox" v-model="task.completed" />
      <label>{{ task.title }}</label>
      <span aria-describedby="Shows message completed in green when checkbox is checked"
        v-if="task.completed">Completada</span>
      <button aria-describedby="Delete a task" @click="deleteTask(tasks, index)">Eliminar Tarea</button>
      <div>
        <Edit :task="task.title" :index="index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '~/types/task';




defineProps<{
  tasks: Task[];
}>();

const deleteTask = (tasks: Task[], index: number) => tasks.splice(index, 1);


</script>

<style scoped>
input {
  padding: 20px;
  margin: 10px;
  width: 18px;
  height: 20px;
}

label {
  font-size: 1.2em;
}

label,
input {
  vertical-align: middle;
}

button {
  margin: 20px 0 20px 0;
  width: 100%;
  padding: 8px;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;
}



span {
  margin-left: 10px;
  color: #06F006;
  vertical-align: middle;

}
</style>
