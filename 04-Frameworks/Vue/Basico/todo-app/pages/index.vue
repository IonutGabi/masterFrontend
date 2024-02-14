
<template>
  <header>
    <h1 tabindex="0">TODO App</h1>
  </header>
  <main>
    <AddTaskField />
    <TasksList />
  </main>
</template>


<script setup>
import "~/layouts/styles.css";
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>