// [a,b)
function num1 (a,b) {
    // Math.random()   [0,1) 
    //  如果找[1,3)   先找 [0,2) ，最后加上参数 a
   return Math.floor(Math.random()*(b-a)) + a        
}

// [a,b]
function num2(a,b) {
    return  Math.round(Math.random()*(b-a)) + a
}

// (a,b]
function num3(a,b) {
    var random = Math.random()
    //  [0,1)
    //  (1,3]
    //  [0,2]
    var mid = b-a
    if(Math.round(random*mid) === 0) {
        return a+1
    }
    return Math.round(random*mid) + a    
}


// (a,b)   (1,4)
//  [0,3]
function num4(a,b) {
    var random = Math.random()
    var mid = b-a
    if(Math.round(random*mid) === b - 1){
        return  b - 1
    }
    else if(Math.round(random*mid) === 0){
        return a + 1
    }
    else {
        console.log('third')
        return Math.round(random*mid) + 1
    }
}

console.log(num4(1,4))