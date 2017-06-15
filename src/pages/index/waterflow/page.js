require("jquery");
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('cssDir/demo.css');
require('commonLayout')

let Vue = require('vue')
let RecyclerView = require('vue-recyclerview')
let App = require("componentsDir/vue-recyclerview-waterflow/App.vue")
Vue.use(RecyclerView)

new Vue({
    el: '#waterflow',
    render: h => h(App)
})