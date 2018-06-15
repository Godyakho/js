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

Promise.all([runAsync1()])
.then(function(results){
    console.log(results);
});
// catch   在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了，那么并不会报错卡死js，而是会进到这个catch

// Promise 实现
function Promise() {

}