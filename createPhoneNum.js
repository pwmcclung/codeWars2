function createPhoneNumber(numbers){
  
    let numSet1 = numbers.slice(0,3).join('')
    let numSet2 = numbers.slice(3,6).join('')
    let numSet3 = numbers.slice(6,).join('')
    let nummy = `(${numSet1}) ${numSet2}-${numSet3}`
    return String(nummy)
  }