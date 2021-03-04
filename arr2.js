function removeNthElement(arr, n) {
    // Fix it
    var arrCopy = arr.slice();
    arrCopy.splice(n, 1); // removes the nth element
    return arrCopy;
  }