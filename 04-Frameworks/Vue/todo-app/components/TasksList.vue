<template>
  <section class="list">
    <h4 tabindex="0">Lista de tareas</h4>
    <displayTaskVue :tasks="tasks" />
  </section>
</template>

<script setup lang="ts">
import displayTaskVue from "./displayTask.vue";

const { tasks } = useTaskList();
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ffffff;
  width: 500px;
  height: auto;
}

h4 {
  font-size: 2em;
  text-align: center;
  margin-top: 20px;
}


@media (max-width: 800px) {
  .list {
    width: auto;
    justify-content: center;
    align-items: center;
  }
}
</style>
