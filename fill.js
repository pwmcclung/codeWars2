function save(sizes, hd) {
    let newArr = []
     let sizeMax = 0
     let count = 0
     if (sizes[0]> hd){
       return 0
     }
     for (let i = 0; i < sizes.length; i++){
       
       if (sizeMax < hd){
         sizeMax += sizes[i]
         newArr.push(sizes[i])
         count+=1
       }
       
     }
   let summed = newArr.reduce((a, b) => a + b,0)
   if (summed > hd){
     count -= 1
   }
     return count
   }function save(sizes, hd) {
 let newArr = []
  let sizeMax = 0
  let count = 0
  if (sizes[0]> hd){
    return 0
  }
  for (let i = 0; i < sizes.length; i++){
    
    if (sizeMax < hd){
      sizeMax += sizes[i]
      newArr.push(sizes[i])
      count+=1
    }
    
  }
let summed = newArr.reduce((a, b) => a + b,0)
if (summed > hd){
  count -= 1
}
  return count
}