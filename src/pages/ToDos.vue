<template>
  <h1>Todo's</h1>
  <div class="todoPage">
    <base-card>
      <todos-form></todos-form>
    </base-card>
    <base-card>
      <todo-liste></todo-liste>
    </base-card>
  </div>
</template>

<script>
import TodosForm from "@/components/TodosForm.vue";
import TodoListe from "@/components/TodoListe.vue";
export default {
  components: {
    TodosForm,
    TodoListe,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 1rem;
}

.todoPage {
  display: flex;
  justify-content: space-evenly;
}

.todoPage > * {
  flex-grow: 1;
}
</style>
