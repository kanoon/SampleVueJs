var app = new Vue({
    //el: Connect to DOM
    el: '#app', 
    //data: Store Data to be used
    data: {
      show: false,
      strList : ['test1','test2','test3'],
      persons :[{name : 'Marisa', age : 32}
      ,{name : 'Fuku', age : 5}
      ,{name : 'Miki', age : 4}]
    },
    //computed: Dependent properties
    //watch: Execute code upon data chnages
    //methods: Methods of this Vue Instance
  })