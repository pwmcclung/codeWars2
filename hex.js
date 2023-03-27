function hexHash(code){
  
    let arr = code.split('')
    let newArr = arr.map(x => x.charCodeAt().toString(16)).join('')
    let changeStr = newArr.replace(/[^0-9]/gi, '')
    let newArrStr = changeStr.split('').reduce((a,b) => Number(a) + Number(b) * 1, 0)
    return newArrStr
    
  }