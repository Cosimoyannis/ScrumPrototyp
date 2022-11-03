<template>
  <div class="main-container">
    <div class="timer">
      <ProjectTimer 
        :jahr="2022"
        :monat="10"
        :tag="10"
        :stunde="10"
        :minute="10"
        :sekunde="20"
        :millisekunde="20"/>
      <TheTimer/>
    </div>
    <div class="information">
      <div class="todos">
        <h3>Todos</h3>
        <base-card>
          <todo-liste></todo-liste>
        </base-card>
      </div>
      <div class="note">
        <h3>Notizen</h3>
        <base-card>
          <note-liste></note-liste>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import TodoListe from "@/components/TodoListe.vue";
import NoteListe from "@/components/notes/NoteListe.vue";
import TheTimer from "@/components/TheTimer.vue";
import ProjectTimer from "@/components/ProjectTimer.vue";

export default {
  components: {
    ProjectTimer,
    TheTimer,
    TodoListe,
    NoteListe,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
}

.main-container > * {
  flex: 50% 0 1;
}
</style>
