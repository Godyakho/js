function a() {
   var m = [1,2,3]
    change(m)
    console.log('1',m)
}

function change(m){
   var m =  m.concat([3,4])
   console.log('2',m)
}

a()