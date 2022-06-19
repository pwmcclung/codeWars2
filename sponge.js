function spongeMeme(sentence) {
    sentence = sentence.toLowerCase()
    let newArr = sentence.split('')
    let empty = []
    for (let i = 0; i<newArr.length; i++){
      if (i %2 ==0){
        empty.push(newArr[i].toUpperCase())
      }else{
        empty.push(newArr[i])
      }
      
    }
    return empty.join('')
  }