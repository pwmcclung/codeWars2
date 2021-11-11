function prime(num) {
    function isPrimeroo(n) {
     if(n == 2) return true
        for (let i = 2; i < n; i++) {
           if (n % i == 0) return false
       }
     return true
   }
     let r = []
     for(let i = 2; i <= num; i++){
       if(isPrimeroo(i)) r.push(i)
     }
     return r
   }