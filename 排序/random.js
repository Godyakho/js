var arr = ['李','佳','航','杨','昊','上','官','林','海','牛']
var newarr = []
for (var i =0;i<arr.length;i++) {
    for(var j =i+1;j<arr.length;j++){
        var a = arr[i] + arr[j]
        var b = arr[j] + arr[i]
        newarr.push(a,b)
    }
}
console.log(newarr)
