function remove(s,n){
    let arr = s.split('')
   let newArr1 = []
   let exArr =[]
   let count = 0
   for (let i = 0; i <arr.length; i++){
     if (arr[i] == '!' && count < n){
       exArr.push(arr[i])
       count++
     }else {
       newArr1.push(arr[i])
       
     }
   } 
    return newArr1.join('')
    
  }