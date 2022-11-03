<template>
  <div class="notes">
    <base-card>
      <note-form></note-form>
    </base-card>
    <base-card>
      <note-liste></note-liste>
    </base-card>
  </div>
</template>

<script>
import NoteForm from "@/components/notes/NoteForm.vue";
import NoteListe from "@/components/notes/NoteListe.vue";
export default {
  components: {
    NoteForm,
    NoteListe,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 1rem;
}

.notes {
  display: flex;
  justify-content: space-evenly;
}

.notes > * {
  flex-grow: 1;
}
</style>
