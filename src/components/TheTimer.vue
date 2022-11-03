<template>
    <div class="countdown">
        {{displayDays}} :
       {{disyplayHours}} :
       {{displayMinutes}} :
       {{displaySecounds}}
    </div>
    <br/>
    <div class="form">
        Zu welcher Uhrzeit soll der Timer enden?
        <br/>
        <input class="input" type="number" placeholder="Stunden" v-model="inputHours"/>
        <input class="input" type="number" placeholder="Minuten" v-model="inputMinutes"/>
        <input class="input" type="number" placeholder="Sekunden" v-model="inputSeconds"/>
        <button class="btnTimer" type="button" v-on:click="getInput()" >Start</button>
        <button class="btnTimer" type="button"  >Stopp</button>
    </div>

    <div>Infos / Bugs:
        ist der timer gestartet und der user startet anschließend eine neuen timer, dann springt die zeit immer hin und her (beide timer laufen).
            <br/>
        <br/>
        todo:    <br/>
        - bug (zeit springen beheben)    <br/>
        - stopp button implementieren    <br/>
        - timer eingabe eventuell überdenken (nicht uhrzeit als ende des times eingeben, sondern timer soll in 30 minuten enden...)    <br/>
    </div>

</template>

<script>
export default {
    props: ["jahr", "monat", "tag", "stunde", "minute", "sekunde"],
    data: () => ({
        displayDays: 0,
        disyplayHours: 0,
        displayMinutes: 0,
        displaySecounds: 0,
        inputHours: null,
        inputMinutes: null,
        inputSeconds: null,

    }),
    computed: {
        _secounds: () => 1000,
        _minutes() {
            return this._secounds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        end() {
            return new Date(
                this.jahr, this.monat, this.tag, this.stunde, this.minute, this.sekunde
            );
        },
    }, mounted() {
        //this.showReaming()
    },
    methods: {
        formatNum: num => (num < 10 ? "0" + num : num),
        showReaming(Hours, Minutes, Seconds){
            const timer = setInterval(()=> {
                const now = new Date();
                const end = new Date(2022, 9, 30, Hours, Minutes, Seconds);
                const distance = end.getTime() - now.getTime();

                
                if(distance < 0){
                    clearInterval(timer);
                    return
                }

                const days = Math.floor((distance / this._days));
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const secounds = Math.floor((distance % this._minutes) / this._secounds);
                this.displayMinutes = this.formatNum(minutes)
                this.displaySecounds = this.formatNum(secounds)
                this.disyplayHours = this.formatNum(hours)
                this.displayDays = this.formatNum(days)
            }, 1000);
        },
        getInput(){
            //Clear Timer - muss noch implementiert werden (sonst springt der Timer immer zwischen alter und neuer Zeit)
            //Start Timer
            this.showReaming(this.inputHours, this.inputMinutes, this.inputSeconds)
        },
    }
}
</script>

<style>
.form {
    position: relative;
    text-align: center;
}
.countdown {
    background-color: #C5A974;
    position: relative;
    text-align: center;
    height: 15vh;
    width: 15vh;
    border-radius: 100px;
    margin-left: 40%;
    padding-top: 50px;
}
.input {
    height: 25px;
    width: 100px;
    margin: 3px;
    border: none;
    background-color: #e7e7e7;
    color: black;
}
.btnTimer {
  background-color: rgb(37, 32, 32);
  color: white;
  border: solid 1px white;
  cursor: pointer;
  padding: 10px;
  width: 60px;
  border-radius: 4px;
}
.btnTimer:hover {
  border: solid 1px white;
  background-color: rgb(48, 170, 222);
  letter-spacing: 2px;
  border-radius: 10px;
}
</style>
