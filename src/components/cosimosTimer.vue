<template>
<section id="app">
  <div class="grid-container">
    <div class="grid-x">
      <h3 class="text-center ">{{ title }}</h3>
      <div class="text-center" id="timerdiv">
        <div id="timer"><span id="minutes">{{ minutes }}</span><span id="middle">:</span><span id="seconds">{{ seconds }}</span></div>
        <div class="flex flex-justify-center" id="buttons"> 
          <button class="button" id="start" @click="startTimer(); increaseTimer();"><i class="far fa-play-circle">start</i></button>
          <button class="button" id="stop" v-if="timer" @click="stopTimer"><i class="far fa-pause-circle">stop</i></button>
          <button class="button" id="reset" v-if="resetButton" @click="resetTimer">reset<i class="fas fa-undo"></i></button>
        </div>
        <input type="range" min="1" max="60" v-model="value"  id="slider" class="slider">
        <h3 v-if="value==1">{{value}} Minute</h3>
        <h3 v-if="value!=1">{{value}} Minuten</h3>
      </div>

      
    </div>
  </div>
</section>
</template>

<script>
export default {
    data: () => ({
        title: "Timer",
		timer: null,
		totalTime : 60,
		resetButton: false,
        value: 1,
    }),
    computed: {

        minutes: function () {
			const minutes = Math.floor(this.totalTime / 60);
			return this.padTime(minutes);
		},

		seconds: function () {
			const seconds = this.totalTime - this.minutes * 60;
			return this.padTime(seconds);
		},

        increaseTimerSlider: function () {

        return this.value * 10
		}

    },
    methods: {


        increaseTimer: function () {
            this.totalTime = 60
			this.totalTime = this.totalTime * this.value
		},

        decreaseTimer: function () {
			this.totalTime = this.totalTime - 60
		},

        startTimer: function () {
			this.timer = setInterval(() => this.countdown(), 1000);
			this.resetButton = true;
		},
		stopTimer: function () {
			clearInterval(this.timer);
			this.timer = this.resetButton = true;
		},
		resetTimer: function () {
			this.totalTime = 1 * 60;
			clearInterval(this.timer);
			this.timer = null;
			this.resetButton = false;
		},
		padTime: function (time) {
			return (time < 10 ? "0" : "") + time;
		},
		countdown: function () {
			if (this.totalTime >= 1) {
				this.totalTime--;
			} else {
				this.totalTime = 0;
				this.resetTimer;
			}
		}
    } 
  
}
</script>



<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700");


#message {
  margin-bottom: 1.25rem;
  color: black;
  font-size: 3.125rem;
}

#timerdiv {
  margin-top: 15%;
}

#timer {
  color: black;
  font-size: 9.375rem;
}

.timer-title {
  margin: 0;
  padding: 0;
  color: black;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
}

.button {
  position: relative;
  margin: 1% 1% 1%;
  padding: 1rem 2rem;
  background-color: whitesmoke;
  border: 0;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: #0d5a79;
  font-size: 1.5rem;
  overflow: hidden;
  cursor: pointer;
}
.button:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #0d5a79;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 0;
}
.button:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  color: whitesmoke;
}
.button:hover:before {
  height: 100%;
  background-color: #0d5a79;
}
.button i {
  position: relative;
  z-index: 1;
}

.text-center {
  text-align: center;
}

.grid-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}


.slider {
  -webkit-appearance: none;
  width: 55%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin-top: 3%;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #0d5a79;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #0d5a79;
  cursor: pointer;
}


</style>
