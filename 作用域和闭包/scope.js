// js  无块级作用域
if (true) {
    var name = 'A' 
}
console.log(name)

// 函数和全局作用域
var num = 15
function fn() {
    var num = 150
    console.log('fn',num)
}
console.log('global',num)
fn()


//作用域链
var a = 15
function f1() {
    var b = 30
    function f2() {
        // 自由变量 没有在作用域内定义的变量
        var c = 45
        console.log(a) 
        console.log(b)
        console.log(c)
    }
    f2()
}
f1()