/*!
 * Vue-RecyclerView.js v0.4.0
 * (c) 2017 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.RecyclerView=e()}(this,function(){"use strict";function t(t){if(!t)return l;if(u.test(t.type)){var e=t.touches[0];return{x:e.clientX,y:e.clientY}}return c.test(t.type)?{x:t.clientX,y:t.clientY}:l}function e(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1}function i(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),s=1;s<arguments.length;s++){var o=arguments[s];if(o)for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(i[n]=o[n])}return i}function s(t,e){for(var i=0,s=t.length;i<s;i++)if(e(t[i],i))return t[i]}function o(t,e,i){this.RUNWAY_ITEMS=i.prerender,this.RUNWAY_ITEMS_OPPOSITE=i.remain,this.ANIMATION_DURATION_MS=i.animation_duration_ms,this.TOMBSTONE_CLASS=i.tombstone_class,this.INVISIBLE_CLASS=i.invisible_class,this.MAX_COUNT=d,this.column=i.column||1,this.waterflow=i.waterflow,this.anchorItem={index:0,offset:0},this.timer=null,this.firstAttachedItem_=0,this.lastAttachedItem_=0,this.anchorScrollTop=0,this.tombstoneSize_=0,this.tombstoneWidth_=0,this.tombstones_=[],this.scroller_=t,this.source_=e,this.items_=i.list||[],this.loadedItems_=0,this.requestInProgress_=!1,this.cacheVM=i.cacheVM,this.options=i,this.source_.fetch||this.setItems(i.list),this.curPos=0,this.unusedNodes=[],this.baseNode=document.createElement("div"),this.scroller_.addEventListener("scroll",this.onScroll_.bind(this)),window.addEventListener("resize",this.onResize_.bind(this)),window.addEventListener("orientationchange",this.onResize_.bind(this)),this.initPosList(),this.onResize_()}function n(t){var e=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],y(t));return t.component(e.name,e),e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=(function(){function t(t){this.value=t}function e(e){function i(t,e){return new Promise(function(i,o){var h={key:t,arg:e,resolve:i,reject:o,next:null};r?r=r.next=h:(n=r=h,s(t,e))})}function s(i,n){try{var r=e[i](n),h=r.value;h instanceof t?Promise.resolve(h.value).then(function(t){s("next",t)},function(t){s("throw",t)}):o(r.done?"return":"normal",r.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":n.resolve({value:e,done:!0});break;case"throw":n.reject(e);break;default:n.resolve({value:e,done:!1})}n=n.next,n?s(n.key,n.arg):r=null}var n,r;this._invoke=i,"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),a=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}();Object.keys||(Object.keys=function(){var t=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],s=i.length;return function(o){if("object"!==(void 0===o?"undefined":r(o))&&"function"!=typeof o||null===o)throw new TypeError("Object.keys called on non-object");var n=[];for(var h in o)t.call(o,h)&&n.push(h);if(e)for(var a=0;a<s;a++)t.call(o,i[a])&&n.push(i[a]);return n}}());var l={x:0,y:0},c=/mouse(down|move|up)/,u=/touch(start|move|end)/,m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},d=1/0;o.prototype={onResize_:function(){var t=this.source_.createTombstone(this.baseNode.cloneNode(!0));t.style.position="absolute",this.scroller_.appendChild(t),t.classList.remove(this.INVISIBLE_CLASS),this.tombstoneSize_=t.offsetHeight/this.column,this.tombstoneWidth_=t.offsetWidth,this.scroller_.removeChild(t);for(var e=0;e<this.items_.length;e++)this.items_[e].top=-1,this.items_[e].height=this.items_[e].width=this.items_[e].cacheHeightCount=0;this.onScroll_()},onScroll_:function(){var t=this.scroller_.scrollTop-this.anchorScrollTop;0==this.scroller_.scrollTop?this.anchorItem={index:0,offset:0}:this.anchorItem=this.calculateAnchoredItem(this.anchorItem,t),this.anchorScrollTop=this.scroller_.scrollTop;var e=this.calculateAnchoredItem(this.anchorItem,this.scroller_.offsetHeight);t<0?this.fill(this.anchorItem.index-this.RUNWAY_ITEMS,e.index+this.RUNWAY_ITEMS_OPPOSITE):this.fill(this.anchorItem.index-this.RUNWAY_ITEMS_OPPOSITE,e.index+this.RUNWAY_ITEMS)},calculateAnchoredItem:function(t,e){if(0===e)return t;e+=t.offset;var i=t.index,s=0;if(e<0){for(;e<0&&i>0&&this.items_[i-1].height;)e+=this.items_[i-1].height,i--;s=Math.max(-i,Math.ceil(Math.min(e,0)/this.tombstoneSize_))}else{for(;e>0&&i<this.items_.length&&this.items_[i].height&&this.items_[i].height<e;)e-=this.items_[i].height,i++;(i>=this.items_.length||!this.items_[i].height)&&(s=Math.floor(Math.max(e,0)/this.tombstoneSize_))}return i+=s,e-=s*this.tombstoneSize_,i=Math.min(i,this.MAX_COUNT-1),{index:Math.floor(i/this.column)*this.column,offset:e}},fill:function(t,e){this.firstAttachedItem_=Math.max(0,t),this.lastAttachedItem_=e,this.attachContent()},getTombstone:function(){var t=this.tombstones_.pop();return t?(t.classList.remove(this.INVISIBLE_CLASS),t.style.opacity=1,t.style.transform="",t.style.transition="",t):this.source_.createTombstone(this.baseNode.cloneNode(!0))},layoutInView:function(t){var e=this.posList.get(Math.floor(t/this.column),t%this.column);if(!e)return!0;var i=e-this.anchorScrollTop;return i>.5*-window.innerHeight&&i<window.innerHeight},getUnUsedNodes:function(t){if(this.waterflow)for(var e=0,i=this.items_.length;e<i;e++)!this.items_[e].node||!t&&this.layoutInView(e)||(this.items_[e].vm?this.clearItem(this.items_[e]):this.clearTombstone(this.items_[e]),this.items_[e].vm=null,this.items_[e].node=null);else for(var s=0,o=this.items_.length;s<o;s++)s!==this.firstAttachedItem_?(this.items_[s].vm?this.clearItem(this.items_[s]):this.clearTombstone(this.items_[s]),this.items_[s].vm=null,this.items_[s].node=null):s=this.lastAttachedItem_-1},clearItem:function(t){if(this.options.reuseVM)this.scroller_.removeChild(t.node),this.source_.free(t.data);else{if(this.cacheVM&&t.node)return this.scroller_.removeChild(t.node);t.vm.$destroy(),t.node&&this.unusedNodes.push(t.node)}},clearTombstone:function(t){t.node&&(t.node.classList.contains(this.TOMBSTONE_CLASS)?(this.tombstones_.push(t.node),this.tombstones_[this.tombstones_.length-1].classList.add(this.INVISIBLE_CLASS)):this.unusedNodes.push(t.node))},clearUnUsedNodes:function(){for(;this.unusedNodes.length;)this.scroller_.removeChild(this.unusedNodes.pop())},getNodePosition:function(){this.anchorScrollTop=0;for(var t=0;t<this.anchorItem.index;t++)this.anchorScrollTop+=this.items_[t].height||this.tombstoneSize_;this.anchorScrollTop+=this.anchorItem.offset,this.curPos=this.anchorScrollTop-this.anchorItem.offset;for(var e=this.anchorItem.index;e>this.firstAttachedItem_;)this.curPos-=this.items_[e-1].height||this.tombstoneSize_,e--;for(;e<this.firstAttachedItem_;)this.curPos+=this.items_[e].height||this.tombstoneSize_,e++},initPosList:function(){for(var t={},e=0,i=this.column;e<i;e++)t[e]=this.curPos;this.posList={data:{0:t},get:function(t,e){if(!this.data[t]){for(var i={},s=0,o=this.column;s<o;s++)i[s]=this.curPos;this.data[t]=i}return void 0===e?this.data[t]:this.data[t][e]},set:function(t,e,i){this.get(t)[e]=i}}},tombstoneLayout:function(t){var e=void 0,i=void 0,s=void 0;for(e in t)i=t[e],s=e%this.column*this.items_[e].width,this.items_[e].node.style.transform="translate3d("+s+"px,"+(this.anchorScrollTop+i[1])*this.column+"px, 0) scale("+this.tombstoneWidth_/this.items_[e].width+", "+this.tombstoneSize_/this.items_[e].height+")",this.items_[e].node.offsetTop,i[0].offsetTop,this.items_[e].node.style.transition="transform "+this.ANIMATION_DURATION_MS+"ms"},itemLayout:function(t){var e=void 0,i=void 0,s=0,o=0,n=0;for(e=this.firstAttachedItem_;e<this.lastAttachedItem_;e++)i=t[e],this.waterflow&&(n=Math.floor(e/this.column)),s=e%this.column*(this.items_[e].width||this.tombstoneWidth_),o=this.waterflow?this.posList.get(n,e%this.column):this.curPos,i&&(i[0].style.transition="transform "+this.ANIMATION_DURATION_MS+"ms, opacity "+this.ANIMATION_DURATION_MS+"ms",i[0].style.transform="translate3d("+s+"px,"+o+"px, 0) scale("+this.items_[e].width/this.tombstoneWidth_+", "+this.items_[e].height/this.tombstoneSize_+")",i[0].style.opacity=0),this.items_[e].node&&this.curPos!==this.items_[e].top&&(i||(this.items_[e].node.style.transition=""),this.items_[e].node.style.transform="translate3d("+s+"px,"+o+"px, 0)"),this.items_[e].top=o,(e+1)%this.column==0&&(this.curPos+=(this.items_[e].height||this.tombstoneSize_)*this.column),this.waterflow&&this.posList.set(n+1,e%this.column,o+(this.items_[e].height||this.tombstoneSize_)*this.column)},setAnimatePosition:function(t){this.tombstoneLayout(t),this.itemLayout(t)},renderItems:function(){var t={},e=void 0,i=[],s=void 0,o=Math.floor((this.lastAttachedItem_+this.RUNWAY_ITEMS)/this.column)*this.column;for(o>this.MAX_COUNT&&(this.lastAttachedItem_=this.MAX_COUNT),s=this.firstAttachedItem_;s<this.lastAttachedItem_;s++){for(;this.items_.length<=s;)this.addItem_();if(this.items_[s].node){if(!this.items_[s].node.classList.contains(this.TOMBSTONE_CLASS)||!this.items_[s].data)continue;this.ANIMATION_DURATION_MS?(this.items_[s].node.style.zIndex=1,t[s]=[this.items_[s].node,this.items_[s].top-this.anchorScrollTop]):(this.items_[s].node.classList.add(this.INVISIBLE_CLASS),this.tombstones_.push(this.items_[s].node)),this.items_[s].node=null}this.waterflow?this.layoutInView(s)&&(e=this.items_[s].data?this.source_.render(this.items_[s].data,this.unusedNodes.pop()||this.baseNode.cloneNode(!0),this.items_[s]):this.getTombstone(),e.style.position="absolute",this.items_[s].top=-1,this.items_[s].node=e,i.push(e)):(e=this.items_[s].data?this.source_.render(this.items_[s].data,this.unusedNodes.pop()||this.baseNode.cloneNode(!0),this.items_[s]):this.getTombstone(),e.style.position="absolute",this.items_[s].top=-1,this.items_[s].node=e,i.push(e))}var n=i.length;for(s=0;s<n;s++)this.scroller_.appendChild(i[s]);return t},cacheItemHeight:function(t){for(var e=this.firstAttachedItem_;e<this.lastAttachedItem_;e++)this.items_[e].data&&this.items_[e].node&&(t||!this.items_[e].height)?(this.items_[e].height=this.items_[e].node.offsetHeight/this.column,this.items_[e].width=this.items_[e].node.offsetWidth,this.items_[e].cacheHeightCount=0):this.items_[e].cacheHeightCount<10&&(this.items_[e].cacheHeightCount++,this.items_[e].height&&this.items_[e].node&&this.items_[e].height!==this.items_[e].node.offsetHeight/this.column&&(this.items_[e].height=this.items_[e].node.offsetHeight/this.column))},attachContent:function(){var t=this;this.getUnUsedNodes();var e=this.renderItems();this.clearUnUsedNodes(),this.cacheItemHeight(),this.getNodePosition(),this.setAnimatePosition(e),this.ANIMATION_DURATION_MS&&setTimeout(function(){t.tombstoneAnimation(e)},this.ANIMATION_DURATION_MS),this.maybeRequestContent()},setItems:function(t){t=t||[],this.items_=t,this.MAX_COUNT=t.length},scrollToIndex:function(t){var e=this.lastAttachedItem_-this.firstAttachedItem_;this.fill(t-e,t+1)},setScrollRunway:function(){this.scrollRunwayEnd_=Math.max(this.scrollRunwayEnd_,this.curPos+this.SCROLL_RUNWAY),this.scrollRunway_.style.transform="translate(0, "+this.scrollRunwayEnd_+"px)",this.scroller_.scrollTop=this.anchorScrollTop},tombstoneAnimation:function(t){var e=void 0;for(var i in t)e=t[i],e[0].classList.add(this.INVISIBLE_CLASS),this.tombstones_.push(e[0]);t=null},maybeRequestContent:function(){var t=this;if(!this.requestInProgress_){var e=this.lastAttachedItem_-this.loadedItems_;e<=0||(this.requestInProgress_=!0,this.source_.fetch&&this.source_.fetch(e,this.loadedItems_).then(function(e){t.MAX_COUNT=e.count,t.addContent(e.list)}))}},addItem_:function(){this.items_.push({vm:null,data:null,node:null,height:0,width:0,top:0})},addContent:function(t){if(t.length){this.requestInProgress_=!1;for(var e=void 0,i=0;i<t.length;i++)this.items_.length<=this.loadedItems_&&this.addItem_(),this.loadedItems_<=this.MAX_COUNT&&(e=this.loadedItems_++,this.items_[e].data=t[i]);this.attachContent()}},clear:function(){this.loadedItems_=0,this.requestInProgress_=!1,this.firstAttachedItem_=-1,this.lastAttachedItem_=-1,this.getUnUsedNodes(!0),this.clearUnUsedNodes(),this.items_=[],this.onResize_()},destroy:function(){this.scroller_.removeEventListener("scroll",this.onScroll_),window.removeEventListener("resize",this.onResize_),window.removeEventListener("orientationchange",this.onResize_),this.clear()}};var f=function(){function t(e,i){var o=this;h(this,t),this.itemRender=i.item,this.TombstoneRender=i.tombstone,this.fetch=i.fetch,this.Vue=e,this.options=i,this.itemCache={data:{},length:0,get:function(t){return this.data[t]},set:function(t,e){this.length++,this.data[t]=e,this.length>i.cacheVM&&i.cacheVM>50&&this.recycle(10,t)},recycle:function(t,e){for(var i=void 0,s=Object.keys(this.data),o=s.length;t;)t--,i=s[Math.floor(Math.random()*o)],this.data[i]&&this.length--&&this.data[i].$destroy(),this.data[i]=null}},this.reuseVM={queue:[],generate:function(t,e){var i=s(o.reuseVM.queue,function(t){return!t.inuse});if(i)i.vm.data=t,i.inuse=!0,i.id=t.id;else{var n={props:{data:t}};o.options.props.data=t,o.options.props&&Object.keys(o.options.props).map(function(t){n.props[t]=o.options.props[t]});var r={el:e,data:n.props,render:function(t){return t(o.itemRender,n)}};i={id:t.id,inuse:!0,vm:new o.Vue(r)},o.reuseVM.queue.push(i)}return i.vm},free:function(t){s(this.queue,function(e){return e.id===t}).inuse=!1},destroy:function(t,e){for(var i=0,s=this.queue.length;i<s;i++)(this.queue[i].id===t||e)&&(this.queue.vm&&this.queue.vm.$destroy(),this.queue.splice(i,1))}}}return a(t,[{key:"createTombstone",value:function(t){var e=this;return new this.Vue({el:t,render:function(t){return t(e.TombstoneRender)}}).$el}},{key:"free",value:function(t){this.reuseVM.free(t.id)}},{key:"render",value:function(t,e,i){var s=this;if(this.options.reuseVM){var o=this.reuseVM.generate(t,e);return i.vm=o,o.$el}var n=void 0,r={props:{data:t}};this.options.props.data=t,this.options.props&&Object.keys(this.options.props).map(function(t){r.props[t]=s.options.props[t]});var h={el:e,render:function(t){return t(s.itemRender,r)}};return this.options.cacheVM?(n=this.itemCache.get(t.id))?(i.vm=n,n.$el):(n=new this.Vue(h),this.itemCache.set(t.id,n),i.vm=n,n.$el):(n=new this.Vue(h),i.vm=n,n.$el)}},{key:"destroy",value:function(){return this.reuseVM.destroy(null,!0),this.reuseVM.queue}}]),t}(),_={render:function(t){return t("div",{attrs:{class:"recyclerview-loading"}},"Loading...")}},p={render:function(t){return t("div",{attrs:{class:"recyclerview-item tombstone"},style:{height:"100px",width:"100%"}},"")}},v={preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/},distance:50,animation_duration_ms:200,tombstone_class:"tombstone",invisible_class:"invisible",prerender:20,remain:10,preventDefault:!1,column:1,waterflow:!1,cacheVM:0,reuseVM:!1,props:{}},y=function(s){return{name:"RecyclerView",props:{fetch:Function,list:Array,item:Object,loading:Object,tombstone:{type:Object,default:function(){return p}},column:Number,prerender:Number,remain:Number,waterflow:Boolean,preventDefault:Boolean,options:Object,tag:{type:String,default:"div"}},render:function(t){return t(this.tag,{attrs:{class:"recyclerview-container"}},[t(this.loading||_),t(this.tag,{attrs:{class:"recyclerview"},on:{touchstart:this._start,touchmove:this._move,touchend:this._end,touchcancel:this._end,mousedown:this._start,mousemove:this._move,mouseup:this._end}})])},data:function(){return{startPointer:{x:0,y:0},_options:{},distance:0,pulling:!1,_contentSource:null,scroller:null}},mounted:function(){this.init()},beforeDestroy:function(){this.scroller.destroy(),this.scroller=null},methods:{init:function(){this._options=i({},v,{prerender:this.prerender||v.prerender,remain:this.remain||v.remain,column:this.column||v.column,waterflow:this.waterflow||v.waterflow,fetch:this.fetch,list:this.list,item:this.item,loading:this.loading,tombstone:this.tombstone},this.options),this._contentSource=new f(s,this._options),this.$list=this.$el.querySelector(".recyclerview"),this.scroller=new o(this.$list,this._contentSource,this._options),this.$emit("inited")},scrollToIndex:function(t){var e=this;if(this.waterflow)for(var i=0,s=this.scroller.items_.length;i<s;i++)i===t&&this._scrollTo(this.scroller.items_[i].top-this.scroller.items_[i].height*this._options.column+this.$list.offsetWidth);else t=Number(t),this.scroller.scrollToIndex(t),this.$nextTick(function(){e._scrollToBottom()})},_scrollTo:function(t){t=t||0,this.$list.scrollTop=Number(t)},_scrollToBottom:function(){this._scrollTo(this.$list.scrollHeight)},_renderListStyle:function(){this.$list.style.transform="translate3d(0, "+this.distance+"px, 0)"},_start:function(i){this.$list.scrollTop>0||(this.pulling=!0,this.startPointer=t(i),this.$list.style.transition="transform .2s",this.preventDefault&&!e(i.target,this._options.preventDefaultException)&&i.preventDefault())},_move:function(i){if(this.pulling){var s=t(i),o=s.y-this.startPointer.y;if(o<0)return void this._scrollTo(-o);this.preventDefault&&!e(i.target,this._options.preventDefaultException)&&i.preventDefault(),this.distance=Math.floor(.5*o),this.distance>this._options.distance&&(this.distance=this._options.distance),m(this._renderListStyle.bind(this))}},_end:function(t){var i=this;this.pulling&&(this.preventDefault&&!e(t.target,this._options.preventDefaultException)&&t.preventDefault(),this.pulling=!1,this.$list.style.transition="transform .3s",this.$nextTick(function(){i.$list.style.transform=""}),this.distance>=this._options.distance&&(this.distance=0,this.scroller.clear()))}}}};!function(t,e){if("undefined"==typeof document)return e;t=t||"";var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t)),i.appendChild(s)}(".recyclerview-container{position:relative}.recyclerview-loading{position:absolute;top:0;left:0;width:100%;text-align:center;padding:10px;font-size:14px;color:#9e9e9e}.recyclerview{background:#fff;margin:0;padding:0;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:absolute;box-sizing:border-box;contain:layout;will-change:transform}",void 0);var g={install:n};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),g});
