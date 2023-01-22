function goodVsEvil(good, evil){
    let goodScores = { 0: 1, 1: 2, 2: 3, 3: 3, 4: 4, 5: 10 };
    let evilScores = { 0: 1, 1: 2, 2: 2, 3: 2, 4: 3, 5: 5, 6:10 }
    let goodSum = good.split(" ").map((v, i, arr) => v * goodScores[i]).reduce((a, b) => a + b, 0);
    let evilSum = evil.split(" ").map((v, i, arr) => v * evilScores[i]).reduce((a, b) => a + b, 0);
  if(goodSum > evilSum) {
    return "Battle Result: Good triumphs over Evil"
  }else if (goodSum < evilSum){
    return "Battle Result: Evil eradicates all trace of Good";
  } else{
    return  "Battle Result: No victor on this battle field"
  }
     
  }