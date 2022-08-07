function solve(s){
    let arr1 = s.split('')
      let countUp = 0
    let countDown = 0
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] == arr1[i].toLowerCase()){
        countDown++
      }else if (arr1[i] == arr1[i].toUpperCase()){
        countUp++
      }
    }
    if (countDown >= countUp){
      return s.toLowerCase()
    }else{
      return s.toUpperCase()
    }
  }