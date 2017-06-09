require("jquery");
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('cssDir/demo.css');
require('commonLayout')
require('lodash');

var Velocity= require('vendorDir/velocity.min.js');

let marked = require('vendorDir/marked.js');
require('./style.css')
let Vue = require('vue')
let modal = require('componentsDir/modal.vue')
new Vue({
    el: '#dirReader',
    data: {
      query: '',
      list: [],
      showList: [],
      show: false,
      showPreview: false,
      fileData: ''
    },
    mounted:function(){
        // get list
        let vm = this;
        $.get('/getFileList', {}, function(res){
            if(res.error){
                vm.list = []
            }else{
                vm.list = []
                var fileList = res.data
                for(var i=0; i<fileList.length;i++){
                    vm.list.push({msg: fileList[i]})
                }
            }
        })
        
        $("#fileList").mouseover(function(e){
            $(e.target).css('background-color', "#ddd")
            e.stopPropagation()
        }).mouseout(function(e){
            $(e.target).css('background-color', "#fff")
            e.stopPropagation()
        })


    },
    computed: {
        computedList: function(){
            let vm = this;
            if(!vm.show) return []
            return this.list.filter(function(item){
                return item.msg.toLowerCase().includes(vm.query.toLowerCase())
            })
        },
        compiledMarkdown: function(){
            return marked(this.fileData, {sanitize: true})
        },
    },
    methods: {
        beforeEnter: function(el){
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter: function(el, done){
            var delay = el.dataset.index * 150;
            setTimeout(function(){
                Velocity(el, {opacity:1, height:'1.6em'}, {complete: done}),
                delay
            })
        },
        leave: function(el, done){
            var delay = el.dataset.index * 150;
            setTimeout(function(){
                Velocity(el, {opacity:0, height:0}, {complete: done}),
                delay
            })
        },
        selectFile: function(index){
            let vm = this;
            let fileName = vm.computedList[index].msg;
            console.log('select file ->'+fileName)
            vm.query = fileName;
            vm.show = false;
        },
        openFile: function(){
            let vm = this;
            vm.show = false;
            let fileName = vm.query;
            $.post('/openFile', {fileName: fileName}, function(res){
                if(res.error){

                }else{
                    vm.fileData = res.data;
                    vm.showPreview = true;
                }
            })
        }
    },
    components:{
      'modal': modal
    }
})