function schoolSelection(array) {
    // this creates an array with the grade names 
    let grades = ['Kindergarten', '1st grade', '2nd grade', '3rd grade', '4th grade']
    // this establishes the kindergarten count
    let kCount = 0
    //this establishes the first grade count
    let oneCount = 0
    //this is second grade count
    let twoCount = 0
    //this is third grade count
    let threeCount = 0
    //this is fourth grade count
    let fourCount = 0
    // a for loop to iterate over the array of ages
    for (let i = 0; i < array.length; i++){
        //if the element is 5 
      if (array[i] == 5){
        //kindergarten count is increased
        kCount++
        //else if element is 6
      }else if (array[i] == 6){
        //one count increases by one
        oneCount++
        //if element is 7
      }else if (array[i] == 7){
        //two grade is increased
        twoCount++
        //if element is 8 
      }else if (array[i] == 8){
        //third grade is increased
        threeCount++
        //if age is 9
      }else if (array[i] == 9){
        //fourth grade increases
        fourCount++
      }
    }
    //this creates an array of counts
    let newArr = [kCount, oneCount, twoCount, threeCount, fourCount]
    //this creates an empty object
    let obj = {}
    // using the for each method, we iterate over the grades array and for each element(k)we create an object key and add the value from newARr
    grades.forEach((k, i) => {obj[k] = newArr[i]})
    //we retunr grades
    return obj;
  }