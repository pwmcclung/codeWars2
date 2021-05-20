function paul(x){
 
    let scores = {'kata': 5, 'Petes kata': 10, 'life':0, 'eating':1}
    let change = x.map((e) => scores[e])
    let sum =0
    for (let i =0; i <change.length; i++){
      sum = sum + change[i]
    }
    if (sum <40){
      return 'Super happy!'
    }else if (sum <70 && sum >= 40){
      return 'Happy!'
    }else if (sum <100 && sum >= 70){
      return 'Sad!'
    }else{
      return 'Miserable!'
    }
    }