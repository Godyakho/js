var pro = new Promise(function(resolve,reject){
    setTimeout(function(){
        var a = Math.round(Math.random()*10)
        if(a<=5){
            resolve(a)
        }else {
            reject([a, 'err num > 5'])
        }
        },2000)
})

pro.then(function(data){
    console.log(data)
},function(data){
   console.log(data)
})

function runAsync1(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}

// Promise.all([runAsync1()])
// .then(function(results){
//     console.log(results);
// });
// catch   在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了，那么并不会报错卡死js，而是会进到这个catch

// Promise 模仿实现
function vPromise() {
    this.callbacks = []
}

vPromise.prototype.then = function(fn) {
    this.callbacks.push(fn)
    return this
}

vPromise.prototype.resolve = function(data) {
    var fn = this.callbacks.shift()
    fn(data)    
}

var promise2 = new vPromise()

getCity()
  .then(getWeather)
  .then(getSuggestion)

function getCity(){
  setTimeout(function(){
    promise2.resolve('Beijing')
  }, 1000)
  return promise2   
}

function getWeather(city){
    setTimeout(function(){
    promise2.resolve(city + ' 晴天')
    }, 1000)
  }
  function getSuggestion(weather){
    setTimeout(function(){
      console.log(weather + ' 天气不错')
    }, 1000)
  }