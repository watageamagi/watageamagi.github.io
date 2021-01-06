
const vue = new Vue({
    el: '#app',

    data: function() {
        return {
            isGameStart: false,
        }
    },

    methods: {
        gameStart() {
            console.log("start!!!!!")

            this.isGameStart = true
        }
    }
})
