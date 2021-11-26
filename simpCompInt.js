function interest(P,r,n) {
    let newArr = []
    let simp =  (P * r * n) + P
    let comp = (P * ((1 + r) ** n ) )
    simp = simp.toFixed(0)* 1
    comp = comp.toFixed(0) * 1
    newArr.push(simp)
    newArr.push(comp)
    return newArr
  }