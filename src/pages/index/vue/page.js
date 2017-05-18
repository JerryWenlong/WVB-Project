// import Vue from 'vue'
var Vue = require('vue')
require("jquery");
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('cssDir/cover.css');
require('cssDir/demo.css')
require('cssDir/transition.css');
require('commonLayout')
var App = require("./Test.vue");
var viewBar = require("componentsDir/view-bar.vue");
var pagefoot = require("componentsDir/foot.vue");
var transitionArr = require("./transition.js");

let iter = transitionArr[Symbol.iterator]();
var resultVM = new Vue({
    el: '#testresult',
    data: {
        demoTitle: 'Click next button to show the result!',
        context: '',
        result: '',
        btnText: '开始',
        show: true
    },
    methods: {
        nextresult: function(event){
            let t_n = iter.next();
            if(!t_n.done){
                this.context = t_n.value.context;
                this.demoTitle = t_n.value.title;
                if(t_n.value.rander){
                    Vue.nextTick(t_n.value.rander)
                }
                this.btnText = "下一個"
            }else{
                this.demoTitle = 'No more result. Thanks!';
                this.context = '';
                this.btnText = "重來"
                iter = transitionArr[Symbol.iterator]();// again
            }
        }
    }
})

// var barVM = new Vue({
//     el: '#view-bar',
//     components: {viewBar}
// })