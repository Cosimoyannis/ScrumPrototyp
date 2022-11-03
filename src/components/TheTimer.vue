<template>
    <div class="container">
      <div class="wrapper">
        <h1>Countdown</h1>
        <div class="currentTime">
          <p class="timestamp" v-if="timeStarted">
            {{ hours }} : {{ minutes }}: {{ seconds }}
          </p>
        </div>
        <div class="timeWrapper" v-if="!timeStarted">
          <div class="hours_container">
            <p id="hours" class="time">Hours</p>
            <input
              type="number"
              id="inputHour"
              min="0"
              max="96"
              class="inputTime"
              v-model="hours"
            />
          </div>
          <div class="minutes_container">
            <p id="minutes" class="time">Minutes</p>
            <input
              type="number"
              id="inputMinutes"
              min="0"
              max="60"
              class="inputTime"
              v-model="minutes"
            />
          </div>
          <div class="seconds_container">
            <p id="seconds" class="time">Seconds</p>
            <input
              type="number"
              id="inputSeconds"
              min="0"
              max="60"
              class="inputTime"
              v-model="seconds"
            />
          </div>
        </div>
        <div class="button_container">
          <base-button id="start" @click="startCountdown">Start</base-button>
          <base-button id="stop" @click="stopTimer">Stop</base-button>
          <base-button id="reset" @click="resetTimer">Reset</base-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import BaseButton from "@/ui/BaseButton.vue";
  export default {
    components: { BaseButton },
    data() {
      return {
        timeStarted: false,
        startTimer: null,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isChecked: false,
      };
    },
    methods: {
      timer() {
        this.validation();
  
        this.timeStarted = true;
        if (this.hours == 0 && this.minutes == 0 && this.seconds == 0) {
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          this.timeStarted = false;
          this.stopTimer;
        } else if (this.seconds != 0) {
          //seconds.value = seconds.value - 1;
          this.seconds--;
        } else if (this.minutes != 0 && this.seconds == 0) {
          this.seconds = 59;
          this.minutes--;
        } else if (this.hours != 0 && this.minutes == 0) {
          this.minutes = 60;
          this.hours--;
        }
        //  console.log(this.seconds);
        return;
      },
      startCountdown() {
        this.startTimer = setInterval(() => {
          this.timer();
        }, 1000);
      },
      resetTimer() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.stopTimer;
        this.timeStarted = false;
      },
      stopTimer() {
        clearInterval(this.startTimer);
      },
      validation() {
        if (this.minutes > 60) {
          this.minutes = 60;
          alert("Es dürfen nicht mehr als 60 Minuten eingetragen werden");
        }
        if (this.seconds > 60) {
          this.seconds = 60;
          alert("Es dürfen nicht mehr als 60 Sekunden eingetragen werden");
        }
        this.isChecked = true;
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 1rem;
  }
  .timestamp {
    font-size: 5rem;
  }
  
  .timeWrapper {
    display: flex;
    gap: 1rem;
  }
  
  .timeWrapper input {
    border: 2px solid black;
    border-radius: 10px;
    outline: none;
    padding: 5px 10px;
    font-size: 1rem;
  }
  
  .button_container {
    display: flex;
  }
  </style>
  