function inAscOrder(arr) {
    //this for loop starts the function, creates a variable for i
    for(let i = 0; i < arr.length - 1; i++) {
        //this line is an if statement. it asks if arr[i] is greater than arr[i] plus 1
      if (arr[i] > arr[i+1]) {
        //if so return false, this means the array is not in order
        return false; 
      }
    }
    //else return true the array is in order
    return true;
  }