function isValid(formula){
    let rule1 = !(formula.includes(1) && formula.includes(2))
   let rule2 = !(formula.includes(3) && formula.includes(4))
    let rule3 = formula.includes(5) === formula.includes(6)
    let rule4 = formula.includes(7) || formula.includes(8)
  
    return rule1 && rule2 && rule3 && rule4
    
  }