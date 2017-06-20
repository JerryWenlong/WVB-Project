require("jquery");
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('cssDir/demo.css');
require('commonLayout')
require('lodash');

require('./style.css')
let marked = require('vendorDir/marked.js');
require('vendorDir/jquery-dateFormat.min.js')
let modal = require('componentsDir/modal.vue')
let Vue = require('vue')
new Vue({
    el: '#editor',
    data: {
        input: `
        # 欢迎使用沃德MD编辑器 --Jerry
        `,
        showSave: false,
        showPreview: false,
        showSuccess: false,
        showFailed: false,
        failedMsg:'',
        fileName: ''
    },
    mounted:function(){
        // let vm = this;
        // vm.$on('close', function(){
        //     console.log('close')
        //     vm.showSave = false;
        //     vm.showPreview = false;
        // })
    }, 
    computed: {
        compiledMarkdown: function(){
            return marked(this.input, {sanitize: true})
        },
        defaultFileName: function(){
            let now = new Date();
            let defaultFileName = `${$.format.date(now, 'yyyy-MM-dd')}.md`
            return defaultFileName
        }
    },
    methods: {
        update: _.debounce(function(e){
            this.input = e.target.value
        }, 300),
        upload: function(){
            let vm = this;
            let input = this.input;
            let fileName = this.fileName || this.defaultFileName;
            
            fetch('/saveMdFile', {
                method: 'post', 
                mode: 'cors', 
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}, 
                body:`fileName=${fileName}&content=${input}`})
            .then(function(res){
                if(res.ok){
                    vm.showSuccess=true;console.log('success')
                }else{
                    return 'Failed to save the document!'
                }
            })
            .then(e=>{vm.failedMsg=e;vm.showFailed=true})
            .catch(e=>{vm.failedMsg=e;vm.showFailed=true})
        },
        submit: function(){
            this.showSave = false;
            this.upload();
        },
        close: function(){
            this.showPreview = false;
        }
    },
    components:{
      'modal': modal
    }
})