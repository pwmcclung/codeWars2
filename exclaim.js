function product (string) {
    let arr = string.split('')
    let exclaim = 0
    let quest = 0
    for (let i = 0; i< arr.length; i++){
      if (arr[i] == '!'){
        exclaim++
      }else if (arr[i] == '?'){
        quest++
      }
    }
    let proOfThem = exclaim * quest
    return proOfThem
  }