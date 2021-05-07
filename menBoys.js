// code walkthrough
//this line creates the function, with one parameter
function menFromBoys(arr){
    //this line initializes the empty men array
    let men = []
    //this line initializes the empty boys array
    let boys = []
    // this line creates a for loop the will iterate over the original array
    for(let i = 0; i <arr.length; i++){
        //an if statment, if the element is even, 
      if (arr[i] % 2 ==0){
        //push it to the men array
        men.push(arr[i])
        //if the element is odd
      }else if (arr[i] % 2 != 0){
        //push it to the odd array
        boys.push(arr[i])
      }
    }
    //this line creates an array using the sort method on the men array and sorts in ascending order
    let menSorted = men.sort(function(a,b) {return  a - b })
    //this line creates an array using the sort method and sorts in descendnig order
    let boysSorted = boys.sort(function(a, b) {return  b - a })
    //this line uses the concat method to concatenate both arrays 
    let both = menSorted.concat(boysSorted)
    //this line returns the both array, and uses the filter method to filter out duplicates
   return both.filter((x, index) => both.indexOf(x) === index)
  }