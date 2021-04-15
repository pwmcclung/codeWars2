// the stanton measure establishes n, by summing the times the number one shows up in an array and then
// counts how many times n is in the array

function stantonMeasure(n){
  // this line initializes count as zero
    let count = 0
    // this initializes a for loop and 
    for (let i = 0; i <n.length; i++){
      // if element n[i] is 1
      if (n[i] == 1){
        //count is incremented by one
        count++
      }
    }
    // this line initializes newCount as zero
    let newCount = 0
    //this for loop iterates over the n array again
    for (let j = 0; j<n.length; j++){
      // if element n[i] is equal to count 
      if (n[j] == count){
        // newCount is incremented by one
        newCount++
      }
    }
    //this line returns the newCount total
    return newCount
  }