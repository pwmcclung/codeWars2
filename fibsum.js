function fibonacci(max) {
    let fibon = [0,1]
   for (let i=1;fibon[i-1]+fibon[i]<max;i++){
     fibon.push(fibon[i-1]+fibon[i])
   }
   return fibon.reduce((a,b)=>a+(b%2==0?b:0),0)
}