function moveVowel(input) {
    let newArrC = []
    let newArrV = []
    let arr = input.split('')
    for (let i = 0; i< arr.length; i++){
      if (arr[i] === 'a' || arr[i] === 'e' || arr[i] ==='i' || arr[i] === 'o'|| arr[i] ==='u'){
        newArrV.push(arr[i])
      }else{
        newArrC.push(arr[i])
      }
    }
      let arr2 = newArrC .concat(newArrV)
      return arr2.join('')
    }