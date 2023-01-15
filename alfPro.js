function alphabet(ns) {
    let ordered = ns.sort((a, b) => a - b)
    let a = ordered[0]
    let b = ordered[1]
    let aTimesb = a * b
    let round1 = []
    let round2 = []
    let arr = []
     round1 = ordered.filter((x,y) => y !== ordered.indexOf(x) || x !== a)
     round2 = round1.filter((x,y) => y !== round1.indexOf(x) || x !== b)
     arr =   round2.filter((x,y) => y !== round2.indexOf(x) || x !== aTimesb)
    let letterC = arr[0]
    let letterD = arr.pop() / letterC
    return letterD
  
  }