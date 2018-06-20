var arr = [13,15,17,13,14,18,12,14]


function duplicates(arr) {  
    var result = [];  
    arr.forEach(function(item){  
        if(arr.indexOf(item)!=arr.lastIndexOf(item)&&result.indexOf(item)==-1)  
            result.push(item);  
    })  
    return result;  
}  
duplicates(arr)


var jsonarr = [
    {id:1,name:'yang',age:41},
    {id:10,name:'guan',age:23},
    {id:3,name:'li',age:50},
    {id:2,name:'li11',age:50},
    {id:500,name:'guan',age:23}
]
function sortNumber(a,b) 
{  
    if(a.age == b.age){
        return a.id - b.id
    }
    return b.age  - a.age
} 
    jsonarr.sort(sortNumber)
