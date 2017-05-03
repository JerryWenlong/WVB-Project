import Vue from 'vue'
require('lodash');

var myTools = require("selfDir/myTools.js");
var Velocity= require('vendorDir/velocity.min.js');
require('vendorDir/TweenLite.min.js')
var TWEEN = require('tween.js')

var animatedInteger = require("componentsDir/animated-integer.vue")
var arr = [];

arr.push({context:myTools.randerHtmlCodeStr(
    `var data_1 = {a:1}
    var vm_1 = new Vue({
        data: data_1
    }) 
    vm_1.a = 2;
    //data_1.a is: 2`),
    title: '值的绑定'
})

arr.push({
title: '事件绑定',
context:
`
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
`, rander: function(){
    new Vue({
          el: '#demo',
          data: {
            show: true
          }
        })
    }
})

arr.push({
    title: '过渡效果-同时使用Transitions和Adminations',
    context: `
        <div id="example-4">
          <button @click="show = !show">
            Toggle
          </button>
          <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
          >
            <p v-if="show">
              Demo
            </p>
          </transition>
        </div>
    `,
    rander: function(){
        new Vue({
          el: '#example-4',
          data: {
            show: false
          },
          methods: {
            beforeEnter: function (el) {
              el.style.opacity = 0
              el.style.transformOrigin = 'left'
            },
            enter: function (el, done) {
              Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
              Velocity(el, { fontSize: '1em' }, { complete: done })
            },
            leave: function (el, done) {
              Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
              Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
              Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
              }, { complete: done })
            }
          }
        })
    }
})

arr.push({
    title: '过渡效果-多个元素过渡',
    context: `
    <div id="example-5" class="example-5">
    <transition name="example-5">
      <button v-bind:key="isEditing" v-on:click="isEditing = !isEditing">
        {{ isEditing ? 'ON' : 'OFF' }}
      </button>
    </transition>
    </div>
    `,
    rander: function(){
        new Vue({
            el: '#example-5',
            data: {
                isEditing: false
            }
        })
    }
})

arr.push({
  title: '过渡效果-多个组件过渡',
  context: `
    <div id="example-6">
      <input type="radio" value="v-a" id="example-6-a" v-model="view" />
      <label for="example-6-a">A</label>
      <input type="radio" value="v-b" id="example-6-b" v-model="view" />
      <label for="example-6-b">B</label>
      <transition name="example-6" mode="out-in">
        <component v-bind:is="view"></component>
      </transition>
    </div>
  `,
  rander: function(){
    new Vue({
      el: '#example-6',
      data: {
        view: 'v-a'
      },
      components: {
        'v-a': {
          template: '<div>Component A</div>'
        },
        'v-b': {
          template: '<div>Component B</div>'
        }
      }
    })
  }
})

arr.push({
  title: '列表过渡',
  context: `
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{item}}
        </span>
      </transition-group> 
    </div>
  `,
  rander: function(){
    new Vue({
      el: '#list-demo',
      data: {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
      },
      methods: {
        randomIndex: function(){
          return Math.floor(Math.random() * this.items.length)
        },
        add: function(){
          this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function(){
          this.items.splice(this.randomIndex(), 1)
        },
        shuffle: function(){
          this.items = _.shuffle(this.items)
        }        
      }
    })
  }
})

arr.push({
  title: 'Lazy Sudoku',
  context: `
    <div id="sudoku-demo" class="demo">
      <p>Keep hitting the shuffle button until you win.</p>
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="cell" class="sudoku-container" tag="div" >
        <div v-for="cell in cells" v-bind:key="cell.id" class="cell">
          {{cell.number}}
        </div>
      </transition-group> 
    </div>
  `,
  rander: function(){
    new Vue({
      el: '#sudoku-demo',
      data: {
        cells: Array.apply(null, { length: 81 })
          .map(function (_, index) {
            return {
              id: index,
              number: index % 9 + 1
            }
          })
      },
      methods: {
        shuffle: function () {
          this.cells = _.shuffle(this.cells)
        }
      }
    })

  }
})

arr.push({
  title: '列表渐进过渡',
  context: `
    <div id="example-7">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="User Name"
         aria-describedby="basic-addon1" v-model="query">
      </div>
      
      <transition-group
        name="staggered-fade"
        tag="ul"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <li
          v-for="(item, index) in computedList"
          v-bind:key="item.msg"
          v-bind:data-index="index"
        >{{ item.msg }}</li>
      </transition-group>
    </div>
  `,
  rander: function(){
    new Vue({
      el: '#example-7',
      data: {
        query: '',
        list: [
          { msg: 'Bruce Lee' },
          { msg: 'Jackie Chan' },
          { msg: 'Chuck Norris' },
          { msg: 'Jet Li' },
          { msg: 'Kung Fury' }
        ]
      },
      computed: {
        computedList: function(){
          let vm = this;
          return this.list.filter(function(item){
            return item.msg.toLowerCase().includes(vm.query.toLowerCase())
          })
        }
      },
      methods: {
        beforeEnter: function(el){
          el.style.opacity = 0;
          el.style.height = 0;
        },
        enter: function(el, done){
          var delay = el.dataset.index * 150
          setTimeout(function(){
            Velocity(el,{opacity:1, height: '1.6em'},{complete: done}),
            delay
          })
        },
        leave: function(el, done){
          var delay = el.dataset.index * 150
          setTimeout(function(){
            Velocity(el,{opacity:0, height: 0},{complete: done}),
            delay
          })
        }
      }
    })
  }
})

arr.push({
  title: '动态过渡',
  context: `
    <div id="example-8">
      <div class="input-group">
        <span class="input-group-addon">Fade In</span>
        <input type="range" class="form-control" v-model="fadeInDuration" min="0" v-bind:max="maxFadeDuration"/>
      </div>
      <div class="input-group">
        <span class="input-group-addon">Fade Out</span>
        <input type="range" class="form-control" v-model="fadeOutDuration" min="0" v-bind:max="maxFadeDuration"/>
      </div>
      <transition v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave">
        <p v-if="show">Hello</p>
      </transition>
    </div>
  `,
  rander: function(){
    new Vue({
      el:'#example-8',
      data: {
        show: true,
        fadeInDuration:1000,
        fadeOutDuration:1000,
        maxFadeDuration:1500,
        stop: false
      },
      mounted: function(){
        this.show = false;
      },
      methods: {
        beforeEnter: function(el){
          el.style.opacity = 0
        },
        enter: function(el, done){
          var vm = this
          Velocity(el, {
            opacity: 1
          },{
            duration: this.fadeInDuration,
            complete: function(){
              done()
              if(!vm.stop) vm.show=false
            }
          })
        },
        leave: function(el, done){
          var vm = this
          Velocity(el, {
            opacity: 0
          },{
            duration: this.fadeOutDuration,
            complete: function(){
              done()
              vm.show=true
            }
          })
        }
      }
    })
  }
});

arr.push({
  title: '过渡状态',
  context: `
    <div id='example-9'>
      <input v-model.number="number" type="number" step="20">
      <p>{{animatedNumber}}</p>
    </div>
  `,
  rander: function(){
    new Vue({
      el: '#example-9',
      data: {
        number: 0,
        animatedNumber: 0
      },
      watch: {
        number: function(newValue, oldValue){
          var vm = this;
          function animate(time){
            requestAnimationFrame(animate)
            TWEEN.update(time)
          }
          new TWEEN.Tween({tweeningNumber: oldValue})
            .easing(TWEEN.Easing.Quadratic.Out)
            .to({tweeningNumber:newValue}, 1000)
            .onUpdate(function(){
              vm.animatedNumber = this.tweeningNumber.toFixed(0)
            })
            .start()

          animate()
        }
      }
    })
  }
})

arr.push({
  title: '动态状态转换',
  context: `
    <div id="example-10">
      <svg width="200" height="200">
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="90"></circle>
      </svg>
      <label>Sides: {{ sides }}</label>
      <input 
        type="range" 
        min="3" 
        max="500" 
        v-model.number="sides"
      >
      <label>Minimum Radius: {{ minRadius }}%</label>
      <input 
        type="range" 
        min="0" 
        max="90" 
        v-model.number="minRadius"
      >
      <label>Update Interval: {{ updateInterval }} milliseconds</label>
      <input 
        type="range" 
        min="10" 
        max="2000"
        v-model.number="updateInterval"
      >
    </div>
  `,
  rander: function(){
    new Vue({
      el: '#example-10',
      data: function () {
        var defaultSides = 10
        var stats = Array.apply(null, { length: defaultSides })
          .map(function () { return 100 })
        return {
          stats: stats,
          points: generatePoints(stats),
          sides: defaultSides,
          minRadius: 50,
          interval: null,
          updateInterval: 500
        }
      },
      watch: {
        sides: function (newSides, oldSides) {
          var sidesDifference = newSides - oldSides
          if (sidesDifference > 0) {
            for (var i = 1; i <= sidesDifference; i++) {
              this.stats.push(this.newRandomValue())
            }
          } else {
            var absoluteSidesDifference = Math.abs(sidesDifference)
            for (var i = 1; i <= absoluteSidesDifference; i++) {
              this.stats.shift()
            }
          }
        },
        stats: function (newStats) {
          TweenLite.to(
            this.$data, 
            this.updateInterval / 1000, 
            { points: generatePoints(newStats) }
          )
        },
        updateInterval: function () {
          this.resetInterval()
        }
      },
      mounted: function () {
        this.resetInterval()
      },
      methods: {
        randomizeStats: function () {
          var vm = this
          this.stats = this.stats.map(function () {
            return vm.newRandomValue()
          })
        },
        newRandomValue: function () {
          return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius))
        },
        resetInterval: function () {
          var vm = this
          clearInterval(this.interval)
          this.randomizeStats()
          this.interval = setInterval(function () { 
            vm.randomizeStats()
          }, this.updateInterval)
        }
      }
    })

    function valueToPoint (value, index, total) {
      var x     = 0
      var y     = -value * 0.9
      var angle = Math.PI * 2 / total * index
      var cos   = Math.cos(angle)
      var sin   = Math.sin(angle)
      var tx    = x * cos - y * sin + 100
      var ty    = x * sin + y * cos + 100
      return { x: tx, y: ty }
    }

    function generatePoints (stats) {
      var total = stats.length
      return stats.map(function (stat, index) {
        var point = valueToPoint(stat, index, total)
        return point.x + ',' + point.y
      }).join(' ')
    }
  }
})

arr.push({
  title: '组件组织过渡',
  context: `
    <div id="example-11">
      <input v-model.number="firstNumber" type="number" step="20"> +
      <input v-model.number="secondNumber" type="number" step="20"> =
      {{ result }}
      <p>
        <animated-integer v-bind:value="firstNumber"></animated-integer> +
        <animated-integer v-bind:value="secondNumber"></animated-integer> =
        <animated-integer v-bind:value="result"></animated-integer>
      </p>
    </div>
  `,
  rander: function(){
    new Vue({
      el: '#example-11',
      data: {
        firstNumber: 20,
        secondNumber: 40
      },
      computed: {
        result: function () {
          return this.firstNumber + this.secondNumber
        }
      },
      components: {
        animatedInteger
      }
    })
  }
})


module.exports = arr;