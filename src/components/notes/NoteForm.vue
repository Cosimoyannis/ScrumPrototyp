<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="topic">Thema</label>
      <input type="text" id="topic" v-model.trim="topic" />
    </div>
    <div class="form-control">
      <label for="note">Notiz</label>
      <textarea id="note" rows="7" v-model.trim="note"></textarea>
    </div>
    <div class="form-control">
      <label for="author">Author</label>
      <select id="author" v-model.trim="author">
        <option value="metehan">Metehan</option>
        <option value="yafes">Yafes</option>
        <option value="john">John</option>
        <option value="uygar">Uygar</option>
        <option value="samet">Samet</option>
        <option value="long">Long</option>
        <option value="onur">Onur</option>
      </select>
    </div>
    <base-button>Submit</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      topic: "",
      note: "",
      author: "",
    };
  },

  methods: {
    submitForm() {
      const note = {
        topic: this.topic,
        note: this.note,
        author: this.author,
      };

      this.$store.dispatch("notizModule/addNote", note);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea,
select {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}
</style>
