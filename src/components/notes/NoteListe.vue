<template>
  <ul>
    <note-item
      v-for="note in allNotes"
      :key="note.id"
      :topic="note.topic"
      :note="note.note"
      :author="note.author"
    ></note-item>
  </ul>
</template>

<script>
import NoteItem from "@/components/notes/NoteItem.vue";

export default {
  components: {
    NoteItem,
  },
  computed: {
    allNotes() {
      const notes = this.$store.getters["notizModule/notes"];
      return notes;
    },
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
</style>
