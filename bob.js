function countLettersAndDigits(input) {
  let count = 0
  let arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
             's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  input = input.toLowerCase()
  let arr = input.split('')
  let newArr = arr.filter(x => arr1.includes(x))
  return newArr.length
}