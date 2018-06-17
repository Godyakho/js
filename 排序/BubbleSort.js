function bubblesort(arr) {
    for(var i =0; i<arr.length-1;i++){
        for(var j = i+ 1;j < arr.length;j++){
            var temp;
            if(arr[i]<arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubblesort([45, 2, 8, 12, 4, 32, 97, 17]))
 