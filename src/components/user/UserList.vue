<template>
  <ul>
    <user-item
      v-for="user in allUsers"
      :key="user.id"
      :userimgP="user.imgSrc"
      :firstnameP="user.firstName"
      :lastnameP="user.lastName"
      :roleP="user.role"
      :idP="user.id"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "@/components/user/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  data() {
    return {};
  },
  computed: {
    allUsers() {
      const users = this.$store.getters["userModule/users"];
      return users;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
}
</style>
