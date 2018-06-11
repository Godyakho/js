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