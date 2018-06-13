var a = {
    get:() => {
            console.log(this) 
        }
}
var b = {
    get:function(){
        (()=>{
      console.log(this)
    })()
  }
}

a.get()  
b.get()