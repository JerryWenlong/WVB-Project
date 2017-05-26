require("jquery");
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('cssDir/demo.css');
require('commonLayout')
require('lodash');

require('./style.css')
let marked = require('vendorDir/marked.js');
let Vue = require('vue')
new Vue({
    el: '#editor',
    data: {
        input: '# hello'
    },
    computed: {
        compiledMarkdown: function(){
            return marked(this.input, {sanitize: true})
        }
    },
    methods: {
        update: _.debounce(function(e){
            this.input = e.target.value
        }, 300)
    }
})
