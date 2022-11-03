<template>
  <base-card>
    <h3>{{ fullname }}</h3>
    <p>
      <span class="head">Rolle: </span> <i>{{ roleP }}</i>
    </p>
  </base-card>

  <base-card>
    <ul>
      <li v-for="todo in todosP" :key="todo">{{ todo }}</li>
    </ul>
  </base-card>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedUser: null,
    };
  },
  computed: {
    fullname() {
      return this.selectedUser.firstName + " " + this.selectedUser.lastName;
    },
    roleP() {
      return this.selectedUser.role;
    },
    todosP() {
      return this.selectedUser.todos;
    },
  },
  created() {
    this.selectedUser = this.$store.getters["userModule/users"].find(
      (user) => user.id === this.id
    );
    console.log(this.selectedUser);
  },
};
</script>

<style scoped>
h3 {
  margin-bottom: 1rem;
}

.head {
  font-weight: bold;
}

li {
  list-style-type: number;
  margin: 1rem;
}
</style>
