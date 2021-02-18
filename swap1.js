function swapVowelCase(str) {
    if (str == ' '){
      return ' '
    }
    let newArr = []
    let arr = str.split('')
    let i;
    for( i = 0; i <arr.length; i++){
      if (arr[i] == 'a'|| arr[i] == 'e'|| arr[i] == 'i' || arr[i] == 'o' ||arr[i]== 'u'){
        newArr.push(arr[i].toUpperCase())
    }else if (arr[i] == 'A'|| arr[i] == 'E'|| arr[i] == 'I' || arr[i] == 'O' ||arr[i] == 'U'){
        newArr.push(arr[i].toLowerCase())
      }else{
        newArr.push(arr[i])
      }
   
  }
     return newArr.join('')
    }