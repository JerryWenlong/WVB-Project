require("jquery");
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('./style.css')
var Vue = require('vue')

var VM = new Vue({
    el: '#loginForm',
    data: {
        user:{
            name:'',
            pw: ''
        }
    },
    methods: {
        login: function(){
            var name = this.user.name;
            var pw = this.user.pw;
            $.post('/login', {'userName':name, 'password':pw}, function(){
                console.log('success')
                window.location.href="/"
            })
        }
    }
})