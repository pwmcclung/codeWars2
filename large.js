function largest(n,xs){
    let sorted = xs.sort(function(a,b) {return b - a})
   let newArr = sorted.slice(0,n)
  let newS = newArr.sort(function(a,b){return a-b})
  return newS
}