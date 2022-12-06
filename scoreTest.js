function scoreTest(str, right, omit, wrong){
    let corr = 0
    let wrong1 = 0
    let omit1 = 0 
    for (let x = 0; x < str.length; x++){
      if (str[x] == 0){
        corr++
      }else if (str[x] == 1){
        omit1++
      }else{
        wrong1++
      }
    }
    let totCor = corr * right
    let totOmit = omit1 * omit
    let totWrong = wrong1 * wrong
    let sum = totCor + totOmit - totWrong
    return sum
    
  }