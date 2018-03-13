function first() {
    var _user = []
    return function(id) {
        if(_user.indexOf(id)== -1) {
            _user.push(id)
            return true
        } else {
            return false
        }
    }
}

var fn1 = first()
console.log(fn1(10))
console.log(fn1(10))
console.log(fn1(1))
console.log(fn1(1))


