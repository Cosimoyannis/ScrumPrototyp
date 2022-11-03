<template>
  <button v-if="!linkP" :class="modeP">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="modeP">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    linkP: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    modeP: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #17d0fe;
  border: 1px solid #0073ac;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin: 0.5rem 0rem;
  margin-right: 0.5rem;
  display: inline-block;
  text-align: center;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #0865bb;
  border-color: #022f87;
}
</style>
