// import Vue from 'vue'
var Vue = require('vue')
var viewBar = require("componentsDir/view-bar.vue");
var barVM = new Vue({
    el: '#view-bar',
    components: {viewBar}
})