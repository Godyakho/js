function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var midIndex = Math.floor(arr.length / 2)
    var midValue = arr.splice(midIndex, 1)[0]
    console.log(midIndex,midValue)
    var leftarr = []
    var rightarr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            leftarr.push(arr[i])
        } else {
            rightarr.push(arr[i])
        }
    }
    return quickSort(leftarr).concat([midValue], quickSort(rightarr))
}

console.log(quickSort([45, 2, 8, 12, 4, 32, 97, 17]))