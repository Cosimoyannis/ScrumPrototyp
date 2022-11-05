<template>
  <div class="input-card">
    <div class="title">Sprint erstellen</div>
    <div class="color"/>
    <input
      class="inputTitle"
      v-model="sprintTitle"
      type="Number"
      placeholder="Sprintnummer"
    />
    <input
      class="inputDescription"
      v-model="sprintDescription"
      placeholder="Sprint Beschreibung"
    />
    <input class="inputGoals" v-model="goals" placeholder="Ziele" />
    <input class="inputUsers" v-model="users" placeholder="Teilnehmer" />
    <input class="inputStart" type="date" v-model="startDate" />
    <input class="inputEnd" type="date" v-model="endDate" />

    <button
      :disabled="!sprintDescription && !startDate && !endDate"
      @click="addSprint()"
      class="btn"
    >
      Sprint anlegen
    </button>
    <div class="head">
      <p class="expanded"></p>
      <p class="control"></p>
    </div>
  </div>
  <div class="center">
    <div class="grid-container">
      <div class="sprint-card" v-for="(item, index) in sprints" :key="index">
        <button class="deleteBtn" @click="deleteSprint(index)">
          <img
            src="https://www.freeiconspng.com/uploads/delete-button-png-24.png"
            width="20"
            alt="Deletemark"
          />
        </button>
        <button class="doneBtn" @click="toggleDone(index)">
          <img
            src="https://www.freeiconspng.com/uploads/checkmark-png-5.png"
            width="25"
            alt="Check"
          />
        </button>
        <div class="additional" :class="{ 'done-background': item.done }">
          <div class="user-card">
            <div class="sprint-center">
              {{ item.sprintTitle }}
            </div>
            <div class="startdate-center">
              Start
              <p>{{ item.startDate }}</p>
            </div>
            <div class="enddate-center">
              Ende
              <p>{{ item.endDate }}</p>
            </div>
          </div>
          <div class="more-info">
            <div class="infos">
              <h3>Teilnehmer:</h3>
              <p>{{ item.users }}</p>
              <br />
              <h3>Ziele:</h3>
              <p>
                {{ item.goals }}
              </p>
            </div>
          </div>
        </div>
        <div class="general">
          <h2>Beschreibung</h2>
          <p>{{ item.sprintDescription }}</p>
          <span class="more">Hover me</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      sprints: [
        {
          sprintTitle: "Sprint 1",
          sprintDescription: "Teammitglieder der Sprint übersicht hinzufügen",
          startDate: "2022-11-03",
          endDate: "2022-12-03",
          goals: "Übersicht fertig stellen",
          users: "John, Uygar",
          done: false,
        },
        {
          sprintTitle: "Sprint 2",
          sprintDescription: "Todos fertig stellen",
          startDate: "2022-11-03",
          endDate: "2022-12-03",
          goals: "Design anpassen -> bessere Übersicht",
          users: "Metehan",
          done: false,
        },
      ],
      sprintTitle: "Sprint ",
      sprintDescription: "",
      startDate: "",
      endDate: "",
      goals: "",
      users: "",
    };
  },
  mounted() {},
  methods: {
    bla123() {
      console.log("zguahsd");
    },
    addSprint() {
      const newSprint = {
        id: uuidv4(),
        sprintTitle: "Sprint " + this.sprintTitle,
        sprintDescription: this.sprintDescription,
        startDate: this.startDate,
        endDate: this.endDate,
        goals: this.goals,
        done: false,
        users: this.users,
      };
      console.log("new sprint:", newSprint);
      this.sprints.push(newSprint);
      this.sprintDescription = "";
      this.sprintTitle = "";
      this.endDate = "";
      this.startDate = "";
      this.goals = "";
      this.users = "";
    },
    deleteSprint(itemId) {
      console.log("delete sprint:", this.sprints[itemId]);
      this.sprints.splice(itemId, 1);
    },
    toggleDone(itemId) {
      const newDone = !this.sprints[itemId].done;
      this.sprints[itemId].done = newDone;
    },
  },
};
</script>

<style scoped>
.input-card {
  width: 450px;
  height: 200px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
}
.title {
  z-index: 100;
  position: absolute;
  top: 5px;
  left: 15px;
}
.inputTitle {
  font-size: 10px;
  position: absolute;
  top: 25%;
  left: 15%;
  -webkit-transform: translate(-50%, -50%);
  height: 25px;
  font-size: 12px;
  width: 100px;
}
.grid-container {
  display: inline-grid;
  grid-template-columns: auto auto;
  padding: 10px;
}
.inputStart {
  font-size: 10px;
  position: absolute;
  top: 50%;
  left: 15%;
  font-size: 15px;
  -webkit-transform: translate(-50%, -50%);
}
.inputDescription {
  font-size: 10px;
  position: absolute;
  top: 25%;
  left: 65%;
  font-size: 12px;
  height: 25px;
  -webkit-transform: translate(-50%, -50%);
}

.inputGoals {
  font-size: 10px;
  position: absolute;
  top: 45%;
  left: 65%;
  font-size: 12px;
  height: 25px;
  -webkit-transform: translate(-50%, -50%);
}

.inputUsers {
  font-size: 10px;
  position: absolute;
  top: 65%;
  left: 65%;
  font-size: 12px;
  height: 25px;
  -webkit-transform: translate(-50%, -50%);
}
.inputEnd {
  font-size: 10px;
  position: absolute;
  top: 70%;
  left: 15%;
  font-size: 15px;
  -webkit-transform: translate(-50%, -50%);
}
.btn {
  margin-left: 20px;
  cursor: pointer;
  background: #8c9cab;
  position: absolute;
  top: 85%;
  left: 80%;
  -webkit-transform: translate(-50%, -50%);
}
.color {
  z-index: 100px;
  width: 150px;
  height: 100%;
  background: #8c9cab;
  transition: width 0.4s;
  overflow: hidden;
  z-index: 100;
  top: 0px;
}

.deleteBtn {
  position: absolute;
  z-index: 99;
  border: none;
  margin-left: 5px;
  margin-top: 5px;
  background: none;
}
.doneBtn {
  position: absolute;
  z-index: 99;
  left: 420px;
  border: none;
  margin-left: 2px;
  margin-top: 5px;
  background: none;
}

.sprint-center {
  font-size: 18px;
  position: absolute;
  top: 20%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
}

.startdate-center {
  font-size: 12px;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
}
.enddate-center {
  font-size: 12px;
  position: absolute;
  text-align: center;
  top: 80%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
}

.sprint-card {
  width: 450px;
  height: 180px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
}

.sprint-card h1 {
  text-align: center;
}
.sprint-card .additional.done-background {
  background: #95aa8c;
}
.sprint-card .additional {
  position: absolute;
  z-index: 100px;
  width: 150px;
  height: 100%;
  background: linear-gradient(#de685e, #ee786e);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
  top: 0px;
}

.sprint-card:hover .additional {
  width: 100%;
  border-radius: 0 5px 5px 0;
}

.sprint-card .additional .user-card {
  width: 150px;
  height: 100%;
  position: relative;
  float: left;
}

.sprint-card .additional .more-info {
  width: 300px;
  float: left;
  position: absolute;
  left: 150px;
  height: 100%;
}

.sprint-card .additional .infos {
  margin: 0 1rem;
  color: #fff;
  font-size: 1rem;
}

.sprint-card .general {
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
}

.sprint-card .general .more {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.9em;
}
</style>
