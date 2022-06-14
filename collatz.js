var hotpo = function(n){
    if (n == 0|| n == 1){
      return 0
    }
  let count = 0
  while ( n != 1){
    if (n % 2 ==0){
      n = n/2
      count++
    }else if (n % 2 != 0){
      n = n* 3 + 1
      count++
      n = n / 2
      count ++
    }
  }
  return count
}