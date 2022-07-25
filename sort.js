function sortGiftCode(code){
    let arr = code.split('')
    let sorted = arr.sort((a, b) => a.localeCompare(b))
    return sorted.join('')
  }