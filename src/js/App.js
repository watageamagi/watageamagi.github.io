const JANKEN_GU = 0;
const JANKEN_TYOKI = 1;
const JANKEN_PA = 2;
const JANKEN_LIST = [
    JANKEN_GU,
    JANKEN_TYOKI,
    JANKEN_PA
]

const vue = new Vue({
    el: '#app',

    data: function() {
        return {
            isGameStart: false,
            isGameOver: false,
            playertehuda:null,
            cputehuda:null,
            kekka:'',
            victoryCount:0,
            loseCount:0,
            drow:0,


            items: [
                {
                    path: 'src/images/gu.png',
                    name: 'グー',
                    productionPlace: '成龍酒造(愛媛県)',
                },
                {
                    path: 'src/images/tyoki.png',
                    name: 'チョキ',
                    productionPlace: '成龍酒造(愛媛県)',
                    kana: 'DEBASAKURA',
                    fragrance: 'あたたかみ系'
                },
                {
                    path: 'src/images/pa.png',
                    name: 'パー',
                    productionPlace: '成龍酒造(愛媛県)',
                    kana: 'DEBASAKURA',
                    fragrance: 'あたたかみ系'
                },
            ]
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

            this.cputehuda =JANKEN_LIST[Math.floor(Math.random() * JANKEN_LIST.length)];

            if((this.playertehuda - this.cputehuda + 3)%3 === 2){
                this.kekka = "勝ち"
                this.victoryCount++
            }else if((this.playertehuda - this.cputehuda + 3)%3 === 1){
                this.kekka ="負け"
                this.loseCount++
            }else{
                this.kekka ="引き分け"
                this.drow++
            }
        },

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
