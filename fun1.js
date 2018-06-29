// 数组先扁平化，在去重，后排序
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

// url 数组获取
var url = 'https://www.baidu.com/s?wd=js%20Array%20%E6%96%B9%E6%B3%95&rsv_spt=1&rsv_iqid=0x9e3ba5200001fa7a&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=30&rsv_sug1=22&rsv_sug7=101&rsv_t=0fa1lYsHWZo5omyxL2dZIcUr4wF2bJeJ1IkgiFuuIbsOowe%2FVw5mFy8pBeL24X6xJYma&rsv_sug2=0&inputT=17926&rsv_sug4=18167'
var newarr = url.split('?')[1].split('&')
var tem = []
newarr.forEach((item) => {
    var obj = {}
    var key = item.split('=')[0]
    var value = item.split('=')[1]
    obj[key] = value
    tem.push(obj)
})
console.log(JSON.stringify(tem))
