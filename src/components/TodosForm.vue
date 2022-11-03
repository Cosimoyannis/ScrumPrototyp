<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="title"> Titel </label>
      <input type="text" id="title" v-model.trim="title.val" />
    </div>
    <div class="form-control">
      <label for="desc"> Description </label>
      <textarea id="desc" rows="5" v-model.trim="description.val"></textarea>
    </div>
    <div class="form-control">
      <label for="desc"> Priority</label>
      <input
        type="radio"
        name="prio"
        id="a-prio"
        value="a-prio"
        v-model="priority.val"
      />
      A
      <input
        type="radio"
        name="prio"
        id="b-prio"
        value="b-prio"
        v-model="priority.val"
      />
      B
      <input
        type="radio"
        name="prio"
        id="c-prio"
        value="c-prio"
        v-model="priority.val"
      />
      C
    </div>
    <div class="form-control">
      <label>Editor</label>
      <div class="editor">
        <label for="metehan">Metehan</label>
        <input
          type="checkbox"
          id="metehan"
          v-model="editors.val"
          value="metehan"
        />
      </div>
      <div class="editor">
        <label for="john">John</label>
        <input type="checkbox" id="john" value="john" v-model="editors.val" />
      </div>
      <div class="editor">
        <label for="long">Long</label>
        <input type="checkbox" id="long" value="long" v-model="editors.val" />
      </div>
    </div>
    <div class="form-control">
      <div class="dates">
        <div class="date">
          <label for="start-date"> Start Date </label>
          <input type="date" id="start-date" v-model="startDate.val" />
        </div>
        <div class="date">
          <label for="end-date"> End Date </label>
          <input type="date" id="end-date" v-model="endDate.val" />
        </div>
      </div>
    </div>
    <p v-if="!formIsValid">Bitte korrigiere deine Eingaben</p>
    <base-button>Submit</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      priority: {
        val: "",
        isValid: true,
      },
      editors: {
        val: [],
        isValid: true,
      },
      startDate: {
        val: null,
        isValid: true,
      },
      endDate: {
        val: null,
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      const todo = {
        title: this.title.val,
        desc: this.description.val,
        prio: this.priority.val,
        editors: this.editors.val,
        startDate: this.startDate.val,
        endDate: this.endDate.val,
      };
      console.log(todo);
      this.$store.dispatch("todoModule/addTodo", todo);
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
textarea {
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

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.form-control p {
  font-size: 12px;
  margin: 4px 0px;
  color: red;
}
</style>
