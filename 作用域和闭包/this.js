// 构造函数
function Fn(type) {
    this.type = type
    console.log(this)  // Fn { type: 'arr' }
    // this 为fn1
}
var fn1 = new Fn('arr')

// 对象属性执行
var obj = {
    name: 'yh',
    printName: function(){
        console.log(this.name)
        console.log(this)    // { name: 'yh', printName: [Function: printName] } 
        // this为obj
    }
}
obj.printName()

// 普通函数
function fn2() {
    console.log(this)
    // this为window
}
fn2()

// call apply bind
function fn3() {
    console.log(this)
    // this为yh
}
fn3.call('yh')

var fn4 = function(){
    console.log(this)
    // this为yh
}.bind('yh')
fn4()
