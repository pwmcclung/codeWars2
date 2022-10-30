function any(arr, fun){
    // the array.prototype.some() method tests whether at least one element in the array 
    // passes the test implemented by the provided function. it returns true, if in the array, 
    //it finds an element for which the provided function returns true, otherwise it returns false. it
    //does not modify the array.
    //the solve this problem I used the some() method, passed in function as an argument
    return arr.some(fun)
  }