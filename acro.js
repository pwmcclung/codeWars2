function toAcronym(inp){
    let arr = inp.split(' ')
    let newWord = []
    for (let i = 0; i <arr.length; i++){
      newWord.push(arr[i].slice(0,1))
    }
    return newWord.join('').toUpperCase()
  }