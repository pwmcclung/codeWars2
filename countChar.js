function countChar(string, char) {
    let str = string.toLowerCase()
    char = char.toLowerCase()
    let arr = str.split('')
    let count = 0
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == char){
        count++
      }
    }
    return count
  }