function uniqueSum(lst){
  if (lst.length ===0){return null}
  let lstSet = new Set(lst)
  let sum = 0
  for (let e of lstSet.values()){
    sum += e
  }
  return sum || 0
}