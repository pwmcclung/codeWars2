function truncateString(str, num) {
    let newStr = ''
    let newStr2 = ''
    let newStr3 = ''
    if (num >= str.length){
      newStr3 = str
    }else if (num <= str.length && num > 3){
      newStr = str.slice(0, num)
      newStr2 = newStr.slice(0, (newStr.length - 3))
      newStr3 = newStr2 +='...'
    }else if (num <= 3){
      newStr = str.slice(0, num)
      newStr3 = newStr += '...'
    }
    return newStr3
  }