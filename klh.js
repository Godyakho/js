function total(x){
    return function(y){
        return x+y
    }
}
console.log(total(1)(2))

function sum(x) {
    var sum = 0
    sum += x
    var fn = function (y) {
     if(arguments.length === 0) {
         return sum
    } else {
        sum = sum + y
        return fn
     } 
    }
    fn.toString = fn.valueOf = function() {
        return sum
    }
    return fn
}


console.log(sum(1)(2))
// sum(1,2)

var a={}, b={key:'b'}, c={key:'c'};
var d = {}

// a['Object Object'] = 123
// a['Object Object'] = 456
// a['Object Object'] = 789
a[b]=123;
a[c]=456;
a[d]=789

console.log(a[b]);