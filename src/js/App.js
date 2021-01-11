const JANKEN_GU = 0;
const JANKEN_TYOKI = 1;
const JANKEN_PA = 2;
const JANKEN_LIST = [
    JANKEN_GU,
    JANKEN_TYOKI,
    JANKEN_PA
]
// const JANKEN_LIST = {
//     JANKEN_GU:0,JANKEN_TYOKI:1,JANKEN_PA:2
// }

const vue = new Vue({
    el: '#app',

    data: function() {
        return {
            isGameStart: false,
            isGameOver: false,
            playertehuda:null,
            cputehuda:null,
            kekka:''
        }
    },

    methods: {
        gameStart() {
            console.log("start!!!!!")
            this.isGameStart = true
        },

        gameEnd() {
            this.isGameOver = true
        },

        restart() {
            this.isGameOver = false
        },

        tehudachange(value){
            this.playertehuda =value
            // if(this.playertehuda === 'gu'){
            //     this.cputehuda ='pa'
            // }else if(this.playertehuda === 'tyoki'){
            //     this.cputehuda ='gu'
            // }else if(this.playertehuda === 'pa'){
            //     this.cputehuda ="tyoki"
            // }

            this.cputehuda =JANKEN_LIST[Math.floor(Math.random() * JANKEN_LIST.length)];

            if((this.playertehuda - this.cputehuda + 3)%3 === 2){
                this.kekka = "勝ち"
            }else if((this.playertehuda - this.cputehuda + 3)%3 === 1){
                this.kekka ="負け"
            }else{
                this.kekka ="引き分け"
            }
        }
    },

    computed:{
        getTehudaName() {
            switch (this.playertehuda) {
                case JANKEN_GU:
                    return 'gu'
                case JANKEN_TYOKI:
                    return 'tyoki'
                case JANKEN_PA:
                    return 'pa'
            }
        },
        getCpuName() {
            switch (this.cputehuda) {
                case JANKEN_GU:
                    return 'gu'
                case JANKEN_TYOKI:
                    return 'tyoki'
                case JANKEN_PA:
                    return 'pa'
            }
        }
    }
})
