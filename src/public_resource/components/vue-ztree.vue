<style>
	div.ztree_content_wrap {height:380px; }
	div.ztree_content_wrap div.left{float: left;width: 100%;}
	div.zTreeDemoBackground {width:100%;height:500px;text-align:left;}

	.expendIcon {
		background-position: -74px -36px;
		line-height: 0;
	    margin: 0;
	    width: 16px;
	    height: 16px;
	    display: inline-block;
	    vertical-align: middle;
	    border: 0 none;
	    cursor: pointer;
	    outline: none;
	    position: absolute;
	    top:4px;
	    background-color: transparent;
	    background-repeat: no-repeat;
	    background-attachment: scroll;
	    background-image: url("../images/ztree/zTreeStandard.png");
	}

	ul.ztree {border:1px solid #ddd;background: #ffffff;width:100%;height:auto;overflow-y:scroll;overflow-x:auto;}

	.ztree * {padding:0; margin:0; font-size:14px; font-family: Verdana, Arial, Helvetica, AppleGothic, sans-serif}
	.ztree {margin:0; padding:5px; color:#333 ;}
	.ztree li{position: relative; padding:0; margin:0; list-style:none; line-height:24px; text-align:left; white-space:nowrap; outline:0}
	.ztree li ul{ margin:0; padding:0 0 0 18px}
	.ztree li ul.line{ background:url('../images/ztree/line_conn.gif') 0 0 repeat-y;}

	.ztree li a {padding:1px 3px 0 0; margin:0; cursor:pointer; height:17px; color:#333; background-color: transparent;
		text-decoration:none; vertical-align:top; display: inline-block}
	.ztree li a:hover {text-decoration:underline;color:blue;}
	.ztree li a.curSelectedNode {padding-top:0px; background-color:#428BCA; color:#fff; height:24px; border:1px #428BCA solid; opacity:0.8;}
	.ztree li a.curSelectedNode_Edit {padding-top:0px; background-color:#FFE6B0; color:black; height:16px; border:1px #FFB951 solid; opacity:0.8;}
	.ztree li a.tmpTargetNode_inner {padding-top:0px; background-color:#316AC5; color:white; height:16px; border:1px #316AC5 solid;
		opacity:0.8; filter:alpha(opacity=80)}
	.ztree li a.tmpTargetNode_prev {}
	.ztree li a.tmpTargetNode_next {}
	.ztree li a input.rename {height:14px; width:80px; padding:0; margin:0;
		font-size:12px; border:1px #7EC4CC solid; *border:0px}
	.ztree li span {line-height:16px; margin-right:2px}
	.ztree li span.button {line-height:0; margin:0; width:16px; height:16px; display: inline-block; vertical-align:middle;
		border:0 none; cursor: pointer;outline:none;
		background-color:transparent; background-repeat:no-repeat; background-attachment: scroll;
		background-image:url("../images/ztree/zTreeStandard.png"); *background-image:url("../images/ztree/zTreeStandard.gif")}

	.ztree li span.button.chk {width:13px; height:13px; margin:0 3px 0 0; cursor: auto}
	.ztree li span.button.chk.checkbox_false_full {background-position:0 0}
	.ztree li span.button.chk.checkbox_false_full_focus {background-position:0 -14px}
	.ztree li span.button.chk.checkbox_false_part {background-position:0 -28px}
	.ztree li span.button.chk.checkbox_false_part_focus {background-position:0 -42px}
	.ztree li span.button.chk.checkbox_false_disable {background-position:0 -56px}
	.ztree li span.button.chk.checkbox_true_full {background-position:-14px 0}
	.ztree li span.button.chk.checkbox_true_full_focus {background-position:-14px -14px}
	.ztree li span.button.chk.checkbox_true_part {background-position:-14px -28px}
	.ztree li span.button.chk.checkbox_true_part_focus {background-position:-14px -42px}
	.ztree li span.button.chk.checkbox_true_disable {background-position:-14px -56px}
	.ztree li span.button.chk.radio_false_full {background-position:-28px 0}
	.ztree li span.button.chk.radio_false_full_focus {background-position:-28px -14px}
	.ztree li span.button.chk.radio_false_part {background-position:-28px -28px}
	.ztree li span.button.chk.radio_false_part_focus {background-position:-28px -42px}
	.ztree li span.button.chk.radio_false_disable {background-position:-28px -56px}
	.ztree li span.button.chk.radio_true_full {background-position:-42px 0}
	.ztree li span.button.chk.radio_true_full_focus {background-position:-42px -14px}
	.ztree li span.button.chk.radio_true_part {background-position:-42px -28px}
	.ztree li span.button.chk.radio_true_part_focus {background-position:-42px -42px}
	.ztree li span.button.chk.radio_true_disable {background-position:-42px -56px}

	.ztree li span.button.switch {width:18px; height:18px}
	.ztree li span.button.root_open{background-position:-92px -54px}
	.ztree li span.button.root_close{background-position:-74px -54px}
	.ztree li span.button.roots_open{background-position:-92px 0}
	.ztree li span.button.roots_close{background-position:-74px 0}
	.ztree li span.button.center_open{background-position:-92px -18px}
	.ztree li span.button.center_close{background-position:-74px -18px}
	.ztree li span.button.bottom_open{background-position:-92px -36px}
	.ztree li span.button.bottom_close{background-position:-74px -36px}
	.ztree li span.button.noline_open{background-position:-92px -72px}
	.ztree li span.button.noline_close{background-position:-74px -72px}
	.ztree li span.button.root_docu{ background:none;}
	.ztree li span.button.roots_docu{background-position:-56px 0}
	.ztree li span.button.center_docu{background-position:-56px -18px}
	.ztree li span.button.bottom_docu{background-position:-56px -36px}
	.ztree li span.button.noline_docu{ background:none;}

	.ztree li span.button.ico_open{margin-right:2px; background-position:-110px -16px; vertical-align:top; *vertical-align:middle}
	.ztree li span.button.ico_close{margin-right:2px; background-position:-110px 0; vertical-align:top; *vertical-align:middle}
	.ztree li span.button.ico_docu{margin-right:2px; background-position:-110px -32px; vertical-align:top; *vertical-align:middle}
	.ztree li span.button.edit {margin-right:2px; background-position:-110px -48px; vertical-align:top; *vertical-align:middle}
	.ztree li span.button.remove {margin-right:2px; background-position:-110px -64px; vertical-align:top; *vertical-align:middle}

	/*.ztree li span.button.ico_loading{margin-right:2px; background:url('../images/ztree/loading.gif') no-repeat scroll 0 0 transparent; 
	            vertical-align:top; *vertical-align:middle}*/

	ul.tmpTargetzTree {background-color:#FFE6B0; opacity:0.8; filter:alpha(opacity=80)}

	span.tmpzTreeMove_arrow {width:16px; height:16px; display: inline-block; padding:0; margin:2px 0 0 1px; border:0 none; position:absolute;
		background-color:white; background-repeat:no-repeat; background-attachment: scroll;
		background-position:-110px -80px; background-image:url("../images/ztree/zTreeStandard.png"); *background-image:url("../images/ztree/zTreeStandard.gif")}

	ul.ztree.zTreeDragUL {margin:0; padding:0; position:absolute; width:auto; height:auto;overflow:hidden; 
	             background-color:#cfcfcf; border:1px #00B83F dotted; opacity:0.8; filter:alpha(opacity=80)}

	.zTreeMask {z-index:10000; background-color:#cfcfcf; opacity:0.0; filter:alpha(opacity=0); position:absolute}
</style>

<template>
	<!--（ztree－🌲）-->
	<div class="ztree_content_wrap">
		<div class="zTreeDemoBackground left" v-if='list'>
			<ul class="ztree">
				<ztree-item v-for='(m,i) in list' :key="i" :model="m" :num='i' root='0' :nodes='list.length' :callback='func' :trees='list'></ztree-item>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		// 树数据
        list:{
       	  	type:Array,
        },
        // 点击回调
		func:{
			type:Function,
		},
		// 是否展开
		isOpen:{
			type:Boolean,
			default:false
		}
	},
	watch:{
        'list':{
        	handler:function(){
        		this.initTreeData();
        	},
        	deep:true
        }
	},
	methods:{
        initTreeData(){
        	var vm = this;

            var tempList = JSON.parse(JSON.stringify(this.list));
            
            // 递归操作，增加删除一些属性。比如: 展开/收起
            var recurrenceFunc = function(data){
                data.forEach((m)=>{
                    m.clickNode = false;
                    m.children = m.children || [];

                    if(m.children.length>0){
                   	  m.isFolder = vm.isOpen;
                   	  recurrenceFunc(m.children);
                    }else{
                      delete m.children;
                    }
                    
                })
            };

           recurrenceFunc(tempList);

           this.list = tempList;
        }
	},
	components:{
		// 组件
        ztreeItem:{
        	name: 'ztreeItem',
        	props: {
        		model:{
        			type:Object,
        		},
        		num:{
                    type:Number,
        		},
        		nodes:{
                    type:Number,
                    default:0
        		},
        		trees:{
		       	  	type:Array,
		       	  	default:[]
		        },
        		root:{
                    type:String,
        		},
        		callback:{
					type:Function,
				}
        	},
        	methods:{
                Func(m){
                    if(m.path){
                      window.location.href = m.path;
                    }else{
                   	  this.callback.call(null,m);
                    }
                    
                    // 查找点击的子节点
                    var recurFunc = function(data){
                        data.forEach(function(i){
                            if(i.id==m.id){
                              i.clickNode = true;
                            }else {
                              i.clickNode = false;
                            }

                            if(i.children){
                            	recurFunc(i.children);
                            }
                        })
                    }

                    recurFunc(this.trees);
                },
                open(m){
                    m.isFolder = !m.isFolder;
                }
        	},
        	computed:{
        		// 给（根 和 子树）赋值不同的样式
                rootClass:function(){
                	 var strRootClass = '';
                     
                     // 根判断
                	 if(this.root=='0'){
                       strRootClass =  (this.num==0 && !this.model.children) ? "roots_docu" : (this.nodes==1) || (this.num==0 && this.nodes!=this.num+1) ? 
                         "root_" : (this.nodes == this.num+1) ? "bottom_" : "center_" 
                     
                     // 子树判断
                	 }else if(this.root=='1') {
                        strRootClass =  this.nodes>1 && this.model.children && this.nodes!=this.num+1
                         ? "center_" : 
                            (this.num == 0 && this.nodes>1) || (this.nodes!=this.num+1) ? "center_docu" : 
                                 this.nodes == 1&&this.num!=0 || (this.nodes==this.num+1 && this.model.children)   ? "bottom_" : "bottom_docu";
                	 }

                	 return  strRootClass
                },
                // 是否有儿子节点
                isChildren:function(){
                     return this.model.children.length>0 && this.num+1 != this.nodes;
                },
                // 展开/收起
                prefixClass:function(){
                	console.log(this.rootClass);

                	var returnChar = "";
                	if(this.rootClass.indexOf("docu")==-1){
	                	if(this.model.isFolder){
                           returnChar = "open";
	                	}else {
                           returnChar = 'close'
	                	}
	                }
	                return returnChar;
                }
        	},
            template: 
            `<li :class="'level' + num">
				<span class="button switch" :class="['level'+ num,  rootClass, prefixClass]" @click='open(model)'></span>
				<a :class="['level'+num, model.clickNode?'curSelectedNode':'']" @click='Func(model)'>
				    <span><img v-if='model.iconPath' :src='model.iconPath' :style='model.iconStyle'></span>
					<span class="node_name">{{model.name}}</span>
				</a>
				<ul :class="['level'+num, isChildren?'line':'']" v-show='model.isFolder'>
					<ztree-item v-for="(item,i) in model.children" :key='i' :callback='callback' :model="item" :num='i' root='1' :nodes='model.children.length' :trees='trees'></ztree-item>
				</ul>
			</li>`
		}
	},
	ready(){
		this.initTreeData();
	}
}
</script>