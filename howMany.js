function countConsonants(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z]+/g, '')
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let noVowels = str.split('').filter((x)=>!vowels.includes(x))
  let count= 0
  let newArr = noVowels.filter((item, index) => noVowels.indexOf(item) === index)
  return newArr.length
  }