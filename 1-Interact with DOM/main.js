var app = new Vue({
    //el: Connect to DOM
    el: '#app', 
    //data: Store Data to be used
    data: {
      message: 'Hello Vue!',
      link: 'https://www.google.com/',
      finishLink:'<a href="https://www.google.com/" target="blank">Google</a>',
      counter:0,
      x:0,
      y:0,
      text: "test",
      seondCounter: 0,
      attachRed: false,
      color: "yellow"
    },
    //computed: Dependent properties
    computed:{
        output: function(){
            console.log("Computed");
            return this.counter > 5 ? "> 5" : "<= 5";
        },
        divClasses: function(){
            return{
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        myStyle: function(){
            return{
                back
            }
        }
    },
    //watch: Execute code upon data chnages
    watch:{
        seondCounter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.seondCounter = 0;
            }, 2000);
        }
    },
    //methods: Methods of this Vue Instance
    methods:{
        sayHello: function(){
            this.message = 'Say Hello';
            return this.message;
        },
        increase: function(){
            this.counter++;
        },
        increaseStep: function(step, event){
            this.counter += step;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(){
            alert("Alert!")
        },
        result: function(){
            console.log("Method");
            return this.counter > 5 ? "> 5" : "<= 5";
        }
    }
  })