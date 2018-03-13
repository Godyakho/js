// 1
var a = 10
function fna() {
    console.log(a)
}

function b(fn) {
    var a = 100
    fn()
}
b(fna)
// 2
function F1(){
    var m = 15
    return function(){
        console.log(m)
    }
}

var f1 = F1()
var m = 150
f1()

//自由变量 在找父级作用域时寻找，并不是在执行时找，而是在定义时找

