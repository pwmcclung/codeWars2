function flattenAndSort(array) {
    let arr = array.reduce((acc, val) => acc.concat(val), [])
    console.log(arr)
    let sorted = arr.sort(function (a,b) {return a - b})
    return sorted
    }