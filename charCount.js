function validateWord(s)
{

    //code walkthrough
    // first I turn the string into lower case letters
  s = s.toLowerCase()
  //next I split the string into an array using the string method 'split'
  let arr = s.split('')
  //i initialize a frequency table variable, an empty object
  let freq = {}
  //using the for each array method, which executes a provided function once for each element in an array, i 
  // test if
  arr.forEach(item=>{
    // the item is in the freq object
    if(freq[item]){
        //ifso the item is increased by one
      freq[item]++;
      //else
    }else{
        // the item is added to the freq object and has a value of one added
      freq[item] =1
    }
  });
  //next I initialize a variable called arr1, and use the Object.values method on the freq object, 
  //this will return an array of the objects values 
  let arr1 = Object.values(freq)
  // then I use a for loop to iterate over the arr1 array
 for(let i = 0; i < arr1.length - 1; i++) {
       //if the element in arr1 index[i] is not equal to the element in arr1 index[i] plus 1 
        if(arr1[i] !== arr1[i+1]) {
             //return false
            return false;
        }
    }
    //else the elements are equal so retrun true
    return true;        
}

