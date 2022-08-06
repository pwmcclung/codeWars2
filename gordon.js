function gordon(a){
    a = a.toUpperCase()
    let newArr = []
    let arr = a.split('')
    for (let i = 0; i<arr.length; i++){
      if (arr[i] =='E' || arr[i] =='I'|| arr[i] =='O'||arr[i] =='U'){
        newArr.push('*')
      }else if (arr[i] == 'A'){
        newArr.push('@')
      }else {
        newArr.push(arr[i])
      }
    }
   let newStr = newArr.join('')
    let newArr1 = newStr.split(' ')
    let newArr2 = []
    for (let x of newArr1){
      newArr2.push(x + '!!!!')
    }
   return newArr2.join(' ')
  }