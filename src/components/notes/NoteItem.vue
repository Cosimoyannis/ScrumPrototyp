<template>
  <li>
    <h3>{{ topicP }}</h3>
    <p>{{ note }}</p>
    <i>{{ authorP }}</i>
  </li>
</template>

<script>
export default {
  props: ["topic", "note", "author"],
  computed: {
    authorP() {
      return this.author.toUpperCase();
    },
    topicP() {
      return this.topic.toUpperCase();
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

h3 {
  margin-bottom: 1rem;
}

p {
  margin: 0 0 1rem 2rem;
}

i {
  align-self: flex-end;
}
</style>
