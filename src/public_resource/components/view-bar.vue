<template>
    <div id="myTree">
        <h1>{{msg}}</h1>
        <div style="width:280px">
            <vue-ztree :list.sync='ztreeDataSource' :func.sync="nodeClick" :is-open='true'></vue-ztree>
        </div>
    </div>
</template>
<script>
    var vueZtree = require('./vue-ztree.vue')
    export default{
        data:function(){
            return {
                msg: '',
                ztreeDataSource: [
                {
                    id:1,
                    name: 'music',
                    children:[]
                },
                {
                    id:2,
                    name: '视频',
                    children: [
                        {
                            id:3,
                            name:'电影',
                            children: [
                                {
                                    id:4,
                                    name: '国产电影',
                                    children:[]
                                },
                                {
                                    id:5,
                                    name: '好莱坞',
                                    children:[]
                                }
                            ]
                        }
                    ]
                }
                ]
            }
        },
        methods: {
            nodeClick: function(m){
                console.log(JSON.parse(JSON.stringify(m)))
            }
        },
        components: {
            vueZtree
        }
    }
</script>
<style>
    body{font-family: Helvetica, sans-serif;}
</style>