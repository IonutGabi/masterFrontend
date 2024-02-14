<template>
    <input aria-describedby="Field for edit a task" @keydown="onKeyDown" v-model="task" />
    <button aria-describedby="Edit the task with the new title" @click="handleClick">Editar tarea</button>
</template>

<script setup lang="ts">

const props = defineProps<{
    task: string;
    index: number;
}>()


import { useTaskList } from "@/composables/TaskList"

const task = ref<string>(props.task);

const isEnterPresed = ref(false)

const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    editTask(task.value, props.index);
}

const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
        isEnterPresed.value = true;
        editTask(task.value, props.index)
    }
}

const { editTask } = useTaskList();

</script>

<style scoped>
input {
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