var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];  

var newarr = []
function getnewarr(arr) {
    arr.forEach( (item) => {
        if(typeof item === 'object') {
            getnewarr(item)
        } else {
            newarr.push(item)
        }
    })
}
getnewarr(arr)
console.log(newarr)

// 去重
// var target = []
// newarr.forEach((item) => {
//     if(target.indexOf(item) == -1) {
//         target.push(item)
//     }
// })
// console.log(target)

Array.prototype.tar = function(){
    return this.reduce(function(total,value){
        if(total.indexOf(value) === -1) {
            total.push(value)
        }
        return total
    },[])
}
console.log(newarr.tar())

var tar = newarr.tar()

tar.sort(function(a, b){
    return a - b
})

console.log(tar)