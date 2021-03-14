function encryption(message) {
 
    let arr = message.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (typeof arr[i] == 'string'){
      newArr.push(CHAR_TO_MORSE[arr[i]] || arr[i])
        }
    }
    return newArr.join(' ')
   
  }