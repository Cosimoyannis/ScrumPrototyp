<template>
  <li :class="{ isDone: isDone }">
    <h3>{{ title }}</h3>
    <p> <span class="head">ToDo:</span> {{ description }}</p>
    <p><span class="head">Zuständigkeit bei: </span>{{ editors }}</p>
    <p><span class="head">Prioriät:</span> {{ prio }}</p>
    <p><span class="head">Start</span> {{ start }}</p>
    <p><span class="head">Due Date:</span> {{ end }}</p>
    <!-- noch zu implementieren -->
    <!--  <div class="done">
      <label for="isDone">Abgeschlossen</label>
      <input type="checkbox" id="isDone" v-model="isFinished" />
    </div> -->
  </li>
</template>

<script>
export default {
  props: ["title", "description", "editors", "isDone", "start", "end", "prio"],
  data() {
    return {
      //  isFinished: this.isDone,
    };
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  list-style: none;
}

p {
  margin-bottom: 0.5rem;
}

.head {
  font-weight: bold;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.isDone {
  background-color: green;
}
</style>
