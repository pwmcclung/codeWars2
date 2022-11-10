function vowel2index(str) {
    if (str == ''){
      return ''
    }
    let  count = 0 
    let  strArr = str.split('')
    let newStrArr = []
    for (let i = 0; i < strArr.length; i++){
      count++
      if (strArr[i] == 'a' ||strArr[i] == 'A' || strArr[i] == 'e' ||strArr[i] == 'E' ||
         strArr[i] == 'i' ||strArr[i] == 'I' || strArr[i] == 'o' ||strArr[i] == 'O' ||
         strArr[i] == 'u' ||strArr[i] == 'U'){
        newStrArr.push(count)
      }else{
        newStrArr.push(strArr[i])
      }
    }
    return newStrArr.join('')
  }
  