function consonantCount(str) {
    str = str.toLowerCase()
  str = str.replace(/[^a-z]/g, '')
    let arr = str.split('')
    let count = 0
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == 'b' || arr[i] == 'c' || arr[i] == 'd' || arr[i] == 'f' || arr[i] == 'g'||
         arr[i] == 'h' || arr[i] == 'j' || arr[i] == 'k' || arr[i] == 'l' || arr[i] == 'm'||
          arr[i] == 'n' || arr[i] == 'p' || arr[i] == 'q' || arr[i] == 'r' || arr[i] == 's'||
          arr[i] == 't' || arr[i] == 'v' || arr[i] == 'w' || arr[i] == 'x' || arr[i] == 'y'|| arr[i] == 'z'
        ){
        count++
      }
    }
  return count
}