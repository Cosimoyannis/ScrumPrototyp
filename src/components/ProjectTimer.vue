<template>
    <div class="projecttimer">
        {{displayDays}}
        {{disyplayHours}}
        {{displayMinutes}} 
        {{displaySecounds}}
    </div>
    <br/>

</template>

<script>
export default {
    props: ["jahr", "monat", "tag", "stunde", "minute", "sekunde", "millisekunde"],
    data: () => ({
        displayDays: 0,
        disyplayHours: 0,
        displayMinutes: 0,
        displaySecounds: 0,
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
                this.jahr, 
                this.monat, 
                this.tag,
                this.stunde, 
                this.minute, 
                this.sekunde,
                this.millisekunde
            );
        },
    }, mounted() {
        this.showReaming()
    },
    methods: {
        formatNum: num => (num < 10 ? "0" + num : num),
        showReaming(){
            const timer = setInterval(()=> {
                const now = new Date();
                //const end = new Date(2022, 10, 30, 13, 0, 0);
                const distance = this.end.getTime() - now.getTime();

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
    }
}
</script>

<style scoped>
.projecttimer{
    justify-content: center;
}
</style>