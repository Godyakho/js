// 题目描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入 [1, 2, 3, 4, 2], 2
// 输出 [1, 3, 4]
function remove(arr, item) {
    var newarr = []
    arr.forEach(function(num){
        if(num !== item ){
            newarr.push(num)
        }
    })
    return newarr
}


// 题目描述
// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
// 示例1
// 输入 [1, 2, 3, 4, 2], 2
// 输出 [1, 3, 4]
function removeWithoutCopy(arr, item) { 
    while(arr.indexOf(item) !== -1) {
        arr.splice(arr.indexOf(item),1)
    }
    return arr
}

console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2))

// 题目描述
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入
// [1, 2, 3, 4]
// 输出
// [1, 2, 3]
function truncate(arr) {
    var newarr = []
    newarr = arr.slice(0,arr.length-1)
    return newarr
}

var obj = {
    'a':1,
    'b':2
}

sum = 0
for(const key in obj) {
    if(obj.hasOwnProperty(key)){
        sum += obj[key]
    }
}

console.log(sum)
var initValues = [ 0, 10, 20]
const initSum = initValues.reduce((a, b) => a+b, 0)
console.log(initSum)


var arr = []
console.log(Object.prototype.toString.call(arr))
console.log(arr instanceof Array);