Vue.component('app-button', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<div><button v-on:click="count++">{{ hoge }} clicked me {{ count }} times.</button></div>',
  props:{
      hoge:String,
  }
})

