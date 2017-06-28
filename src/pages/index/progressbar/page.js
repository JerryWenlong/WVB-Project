require("jquery");
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('./style.css');
let Vue = require("vue")

let VM = new Vue({
    el: "#progressbarPage",
    data: {
        defaultValue: 5,
        mutativeValue: 0,
        barHeight: 10,
    },
    computed: {
        nowValue: function(){
            let vm = this;
            let value = Math.max(...[vm.defaultValue, vm.mutativeValue]);
            return value
        }
    },
    methods: {
        startProgressing: function(){
            let vm = this;
            vm.clock = setInterval(function(){
                if(vm.mutativeValue < 100){
                    vm.mutativeValue += 1;
                }else{
                    vm.mutativeValue = 100;
                    clearInterval(vm.clock)
                    console.log('stop')
                }
            }, 50)
        },
        reset: function(){
            let vm = this;
            if(vm.clock) 
                clearInterval(vm.clock)
            vm.mutativeValue = 0;
        }
    }
})

