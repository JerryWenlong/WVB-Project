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
        fileName: ''
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
            
            let input = this.input;
            let fileName = this.fileName || this.defaultFileName
            $.post('/saveMdFile', {
                'fileName': fileName,
                'content': input
            }, function(){console.log('success')})
        },
        submit: function(){
            this.showSave = false;
            this.upload();
        }
    },
    components:{
      'modal': modal
    }
})