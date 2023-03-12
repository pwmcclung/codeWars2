function convertPalindromes(numbers) {
   let palArr = []
   let strArr = []
   for (let i = 0; i < numbers.length; i++){
     strArr.push(numbers[i].toString())
   }
  for (let j = 0; j< strArr.length; j++){
    if (strArr[j] === strArr[j].split('').reverse().join('')){
      palArr.push(1)
    }else{
      palArr.push(0)
    }
  }
  return palArr
};