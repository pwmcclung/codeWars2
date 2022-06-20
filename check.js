function isPrime(n) {
    let newNum = []
    if (n ==0 || n == 1){
      return false
    }else{
    for (let i = 1; i <= n; i++){
      if (n % i ==0){
        newNum.push(i)
        }
      
    }
    if (newNum.length ==2){
      return true
    }else{
      return false
    }
}
}