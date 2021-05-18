function stickyCalc (operation, val1, val2){
    val1 = Math.round(val1)
    val2 = Math.round(val2)
     let concatenated = String(val1) + String(val2)
     let num = Number(concatenated)
     num = Math.round(num)
    let ans = 0
   if (operation == '+'){
    ans = num + val2
   }
    if (operation == '-'){
     ans = num - val2
   }
    if (operation == '*'){
     ans = num * val2
   }
    if (operation == '/'){
     ans = num / val2
   }
   return Math.round(ans)
  }