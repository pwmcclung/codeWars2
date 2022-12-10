function calc(x){
    let total1 = []
    let total2 = [] 
    let arr = x.split('')
    let newArr =[]
    for (let i = 0; i <x.length; i++){
      newArr.push(x.charCodeAt(i))
    } 
   let str = newArr.join('')
    total1 = str.split('')
   
   
   for (let j = 0; j< total1.length; j++){
     if(total1[j] == "7"){
       total2.push('1')
     }else{
       total2.push(total1[j])
     }
   
  
 }
   let num1 = 0
   let num2 = 0
   for(let x of total1){
     num1 += Number(x)
   }
   
    for(let y of total2){
     num2 += Number(y)
   }
  return Math.abs(num1-num2)
 
   }
   