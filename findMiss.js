function findMissingLetter(array)
{
  let first
  let lowArr = ['a', 'b','c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z']
 for(let i = 0; i< array.length; i++) {
       first = lowArr.indexOf(array[i].toLowerCase())
     if(array[0] === array[0].toUpperCase()){
     if(lowArr[first+1].toUpperCase() !== array[i+1])
     return lowArr[first+1].toUpperCase()
} else if(array[0] === array[0].toLowerCase()) {
      if(lowArr[first+1] !== array[i+1])
      return lowArr[first+1].toLowerCase()
}
}
  }