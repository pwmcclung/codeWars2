function reverseIt(data){
    if (typeof data == 'number'){
      data = data.toString()
      return Number(data.split('').reverse().join(''))
    }
  if (typeof data == 'string'){
    return data.split('').reverse().join('')
  }else{
  return data
    }
   }
  