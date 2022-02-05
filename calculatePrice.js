//return price without vat
function excludingVatPrice(price){
    let sum;
    let num;
    if (price === null){
      return -1
    }
    if (Number(price)){
      sum = price / 1.15
      num = Number(sum.toFixed(2))
      return num;
      }else if(Number(price) === 0){
        return 0
      }
    
      //hello
      
  
    
  }