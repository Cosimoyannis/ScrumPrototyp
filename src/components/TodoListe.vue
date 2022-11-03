<template>
  <ul>
    <todo-item
      v-for="todo in allTodos"
      :key="todo.title"
      :title="todo.title"
      :description="todo.desc"
      :editors="todo.editors"
      :isDone="todo.isFinished"
      :start="todo.startDate"
      :end="todo.endDate"
      :prio="todo.prio"
    ></todo-item>
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
  computed: {
    allTodos() {
      const todos = this.$store.getters["todoModule/todos"];
      return todos;
    },
  },
};
</script>
