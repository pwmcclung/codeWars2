function semicolonSeparationToCommaSeparation(input) {
    let newStr = ''
    for (let i =0; i < input.length; i++){
      if (!isNaN(input[i] * 1)) 
        newStr += input[i] + ','
    }
  return newStr.slice(0, -1)
    
}