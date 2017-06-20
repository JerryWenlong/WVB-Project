require("jquery");
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('cssDir/demo.css');
require('commonLayout')

function createArray(...elements){
    let handler = {
        get(target, propKey, receiver){
            let index = Number(propKey);
            if(index < 0){
                propKey = String(target.length + index)
            }
            return Reflect.get(target, propKey, receiver)
        }
    }
    let target = [];
    target.push(...elements);
    return new Proxy(target, handler)
}

let arr = createArray('a', 'b', 'c')
console.log('arr[-1] --> '+arr[-1])

var tools = {
    double: n => n*2,
    pow: n => n*n,
    reverseInt: n => n.toString().split("").reverse().join("") | 0
}
var pipe = (function () {
  return function (value) {
    var funcStack = [];
    var oproxy = new Proxy({} , {
      get : function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            return fn(val);
          },value);
        }
        funcStack.push(tools[fnName]);
        return oproxy;
      }
    });

    return oproxy;
  }
}());

pipe(3).double.pow.reverseInt.get; // 63

let p1 = new Promise(function(resolve, reject){
    console.log('p1 started')
    setTimeout(()=>reject(new Error('fail')), 3000)
})
let p2 = new Promise(function(resolve, reject){
    console.log('p2 started')
    setTimeout(()=>resolve(p1), 1000)
})
p2.then(result => console.log(result)).catch(error=>console.log(error))

//async/await test
var url = ''
var fetch_timeout = function(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms)
    })
}
var fetchAsync = async function(value, ms){
    try{
        await fetch_timeout(ms)
        console.log(value)
    }catch(err){
        console.log("Oops, error", err)
    }
}
fetchAsync('fetch test => hello', 5000)
