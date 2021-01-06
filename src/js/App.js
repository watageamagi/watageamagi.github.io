
const vue = new Vue({
    el: '#app',

    data: function() {
        return {
            isGameStart: false,
            isGameOver: false,
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
        }
    }
})
