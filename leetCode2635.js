// given an integer array, arr, and a mapping function, return a new array with a transformation applied to each
//element. Do Not Use the Array.map method.

var map = function(arr, fn) {
    let newArr = []
    for (let i = 0;  i < arr.length; i++){
        newArr.push(fn(arr[i], i));
    }
    return newArr;
};