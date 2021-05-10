function encode(string) {
    let arr = string.split('')
    let enArr = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] =='a'){
        enArr.push(1)
      }else if (arr[i] == 'e'){
        enArr.push(2)
      }else if (arr[i] == 'i'){
        enArr.push(3)
      }else if(arr[i]== 'o'){
        enArr.push(4)
      }else if(arr[i] == 'u'){
        enArr.push(5)
      }else{
        enArr.push(arr[i])
      }
    }
    return enArr.join('')
  }
  
  function decode(string) {
    let arr1 = string.split('')
    let deArr = []
    for (let j = 0; j < arr1.length; j++){
      if (arr1[j] == '1'){
        deArr.push('a')
      }else if (arr1[j] == '2'){
        deArr.push('e')
      }else if (arr1[j] == '3'){
        deArr.push('i')
      }else if(arr1[j]== '4'){
        deArr.push('o')
      }else if(arr1[j] == '5'){
        deArr.push('u')
      }else{
        deArr.push(arr1[j])
      }
    }
    return deArr.join('')
  }