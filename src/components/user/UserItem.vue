<template>
  <div class="user-card">
    <div class="user-img">
      <img :src="userimgP" alt="user" />
    </div>
    <div class="user-info">
      <h3>{{ firstnameP }} {{ lastnameP }}</h3>
      <p>{{ roleP }}</p>
      <base-button link-p :to="userDetailsLink" class="details"
        >Details</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["userimgP", "roleP", "firstnameP", "lastnameP", "idP"],
  data() {
    return {};
  },
  computed: {
    userDetailsLink() {
      console.log(this.idP + " hallo");
      return this.$route.path + "/" + this.idP;
    },
  },
};
</script>

<style scoped>
.user-card {
  width: 270px;
  height: 400px;
  box-shadow: 0px 0px 7px 1px #6b6b6b;
  margin: 1rem;
  position: relative;
}

.user-img {
  height: 250px;
}

.user-img img {
  width: 100%;
  height: 100%;
}

h3 {
  margin-bottom: 1rem;
}

.user-info {
  padding: 1rem;
  text-align: center;
}

button,
a {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 80%;
}
</style>
