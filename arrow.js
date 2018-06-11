var a = {
    get:function() { 
        () => {
            console.log(this) 
        }
  }
}
var b = {
    get:()=>{
      console.log(this)
    }
}

a.get()  
b.get()