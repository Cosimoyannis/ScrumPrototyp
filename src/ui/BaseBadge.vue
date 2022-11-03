<template>
  <span class="badge" :class="typeP">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ["typeP", "titleP"],
  computed: {
    text() {
      return this.titleP.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.developer {
  background-color: #00f6e1;
  color: white;
}

.product-owner {
  background-color: #0047ab;
  color: white;
}

.scrum-master {
  background-color: #0c056c;
  color: white;
}
</style>
