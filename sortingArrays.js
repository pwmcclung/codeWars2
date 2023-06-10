function sortArray(a1, a2) {
 let newArr = a1.map(wordFromA1 => a2.find(wordFromA2 => wordFromA1[0] === wordFromA2[0]));
  return newArr;
  }