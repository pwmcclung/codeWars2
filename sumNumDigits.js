function sumDigits(number) {
    number = Math.abs(number)
    let num = String(number)
    let arr = Array.from(num)
    let newArr = []
    for (let i= 0; i<arr.length; i++){
      newArr.push(Number(arr[i]))
    }
    let sum = newArr.reduce((a, b) => a + b, 0)
    return sum
  }
  