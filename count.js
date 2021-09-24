function nbDig(n, d) {
    let newNums = []
    let count = 0
    for (let i = 0; i<=n; i++){
      newNums.push(i**2)
    }
   newNums = newNums.join('').split('')
   for (let i = 0; i <newNums.length; i++){
     if (newNums[i] == d){
       count++
     }
   }
   return count
 }