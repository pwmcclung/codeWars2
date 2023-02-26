function spot(s1,s2){
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let diffIndexes = []
  for (let i = 0; i <arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      diffIndexes.push(i)
    }
  }
  return diffIndexes  || []
}