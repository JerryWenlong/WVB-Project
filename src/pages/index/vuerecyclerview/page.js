require("jquery");
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('cssDir/demo.css');
require('commonLayout')
/*recyclerview debugger*/
require("./vue-recyclerview/src/recyclerview.css")

let Vue = require('vue')
/* Uncomment for normally calling recyclerview*/
// let RecyclerView = require('vue-recyclerview')

/* Uncomment for recyclerview debugging*/
let RecyclerView = require('./vue-recyclerview/src/recyclerview.js')
/*----------------------*/
let App = require("componentsDir/vue-recyclerview/App.vue") 
/* Uncomment for normally calling recyclerview*/
// Vue.use(RecyclerView)

/* Uncomment for recyclerview debugging*/
function install (Vue, options = {}) {
  const component = RecyclerView.default(Vue)
  Vue.component(component.name, component)
  return component
}
Vue.use(install)
/*----------------------*/

new Vue({
    el: '#recyclerview',
    render: h => h(App)
})