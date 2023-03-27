function sabb(s, val, happiness){
    let sab = {'s':1, 'a':1, 'b':1, 't':1, 'i':1, 'c':1, 'l':1}
    let arr = s.toLowerCase().split('')
    let arr1 = arr.map((e) => sab[e] || e)
  let sum = 0
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] == 1){
      sum++
    }
  }
  if (sum + val + happiness > 22){
    return 'Sabbatical! Boom!'
  }else{
    return 'Back to your desk, boy.'
  }
}