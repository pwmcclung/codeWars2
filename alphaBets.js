function solve(arr){  
    let alfaBets = 'abcdefghijklmnopqrstuvwxyz'
    let newArr = arr.map(x=>x.toLowerCase().split('').filter((letter, indy) => indy ==alfaBets.indexOf(letter)).length)
    return newArr
   
   };