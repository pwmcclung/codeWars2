function isNarcissistic(n){
    let str = String(n)
    let arr = Array.from(str)
    let newArr = []
    for (let i = 0; i< arr.length; i++){
      newArr.push( Number(arr[i]) ** arr.length)
    }
    let sum = newArr.reduce((a,b) => a + b)
    if (sum === n){
      return true
    }else {
      return false
    }
}